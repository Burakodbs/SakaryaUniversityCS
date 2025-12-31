import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, Keyboard } from 'react-native';
import * as Notifications from 'expo-notifications';

// ADIM 1: Handler Ayarı Buraya Gelecek

      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert:true,
          shouldPlaySound:true,
          shouldSetBadge:true,
        }),
      });

const App = () => {
  const [seconds, setSeconds] = useState('');

  // ADIM 2: İzinleri Alma (Uygulama açılınca)
  useEffect(() => {
    const configureNotifications = async () => {
      // Buraya izin kodlarını yazacağız

      const { status } = await Notifications.requestPermissionsAsync();

      if(status !== 'granted') {
        Alert.alert('İzin yok', 'Bildirim almak için izin vermelisiniz.');
        return ;
      }

    };

    configureNotifications();
  }, []);

  // ADIM 3: Bildirimi Hesaplama ve Gönderme
  const scheduleLocalNotification = async () => {
    // Klavyeyi kapatır
    Keyboard.dismiss(); 

    const timeInSeconds = parseInt(seconds);
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
      Alert.alert('Hata', 'Lütfen geçerli bir süre (saniye) giriniz.');
      return;
    }

    // Buraya bildirim planlama kodunu yazacağız

    const trigger = new Date(Date.now() + timeInSeconds * 1000);

    try {

          await Notifications.scheduleNotificationAsync({
            content: {
              title: 'Zaman Doldu!',
              body: `Belirttiğiniz ${timeInSeconds} saniye doldu! `,
              sound:true
            },
            trigger,
          });

          Alert.alert('Başarılı', `${timeInSeconds} saniye kuruldu.`);

    } catch (error) {

      Alert.alert('Hata', 'Bildirim gönderme hatası.');
    }

    setSeconds('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Push Bildirim Ayarla</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Kaç saniye sonra?" 
        keyboardType="numeric" 
        value={seconds} 
        onChangeText={setSeconds} 
      />
      
      <Button title="Bildirim Ayarla" onPress={scheduleLocalNotification} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export default App;

