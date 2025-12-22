import React from "react";
// Bunlar RN bileşenleri
import {
  StyleSheet,
  SafeAreaView,
  View, // HTML DIV
  Text,
  TouchableOpacity, // Resim, yazı vs tıklanabilir buton haline getiriyor
  TextInput, // Metin Girişi
} from "react-native";

//import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons"; // v4 vardı. v5 ile bazı ikonlar paralı. Standart her yerde kullanılan ikonlar. 
// Bu işlerde ikon, buton, aklınıza görsel anlamda ne gelirse, siz tasarlarsınız. Ama artık. Bazı şeyler yazılı olmasa da standart olarak kullanılıyor. 
// Bootstrap gibi, fontawsome gibi. Türkçe karakterleri kontrol etmek için ya da Büyük küçük çevrim işleri için ufak fonksiyonları yazıyorsunuz. 
// Ya da spesifik işler için lazım olan neyse onu ekliyorsunuz kütüphanenize.

import Constants from "expo-constants"; // Ekran yüksekliği, STATUS BAR, Safearea vs. gibi şeylerin yükseklik genişlik gibi özelliklerini sağlıyor.



export default function MomoLogin() {
  return (
    <SafeAreaView style={styles.container}>
     
     { /* <StatusBar style="light" /> */ }

      <View style={styles.content}>
        

       { /* Tepedeki View */ }

        <View style={styles.textWrapper}> 
          
          <Text style={styles.hiText}>Merhaba!</Text>
          <Text style={styles.userText}>Gündüz Gökbörü</Text>
        
        </View>

        <View style={styles.form}> { /* // Login View */ } 
         
          <FontAwesome5 name="lock" style={styles.iconLock} />
     
          { /* // Şifre Girişi */ } 
          <TextInput
            style={styles.inputPassword} // Hangi stilden alacak?
            keyboardType="numeric" // Otomatik olarak numpad çıkması için. Bu güzel özellik. Genelde bankacılık uygulamasında kullanılsa da 
            secureTextEntry={true} // ***** olarak gözükmesi için
            autoFocus={true} // otomatik olarak input'a imleci konumlandırmak için. 
            placeholder="Parolayı Giriniz" // Ne yazacak giriş yapılmadığı zaman
            placeholderTextColor="#929292" // bu placaHolder'ın rengi.
          />

       
          <TouchableOpacity style={styles.buttonLogin}>
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
    </SafeAreaView>
  );
}


// const SABİT TANIMLAMA
const TEXT = {
  color: "#fff", // Yazı rengi beyaz.
  textAlign: "center", // Metin özelliği olarak ortalanacak.
  // ...TEXT diyerek buradaki sabiti her yerde kullanabilirsiniz.
  // Hızdan kazanırsınız, uygulama boyutu vs. 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0006d",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  textWrapper: {
    marginTop: 60,
    marginBottom: 30,
  },
  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 15,
    lineHeight: 30,
  },
  form: {
    marginBottom: 30,
  },
  iconLock: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 22,
    left: 22,
    zIndex: 10,
  },
  inputPassword: {
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#929292",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
  buttonLogin: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#8d015a",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonLoginText: {
    ...TEXT,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});


