// App.js - Ana Uygulama Dosyası

// ---------------------------------------------------------
// 1. IMPORTLARI YAPIYORUZ (KÜTÜPHANELERİ ÇAĞIRIYORUZ)
// ---------------------------------------------------------

// React kütüphanesini ve 'useState' hook'unu içeri alıyoruz.
// DERS NOTU: Web'deki 'Session' mantığını hatırlayın. Sayfa yenilenmese bile
// kullanıcı verisini (kilo, boy vb.) hafızada tutmak için 'State' kullanırız.
// useState, fonksiyonel bileşenlerde bu hafızayı yönetmemizi sağlayan bir Hook'tur.
import React, { useState } from "react";

// React Native'in temel yapı taşlarını çağırıyoruz.
// StyleSheet: CSS benzeri stil dosyası oluşturmak için.
// SafeAreaView: Çentikli telefonlarda içeriğin yukarıda kaybolmasını önleyen güvenli alan.
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

// Expo'nun sunduğu hazır status bar (Pil, Saat göstergesi) bileşeni.
import { StatusBar } from "expo-status-bar";

// Telefonun donanımsal özelliklerine (ekran boyutu, çentik yüksekliği vb.) erişmek için.
import Constants from "expo-constants";

// ---------------------------------------------------------
// 2. KENDİ YAZDIĞIMIZ BİLEŞENLERİ (COMPONENTS) ÇAĞIRIYORUZ
// ---------------------------------------------------------
// Kodumuzu modüler hale getirdik. Her bir parça (buton, seçim ekranı) ayrı bir dosyada.
// Bu sayede App.js çöplüğe dönmüyor.
import GenderSelection from "./components/GenderSelection";
import HeightSelection from "./components/HeightSelection";
import UnitSelection from "./components/UnitSelection";
import Button from "./components/Button";
import ResultModal from "./components/ResultModal";

// Ortak stil ve sabit değerlerimizi import ediyoruz.
import { ROW, CENTER, TEXT } from "./style"; // Yazım hatası düzeltildi: sytle -> style
import {
  DEFAULT_VALUE,
  MAX_AGE,
  MAX_WEIGHT,
  MIN_AGE,
  MIN_WEIGHT,
} from "./const";

// ---------------------------------------------------------
// 3. ANA FONKSİYON (COMPONENT) BAŞLANGICI
// ---------------------------------------------------------
export default function App() {
  
  // --- STATE TANIMLAMALARI (DURUM YÖNETİMİ) ---
  
  // Cinsiyet bilgisini tutan state. Başlangıç değeri 'male' (const dosyasından).
  // setGender fonksiyonu çalıştığında ekranın sadece ilgili yeri güncellenir.
  const [gender, setGender] = useState(DEFAULT_VALUE.gender);
  
  // Boy, Kilo ve Yaş için state tanımları.
  // Kullanıcı butona bastığında veya slider'ı kaydırdığında bu değişkenler değişecek.
  const [height, setHeight] = useState(DEFAULT_VALUE.height);
  const [weight, setWeight] = useState(DEFAULT_VALUE.weight);
  const [age, setAge] = useState(DEFAULT_VALUE.age);

  // Hesaplama Sonuçlarını tutacak stateler.
  // Web programlamadaki 'Cookie' gibi düşünebilirsiniz ama sadece uygulama açıkken yaşar.
  const [bmiPoint, setBmiPoint] = useState(0); // Vücut Kitle Endeksi Puanı
  const [bmiStatus, setBmiStatus] = useState("NORMAL"); // Durum (Zayıf, Şişman vb.)
  const [bmiInterpretation, setBmiInterpretation] = useState(""); // Kullanıcıya gösterilecek mesaj
  
  // Modal'ın (Sonuç Ekranı) görünüp görünmeyeceğini kontrol eden boolean (true/false) state.
  const [modalVisible, setModalVisible] = useState(false);

  // --- FONKSİYONLAR (LOGIC) ---

  // "HESAPLA" butonuna basılınca çalışacak fonksiyon.
  const calculate = () => {
    // BMI Formülü: Kilo / (Boy(m) * Boy(m))
    // Boy cm geldiği için 100'e bölüp metreye çeviriyoruz.
    const point = weight / (height / 100) ** 2;

    // Hesaplanan puana göre durum belirleme (Business Logic)
    if (point < 18.5) {
      setBmiStatus("ZAYIF");
      setBmiInterpretation(
        "Normal vücut ağırlığının altındasınız.\nBiraz daha yemek yiyebilirsiniz."
      );
    } else if (point < 25) {
      setBmiStatus("NORMAL");
      setBmiInterpretation("Vücut ağırlığınız tam olması gerektiği gibi.\nHarika!");
    } else {
      setBmiStatus("KİLOLU");
      setBmiInterpretation(
        "Normal vücut ağırlığının üzerindesiniz.\nBiraz egzersiz yapmayı deneyin."
      );
    }

    // toFixed(2): Virgülden sonra sadece 2 basamak al (Örn: 24.567 -> 24.56)
    setBmiPoint(point.toFixed(1));
    
    // Sonuçlar hazır, artık Modal penceresini açabiliriz.
    setModalVisible(true);
  };

  // "TEKRAR HESAPLA" butonuna basılınca her şeyi sıfırlayan fonksiyon.
  const reset = () => {
    setGender(DEFAULT_VALUE.gender);
    setHeight(DEFAULT_VALUE.height);
    setWeight(DEFAULT_VALUE.weight);
    setAge(DEFAULT_VALUE.age);
    setModalVisible(false); // Modalı kapat
  };

  // --- GÖRÜNÜM (JSX / UI) ---
  // Burası return ettiği için ekrana çizilen kısımdır.
  return (
    // SafeAreaView: iPhone X ve üzeri cihazlarda içeriği güvenli alana iter.
    <SafeAreaView style={styles.container}>
      {/* Üstteki saat vs ikonlarının rengini ayarlar */}
      <StatusBar style="light" />

      {/* HEADER ALANI */}
      <View style={styles.header}>
        <Text style={styles.headerText}>VKİ HESAPLAYICI</Text>
      </View>

      {/* İÇERİK ALANI */}
      <View style={styles.content}>
        
        {/* BÖLÜM 1: CİNSİYET SEÇİMİ */}
        <View style={styles.section}>
          <View style={styles.genderSelection}>
            {/* Props kullanımı: Bir componentten diğerine veri aktarımı */}
            {/* isActive: O anki state ile eşleşiyorsa butonu aktif göster */}
            <GenderSelection
              label="ERKEK"
              iconName="mars"
              iconColor="#51caef"
              isActive={gender === "male"}
              setActive={() => setGender("male")}
            />
            <GenderSelection
              label="KADIN"
              iconName="venus"
              iconColor="#f15123"
              isActive={gender === "female"}
              setActive={() => setGender("female")}
            />
          </View>
        </View>

        {/* BÖLÜM 2: BOY SEÇİMİ (Slider) */}
        {/* height state'ini ve onu değiştirecek setHeight fonksiyonunu prop olarak gönderiyoruz */}
        <HeightSelection
          style={styles.section}
          height={height}
          setHeight={setHeight}
        />

        {/* BÖLÜM 3: KİLO VE YAŞ SEÇİMİ */}
        <View style={styles.section}>
          <View style={styles.weightAndAgeSelection}>
            <UnitSelection
              label="KİLO"
              value={weight}
              minValue={MIN_WEIGHT}
              maxValue={MAX_WEIGHT}
              setValue={setWeight}
            />
            <UnitSelection
              label="YAŞ"
              value={age}
              minValue={MIN_AGE}
              maxValue={MAX_AGE}
              setValue={setAge}
            />
          </View>
        </View>

        {/* HESAPLA BUTONU */}
        {/* onPress event'ine calculate fonksiyonunu bağlıyoruz */}
        <Button title="HESAPLA" onPress={calculate} />

        {/* SONUÇ EKRANI (MODAL) */}
        {/* Başlangıçta modalVisible false olduğu için görünmez */}
        <ResultModal
          modalVisible={modalVisible}
          bmiPoint={bmiPoint}
          bmiStatus={bmiStatus}
          bmiInterpretation={bmiInterpretation}
          onModalConfirm={reset}
        />
      </View>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------
// 4. STİL TANIMLAMALARI (CSS BENZERİ YAPI)
// ---------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1, // Tüm ekranı kapla
    backgroundColor: "#1d2236", // Koyu lacivert arkaplan
    // Android'de SafeAreaView bazen yetersiz kalır, StatusBar yüksekliği kadar boşluk bırakıyoruz.
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15, // Soldan sağdan boşluk
    paddingVertical: 10, // Yukarıdan aşağıdan boşluk
  },
  header: {
    ...CENTER, // Spread operator: styles.js dosyasındaki CENTER objesinin özelliklerini buraya kopyalar.
    height: 70,
    borderBottomWidth: 5,
    borderBottomColor: "#16192e",
  },
  headerText: {
    ...TEXT, // Ortak metin stili
    fontSize: 24,
    fontWeight: "500",
  },
  section: {
    flex: 1 / 3, // Ekranı dikeyde 3 eşit parçaya bölmek için.
    marginVertical: 5,
  },
  genderSelection: {
    ...ROW, // Yan yana dizilim (flexDirection: row)
    marginHorizontal: -10,
  },
  weightAndAgeSelection: {
    ...ROW,
    marginHorizontal: -10,
  },
});