// components/HeightSelection.js - Boy Seçimi Bileşeni

import React from "react";
// Platform: Android ve iOS ayrımı için.
import { StyleSheet, View, Text, Platform } from "react-native";

// --- 3. PARTİ KÜTÜPHANE KULLANIMI ---
// React Native'in çekirdek sürümünden 'Slider' bileşeni kaldırıldı (Lean Core).
// Bu yüzden topluluk tarafından geliştirilen paketi kullanıyoruz.
// Kurulum: npm install @react-native-community/slider --save
import Slider from "@react-native-community/slider";

// --- ASSET (VARLIK) YÖNETİMİ ---
// Slider'ın tutamaç (thumb) resmi. 
// React Native'de resimleri import ederek kullanmak performans açısından daha iyidir.
import sliderThumbImage from "../assets/slider-thumb-image.png";

// Ortak stillerimizi çağırıyoruz.
import { BOX, TEXT_VALUE, TEXT_LABEL } from "../style";

// Sabitler (Magic Numbers kullanmamak için)
const MIN_HEIGHT = 50;  // En kısa 50 cm
const MAX_HEIGHT = 250; // En uzun 250 cm

function HeightSelection({ style, height, setHeight }) {
  return (
    // style prop'u dışarıdan (App.js'den) geliyor.
    // Böylece bileşenin dış boşluklarını (margin) çağırdığımız yerden yönetebiliyoruz.
    <View style={style}>
      <View style={styles.heightSelection}>
        <Text style={styles.label}>BOY</Text>

        {/* Dinamik Değer Gösterimi */}
        <Text style={styles.value}>
          {height}
          <Text style={styles.unit}> cm</Text>
        </Text>

        {/* --- SLIDER BİLEŞENİ --- */}
        <Slider
          style={styles.slider}
          
          // Slider'ın alabileceği en düşük ve en yüksek değerler
          minimumValue={MIN_HEIGHT}
          maximumValue={MAX_HEIGHT}
          
          // Renk Ayarları
          minimumTrackTintColor="#9a5871" // Solda kalan (dolu) kısmın rengi
          maximumTrackTintColor="#000000" // Sağda kalan (boş) kısmın rengi
          
          // --- PLATFORM FARKLILIĞI ---
          // Android'de özel bir resim (ikon) kullanmak istedik.
          // iOS'te ise sistemin kendi yuvarlağı daha şık durduğu için null geçtik.
          thumbImage={Platform.OS === "android" ? sliderThumbImage : undefined}
          
          // --- EVENT (OLAY) YÖNETİMİ ---
          // Kullanıcı parmağını her sürüklediğinde bu fonksiyon çalışır.
          // Gelen değer (value) ondalıklı olabilir (170.543 gibi).
          // Math.round ile tam sayıya yuvarlayıp state'i güncelliyoruz.
          onValueChange={(value) => setHeight(Math.round(value))}
          
          // Slider'ın o anki değerini state'den alıyoruz (Controlled Component)
          value={height}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heightSelection: {
    ...BOX, // style.js'den gelen kutu tasarımı
    marginVertical: 10,
  },
  label: {
    ...TEXT_LABEL, // Gri etiket stili
  },
  value: {
    ...TEXT_VALUE, // Büyük beyaz rakam stili
  },
  unit: {
    fontSize: 16, // "cm" yazısı rakamdan biraz daha küçük olsun
    color: "#848694", // Etiket rengiyle uyumlu
    marginBottom: 10, // Hiza düzeltmesi
  },
  slider: {
    width: "100%", // Kutunun tamamını kapla
    height: 40,    // Dokunma alanı yüksekliği
    
    // --- ANDROID İÇİN İNCE AYAR ---
    // Android slider'ı bazen varsayılan olarak biraz küçük görünebilir.
    // Transform ile %10 oranında büyütüyoruz (Scale).
    // iOS'te dizi boş [] olduğu için bir değişiklik olmuyor.
    transform: Platform.OS === "android" ? [{ scale: 1.1 }] : [],
  },
});

// Performans optimizasyonu (Gereksiz render'ı önle)
export default React.memo(HeightSelection);