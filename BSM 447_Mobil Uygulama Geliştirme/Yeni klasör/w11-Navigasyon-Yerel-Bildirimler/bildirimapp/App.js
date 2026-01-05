import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, Keyboard } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert:true,
    shouldPlaySound:true,
    shouldSetBadge:true,
  }),
});

const App = () => {
  const [seconds, setSeconds] = useState('');

  useEffect(() => {
    const configureNotifications = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if(status !== 'granted') {
        Alert.alert('İzin yok', 'Bildirim almak için izin vermelisiniz.');
        return;
      }
    };
    configureNotifications();
  }, []);

  const scheduleLocalNotification = async () => {
    Keyboard.dismiss();
    const timeInSeconds = parseInt(seconds);
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
      Alert.alert('Hata', 'Lütfen geçerli bir süre (saniye) giriniz.');
      return;
    }
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

export default App;

