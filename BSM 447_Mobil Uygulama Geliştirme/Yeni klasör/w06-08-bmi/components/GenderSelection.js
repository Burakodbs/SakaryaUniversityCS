// components/GenderSelection.js - Cinsiyet Seçimi Bileşeni

import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Expo projelerinde ikonlar için hazır gelen paket.
// FontAwesome5: İnternetteki popüler ikon seti.
import { FontAwesome5 } from "@expo/vector-icons";

import {
  CENTER,
  BOX,
  TEXT_LABEL,
  BG_COLOR,
  HIGHLIGHT_BG_COLOR,
} from "../style";

// --- PROPS (PARAMETRELER) ---
// label: "ERKEK" veya "KADIN" yazısı
// iconName: "mars" (erkek) veya "venus" (kadın) ikonu ismi
// iconColor: İkonun rengi (mavi veya pembe)
// isActive: Bu kutu seçili mi? (True/False)
// setActive: Tıklandığında App.js'deki state'i güncelleyecek fonksiyon
function GenderSelection({ label, iconName, iconColor, isActive, setActive }) {
  return (
    <TouchableOpacity
      // --- KRİTİK KONU: DİNAMİK STİL (CONDITIONAL STYLE) ---
      // React Native'de stilleri bir dizi (array) olarak verebiliriz.
      // [TemelStil, DeğişenStil]
      // Eğer isActive 'true' ise arkaplan HIGHLIGHT (açık renk) olur,
      // değilse normal BG_COLOR (koyu renk) olur.
      // Bu sayede kullanıcı hangi cinsiyeti seçtiğini görsel olarak anlar.
      style={[
        styles.box,
        {
          backgroundColor: isActive ? HIGHLIGHT_BG_COLOR : BG_COLOR,
        },
      ]}
      // Tıklanınca App.js'den gelen 'setGender' fonksiyonunu tetikler.
      onPress={setActive}
    >
      {/* İkon Gösterimi: name prop'u ikonun şeklini belirler */}
      <FontAwesome5 name={iconName} size={80} color={iconColor} />
      
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    ...CENTER, // İçindekileri ortala
    ...BOX,    // Kart görünümü (border radius, padding vs.)
    marginHorizontal: 10, // İki kutu birbirine yapışmasın diye yanlardan boşluk
  },
  label: {
    ...TEXT_LABEL, // Gri ve küçük metin stili
    marginTop: 10, // İkon ile yazı arasına boşluk
  },
});

// Performans için React.memo kullanıyoruz.
// Sadece isActive durumu değişen kutu yeniden render edilir.
export default React.memo(GenderSelection);