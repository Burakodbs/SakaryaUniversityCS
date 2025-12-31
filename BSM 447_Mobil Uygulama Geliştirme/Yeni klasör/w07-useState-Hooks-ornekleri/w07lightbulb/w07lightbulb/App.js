// Gerekli React ve React Native bileşenlerini import ediyoruz
import React, { useState } from "react";
import {
  Dimensions, // Cihaz boyutlarını almak için
  StyleSheet,
//  SafeAreaView,
  Switch, // Aç-kapa anahtarı
  Platform, // Android / iOS tespiti için
} from "react-native";

import { SafeAreaProvider } from 'react-native-safe-area-context'; 


// Expo kütüphanelerini import ediyoruz
import Constants from "expo-constants";

/*
  GELİŞTİRME 2: Resim yerine İkon Kullanımı
  İki ayrı JPG dosyası (bulb-on, bulb-off) yerine, 
  uygulama boyutunu küçülten ve kalitesi bozulmayan 
  tek bir vektörel ikonu kütüphaneden çağırıyoruz.
*/
import { FontAwesome5 } from "@expo/vector-icons";

// Cihazın genişliğini alıyoruz, böylece ikon boyutunu esnek (responsive) yapabiliriz
const { width: screenWidth } = Dimensions.get("window");

export default function TheLight() {
  // (1) STATE (HAFIZA)
  // isEnabled: ampulün durumunu (açık/kapalı) tutan değişken
  // setIsEnabled: bu durumu değiştirmemizi sağlayan fonksiyon
  const [isEnabled, setIsEnabled] = useState(false); // Varsayılan: kapalı (false)

  // (2) STATE GÜNCELLEME FONKSİYONU
  // Bu fonksiyon, Switch her değiştiğinde state'in "tam tersini" alır
  // (false ise true, true ise false yapar)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    // (3) GÖRÜNÜM (JSX)
    // SafeAreaView: Çentik (notch) gibi alanları hesaba katar
    <SafeAreaProvider style={styles.container}>

      {/* GELİŞTİRME 2 (Uygulaması): 
        <Image> bileşeni yerine <FontAwesome5> ikonunu kullanıyoruz.
      */}
      <FontAwesome5
        name="lightbulb" // İkonun adı
        style={styles.icon} // Boyutunu ve boşluğunu stilden alacak
        /*
          State'in gücü: State (isEnabled) değiştikçe, 
          ikonun 'color' özelliğini anlık olarak değiştiriyoruz.
        */
        color={isEnabled ? "yellow" : "#555"}
      />

      <Switch
        // Anahtarın 'ray' rengini state'e göre değiştiriyoruz
        trackColor={{ false: "#fff", true: "#52d964" }}
        thumbColor={"#fff"} // Anahtarın topuz rengi

        // Değer değiştiğinde (tıklandığında) toggleSwitch fonksiyonunu çağır
        onValueChange={toggleSwitch}
        // Switch'in konumu (açık/kapalı) state'imizden gelsin
        value={isEnabled}

        style={styles.switch} // Stili aşağıdan al

        /* GELİŞTİRME 3: Erişilebilirlik (Accessibility)
          Ekran okuyucu (VoiceOver vb.) kullanan kullanıcılar için
          bu anahtarın ne işe yaradığını açıklıyoruz.
        */
        accessibilityLabel="Ampul Anahtarı"
        accessibilityHint={
          isEnabled
            ? "Ampulü kapatmak için dokunun"
            : "Ampulü açmak için dokunun"
        }
      />
    </SafeAreaProvider>
  ); // RETURN 
} // FUNCTION

// (4) STİLLER (StyleSheet)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,

    /* GELİŞTİRME 1: Esnek Flexbox Düzeni
      Sabit pikseller veya 'alignSelf' yerine, ana konteynere
      justifyContent ve alignItems vererek içindeki her şeyi
      hem dikeyde hem yatayda mükemmel ortalıyoruz.
      Bu, her ekran boyutunda çalışır.
    */
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    /* İkonların boyutu 'width/height' ile değil, 
      'fontSize' ile kontrol edilir.
      Ekran genişliğine göre esnek bir boyut veriyoruz.
    */
    fontSize: screenWidth * 0.5, // Ekran genişliğinin %50'si kadar
    marginBottom: 40, // Anahtar ile arasına boşluk
  },
  switch: {
    /* GELİŞTİRME 4: Temiz Platform Kodu (Platform.select)
      Platforma özel stilleri 'Platform.OS === "android" ? ...' 
      gibi 'if/else' (ternary) yapıları yerine, bu temiz
      ve okunabilir obje yapısıyla yönetmek daha profesyoneldir.
    */
    ...Platform.select({
      android: {
        // Android'de anahtarı biraz büyüt
        transform: [{ scale: 2 }],
      },
      ios: {
        // iOS'ta da biraz büyütebiliriz (isteğe bağlı)
        transform: [{ scale: 1.2 }],
      },
    }),
  },
});


