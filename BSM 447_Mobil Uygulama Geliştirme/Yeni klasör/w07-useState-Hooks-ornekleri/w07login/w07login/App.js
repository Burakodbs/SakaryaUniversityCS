import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import Constants from 'expo-constants';

const theme = {
  colors: { primary: '#b0006d', primaryDark: '#8d015a', textLight: '#fff', textGray: '#929292', background: '#fff' },
  spacing: { small: 15, medium: 30, large: 60 },
  fontSize: { regular: 15, large: 20 },
  commonText: { color: '#fff', textAlign: 'center' },
};

export default function MomoLogin() {
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === '123456') {
      Alert.alert('Giriş Başarılı!', 'Hoş geldiniz!');
    } else {
      Alert.alert('Hata!', 'Hatalı parola girdiniz.');
    }
    console.log('Girilen Parola:', password);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.hiText}>Merhaba!</Text>
          <Text style={styles.userText}>Gündüz Gökbörü</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <FontAwesome5 name="lock" style={styles.iconLock} />
            <TextInput
              style={styles.inputPassword}
              keyboardType="numeric"
              secureTextEntry={true}
              autoFocus={true}
              placeholder="Parolayı Giriniz"
              placeholderTextColor={theme.colors.textGray}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
            <Text style={styles.buttonLoginText}>GİRİŞ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.action}>
          <TouchableOpacity>
            <Text style={styles.userText}>Parolamı Unuttum</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.userText} numberOfLines={1} adjustsFontSizeToFit>Yeni Kayıt</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.primary, paddingTop: Constants.statusBarHeight },
  content: { paddingHorizontal: theme.spacing.medium },
  textWrapper: { marginTop: theme.spacing.large, marginBottom: theme.spacing.medium },
  hiText: { ...theme.commonText, fontSize: theme.fontSize.large, lineHeight: 50, fontWeight: 'bold' },
  userText: { ...theme.commonText, fontSize: theme.fontSize.regular, lineHeight: 30 },
  form: { marginBottom: theme.spacing.medium },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.background, height: 60, borderRadius: 30, paddingHorizontal: 20, marginBottom: theme.spacing.small },
  iconLock: { color: theme.colors.textGray, fontSize: 16, marginRight: 10 },
  inputPassword: { flex: 1, height: '100%', fontSize: theme.fontSize.large, color: theme.colors.textGray },
  buttonLogin: { height: 50, borderRadius: 25, backgroundColor: theme.colors.primaryDark, justifyContent: 'center' },
  buttonLoginText: { ...theme.commonText },
  action: { flexDirection: 'row', justifyContent: 'space-between' },
});
