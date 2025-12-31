// components/Button.js - Özelleştirilmiş Buton Bileşeni

import React from "react";
// TouchableOpacity: Tıklanınca opaklığı azalan (animasyonlu) dokunmatik alan.
// Platform: Kodun çalıştığı cihazın iOS mi Android mi olduğunu anlamak için.
import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native";

// style.js dosyasından ortak stilleri çekiyoruz.
import { CENTER, TEXT } from "../style";

// { title, onPress } -> Props Destructuring
// Bu bileşeni çağıran ana sayfa (App.js), buraya butonun üzerindeki yazıyı (title)
// ve tıklanınca ne olacağını (onPress fonksiyonunu) gönderir.
function Button({ title, onPress }) {
  return (
    // React Native'in kendi <Button /> bileşeni stillendirme konusunda çok kısıtlıdır.
    // O yüzden kendi butonumuzu TouchableOpacity ile yapıyoruz.
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    ...CENTER, // style.js'den gelen ortalama özellikleri (flexbox).
    height: 60,
    borderRadius: 5, // Butonun köşelerini hafif yuvarlatır.
    backgroundColor: "#e83d66", // Pembe/Kırmızı tonu.
    marginTop: 15, // Üstteki elemanla mesafe.
    
    // PLATFORM KONTROLÜ:
    // iOS cihazlarda iPhone X ve üzeri çentikli modellerde SafeAreaView alttan boşluk bırakır.
    // Ancak Android'de bu boşluk her zaman otomatik olmayabilir.
    // Android ise alttan 10 birim boşluk bırak, iOS ise gerek yok (0).
    marginBottom: Platform.OS === "ios" ? 0 : 10,
  },
  buttonText: {
    ...TEXT, // style.js'den gelen beyaz renk ve ortalama.
    fontSize: 24,
    fontWeight: "bold",
  },
});

// PERFORMANS OPTİMİZASYONU: React.memo
// Normalde React'ta bir üst bileşen (Parent) güncellendiğinde, içindeki tüm alt bileşenler (Child) 
// de gereksiz yere tekrar render edilir (yeniden çizilir).
// React.memo şunu der: "Eğer bu butona gelen 'title' veya 'onPress' prop'ları değişmediyse,
// App.js yenilense bile sen bu butonu tekrar render etme."
// Bu, uygulamanın performansını artırır.
export default React.memo(Button);



