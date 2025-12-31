// Gerekli React ve React Native bileşenleri
import React, { useState } from 'react'; // GELİŞTİRME 1: State için useState hook'unu import et
import {
  StyleSheet,
  //SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert, // Kullanıcıya geri bildirim (pop-up) göstermek için
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

// Expo kütüphaneleri
import { FontAwesome5 } from '@expo/vector-icons';
import Constants from 'expo-constants';

const theme = {
  colors: {
    primary: '#b0006d',
    primaryDark: '#8d015a',
    textLight: '#fff',
    textGray: '#929292',
    background: '#fff',
  },
  spacing: {
    small: 15,
    medium: 30,
    large: 60,
  },
  fontSize: {
    regular: 15,
    large: 20,
  },
  commonText: {
    color: '#fff',
    textAlign: 'center',
  },
};

// Ana Ekran Bileşenimiz
export default function MomoLogin() {
  /*
     State (Hafıza) Yönetimi
    Kullanıcının TextInput'a girdiği metni "hafızada" tutmak için
    'password' adında bir state ve onu güncelleyecek 'setPassword'
    fonksiyonunu tanımlıyoruz.
  */
  const [password, setPassword] = useState(''); // Başlangıçta hafıza (parola) boş

  // 'GİRİŞ' butonuna tıklandığında çalışacak fonksiyon
  const handleLogin = () => {
    // Gerçek bir uygulamada burada API'ye istek atılır
    if (password === '123456') {
      Alert.alert('Giriş Başarılı!', 'Hoş geldiniz!');
    } else {
      Alert.alert('Hata!', 'Hatalı parola girdiniz.');
    }
    console.log('Girilen Parola:', password); // Geliştirme için konsola yazdır
  };

  return (
    // SafeAreaView (Çentik vb. için güvenli alan)
    <SafeAreaProvider style={styles.container}>
      {/* Tüm içeriği 'content' View'ı ile sarıyoruz.
        Bu View, kenarlardan 'paddingHorizontal' ile boşluk verir.
      */}
      <View style={styles.content}>
        {/* Tepedeki Karşılama Metni */}
        <View style={styles.textWrapper}>
          <Text style={styles.hiText}>Merhaba!</Text>
          <Text style={styles.userText}>Gündüz Gökbörü</Text>
        </View>

        {/* Form Alanı (İkon, Input ve Buton) */}
        <View style={styles.form}>

          <View style={styles.inputContainer}>
            <FontAwesome5 name="lock" style={styles.iconLock} />

            <TextInput
              style={styles.inputPassword}
              keyboardType="numeric" // Tıklayınca numpad açılsın
              secureTextEntry={true} // Parola '*****' olarak gizlensin
              autoFocus={true} // Ekran açılınca imleç buraya odaklansın
              placeholder="Parolayı Giriniz"
              placeholderTextColor={theme.colors.textGray} // Placeholder rengi temadan
              // --- STATE BAĞLANTILARI ---
              value={password} // Görünen değer, state'teki 'password' olsun
              onChangeText={setPassword} // Her harf değiştiğinde 'setPassword' ile state'i güncelle
              // --- ---
            />
          </View>

          {/* Giriş Butonu
            onPress: Tıklandığında 'handleLogin' fonksiyonumuzu tetikle
          */}
          <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
            <Text style={styles.buttonLoginText}>GİRİŞ</Text>
          </TouchableOpacity>
        </View>

        {/* Alt Aksiyon Linkleri (Yan yana) */}
        <View style={styles.action}>
          <TouchableOpacity>
            <Text style={styles.userText}>Parolamı Unuttum</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.userText}
              numberOfLines={1}
              adjustsFontSizeToFit>
              Yeni Kayıt
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
// --- STİLLER (StyleSheet) ---
// Artık tüm stil değerleri 'theme' objemizden geliyor.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary, // Temadan
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: theme.spacing.medium, // Temadan
  },
  textWrapper: {
    marginTop: theme.spacing.large, // Temadan
    marginBottom: theme.spacing.medium, // Temadan
  },
  hiText: {
    ...theme.commonText, // Ortak stilleri temadan kopyala
    fontSize: theme.fontSize.large, // Temadan
    lineHeight: 50,
    fontWeight: 'bold',
  },
  userText: {
    ...theme.commonText, // Ortak stilleri kopyala
    fontSize: theme.fontSize.regular, // Temadan
    lineHeight: 30,
  },
  form: {
    marginBottom: theme.spacing.medium, // Temadan
  },

  /*
    Bu yeni konteyner, 'flexDirection: row' sayesinde
    ikonu ve input'u yan yana dizer ve 'alignItems: center'
    ile dikeyde ortalar.
  */
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 20, // İkon ve input için iç boşluk
    marginBottom: theme.spacing.small, // Butonla arasına boşluk
  },
  iconLock: {
    color: theme.colors.textGray,
    fontSize: 16,
    marginRight: 10, // İkonla input arasına boşluk
  },
  inputPassword: {
    flex: 1, // İkonun kapladığı yer dışında kalan TÜM alanı doldur
    height: '100%', // Ebeveyn (inputContainer) kadar yüksek ol
    fontSize: theme.fontSize.large,
    color: theme.colors.textGray,

  },
  buttonLogin: {
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.primaryDark, // Temadan
    justifyContent: 'center',
  },
  buttonLoginText: {
    ...theme.commonText, // Ortak stilleri kopyala
  },
  action: {
    flexDirection: 'row', // Linkleri yan yana diz
    justifyContent: 'space-between', // Birini sola, birini sağa yasla
  },
});
