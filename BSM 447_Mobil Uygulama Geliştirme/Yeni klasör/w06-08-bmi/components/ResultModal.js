// components/ResultModal.js - Sonuç Gösterim Ekranı

import React from "react";
// Modal: React Native'in kendi açılır pencere bileşeni.
// SafeAreaView: iPhone çentik payı için burada da gerekli çünkü Modal tam ekran açılıyor.
import { StyleSheet, View, Text, Modal, SafeAreaView } from "react-native";

// Kendi butonumuzu çağırıyoruz.
import Button from "./Button";
// Ortak stilleri alıyoruz.
import { BOX, TEXT } from "../style";

// Renk kodlarını değişkene atamak, ileride temayı değiştirmeyi kolaylaştırır.
// Magic String/Color kullanmaktan kaçınıyoruz.
const GOOD_STATUS_COLOR = "#7ac79d"; // Yeşil tonu (Sağlıklı)
const BAD_STATUS_COLOR = "#f5ac40";  // Turuncu tonu (Dikkat)

function ResultModal({
  modalVisible,       // Modal açık mı kapalı mı? (App.js'den geliyor)
  bmiPoint,           // Hesaplanan puan (24.5 vb.)
  bmiStatus,          // Durum (NORMAL, ZAYIF, KİLOLU)
  bmiInterpretation,  // Kullanıcıya verilecek tavsiye mesajı
  onModalConfirm,     // "Yeniden Hesapla" butonuna basınca çalışacak fonksiyon
}) {
  return (
    // --- MODAL YAPISI ---
    // animationType="slide": Modal aşağıdan yukarıya kayarak gelir. (fade, none seçenekleri de var)
    // transparent={true}: Arka planı şeffaf yapabiliriz ama biz container stiliyle boyayacağız.
    // visible: Bu değer 'true' olduğu anda modal ekranda belirir. State ile yönetilir.
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      
      {/* Modal tam ekran kapladığı için yine güvenli alana ihtiyacımız var */}
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          
          <Text style={styles.headerText}>SONUCUNUZ</Text>

          {/* Sonuçların yazıldığı orta kutu */}
          <View style={styles.contentBox}>
            
            {/* --- KOŞULLU STİL ATAMA (CONDITIONAL STYLING) --- */}
            {/* Burası dersin en önemli kısmı. */}
            {/* Eğer bmiStatus "NORMAL" ise yazı rengi YEŞİL olsun, değilse TURUNCU olsun. */}
            {/* Ternary Operator: condition ? true : false */}
            <Text
              style={[
                styles.bmiStatusText,
                {
                  color:
                    bmiStatus === "NORMAL"
                      ? GOOD_STATUS_COLOR
                      : BAD_STATUS_COLOR,
                },
              ]}
            >
              {bmiStatus}
            </Text>

            {/* Hesaplanan Puan (Örn: 22.50) */}
            <Text style={styles.bmiPointText}>{bmiPoint}</Text>

            {/* Tavsiye Mesajı */}
            <Text style={styles.bmiInterpretationText}>
              {bmiInterpretation}
            </Text>
          </View>

          {/* RESET BUTONU */}
          {/* Tıklanınca App.js'deki reset fonksiyonu çalışır ve modalVisible=false olur. */}
          <Button title="TEKRAR HESAPLA" onPress={onModalConfirm} />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2236", // Ana tema rengi
  },
  content: {
    flex: 1,
    padding: 15,
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    // Web'de 'h1' neyse burada bu o mantıkta.
  },
  contentBox: {
    ...BOX, // style.js'den gelen kutu yapısı
    justifyContent: "space-evenly", // İçerikleri dikeyde eşit aralıklarla yay
    marginVertical: 15,
  },
  bmiStatusText: {
    ...TEXT, // Beyaz ve ortalı metin
    fontSize: 24,
    fontWeight: "bold",
    // Rengi yukarıda dinamik veriyoruz, burada vermedik.
  },
  bmiPointText: {
    ...TEXT,
    fontSize: 70, // Çok büyük punto ile skoru vurguluyoruz
    fontWeight: "bold",
  },
  bmiInterpretationText: {
    ...TEXT,
    fontSize: 18,
    lineHeight: 30, // Satır aralığını açarak okunabilirliği artırıyoruz
    fontWeight: "500",
  },
});

// Performans optimizasyonu
export default React.memo(ResultModal);