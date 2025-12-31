/*
  GELİŞTİRİLMİŞ TRAFİK LAMBASI KODU
  Bu kod, önceki sürümü 3 ana alanda geliştirir:
  1. PERFORMANS: 4 ayrı resim dosyası kullanmak yerine,
     trafik lambasını <View> bileşenleriyle "çiziyoruz".
     Bu, uygulama boyutunu küçültür ve performansı artırır.
  2. KOD TEKRARINI ÖNLEME (DRY): 3 ayrı butonu tek tek yazmak yerine,
     bir "veri dizisi" oluşturup '.map()' fonksiyonu ile
     butonları dinamik olarak oluşturuyoruz.
  3. ESNEK DÜZEN (Flexbox): Tüm elemanları ekranın ortasına
     düzgünce yerleştirmek için Flexbox'ı daha etkin kullanıyoruz.
*/

// Gerekli React ve React Native bileşenleri
import React, { useState } from 'react';
import {
  StyleSheet,
  //  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
  // Dimensions, // Sabit boyutlu bir çizim yaptığımız için artık buna gerek kalmadı
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

// Expo kütüphaneleri
import Constants from 'expo-constants';

// --- GELİŞTİRME 1: Tüm resim import'ları SİLİNDİ ---
// import trafficLight from "./assets/traffic-light.png";
// ... (diğer 3 resim import'u da silindi)

/*
  GELİŞTİRME 2: Buton Veri Dizisi (DRY Prensibi)
  Birbirine benzeyen 3 butonu kopyala-yapıştır yapmak yerine,
  butonların verilerini bir dizi (array) içinde topluyoruz.
  Bu, kodu temizler ve bakımı kolaylaştırır.
*/
const trafficButtons = [
  { id: 'red', color: '#ce0100', underlay: '#9b0100', text: 'Red' },
  { id: 'yellow', color: '#ffd300', underlay: '#cca000', text: 'Yellow' },
  { id: 'green', color: '#54a111', underlay: '#3c730c', text: 'Green' },
];

// Ana Trafik Lambası Bileşenimiz
export default function TrafficLight() {
  // State yönetimimiz aynı: 'color', o anki rengi tutan metin (string)
  // Başlangıç değeri "", yani "sönük"
  const [color, setColor] = useState('');

  // --- GELİŞTİRME 1: 'if/else' bloğu SİLİNDİ ---
  // Artık resim seçmemize gerek yok. Mantığı doğrudan
  // JSX içindeki stil kısmında halledeceğiz.

  return (
    <SafeAreaProvider style={styles.container}>
      {/*
        GELİŞTİRME 1: <Image> Yerine <View> ile Çizim
        Burası <Image ... /> bileşeninin yerini aldı.
        Trafik lambasını <View> (kutu) ve içindeki 3
        daire <View> ile kendimiz çiziyoruz.
      */}
      <View style={styles.trafficLightBox}>
        {/* Kırmızı Işık */}
        <View
          style={[
            styles.lightCircle, // Ortak daire stili
            // Koşullu Stil: 'color' state'i 'red' ise kırmızıyı yak,
            // değilse sönük rengi (darkGray) göster.
            { backgroundColor: color === 'red' ? '#ce0100' : '#444' },
          ]}
        />
        {/* Sarı Işık */}
        <View
          style={[
            styles.lightCircle,
            { backgroundColor: color === 'yellow' ? '#ffd300' : '#444' },
          ]}
        />
        {/* Yeşil Işık */}
        <View
          style={[
            styles.lightCircle,
            { backgroundColor: color === 'green' ? '#54a111' : '#444' },
          ]}
        />
      </View>

      {/*
        GELİŞTİRME 2: Butonları '.map()' ile Dinamik Oluşturma
        3 tane <TouchableHighlight> yazmak yerine, 'trafficButtons'
        dizimizi .map() ile dönüyoruz ve her eleman için
        otomatik olarak bir buton oluşturuyoruz.
      */}
      <View style={styles.buttonGroup}>
        {trafficButtons.map((btn) => (
          <TouchableHighlight
            key={btn.id} // React'in listeyi takip edebilmesi için ZORUNLU
            style={[styles.button, { backgroundColor: btn.color }]} // Stilleri diziden al
            underlayColor={btn.underlay} // Basılma rengini diziden al
            onPress={() => setColor(btn.id)} // State'i dizideki 'id' ile ayarla
          >
            <Text style={styles.buttonText}>{btn.text}</Text>
          </TouchableHighlight>
        ))}
      </View>
    </SafeAreaProvider>
  ); // RETURN
} // FUNCTION

// --- STİLLER (StyleSheet) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Constants.statusBarHeight,
    /*
      GELİŞTİRME 3: Esnek Flexbox Düzeni
      justifyContent: 'space-evenly' -> Lamba ile buton grubunun arasını eşit açar.
      alignItems: 'center' -> Tüm elemanları yatayda ortalar.
    */
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

 //  GELİŞTİRME 1: Yeni Trafik Lambası Stilleri
 
  trafficLightBox: {
    backgroundColor: '#222', // Lambanın kutu rengi
    borderRadius: 10,
    width: 100,
    padding: 15, // Dairelerin kenarlardan boşluğu
    alignItems: 'center', // Daireleri kutu içinde ortala
  },
  lightCircle: {
    width: 70,
    height: 70,
    borderRadius: 35, // width/height'ın yarısı = MÜKEMMEL DAİRE
    marginVertical: 10, // Daireler arası dikey boşluk
    backgroundColor: '#444', // Varsayılan sönük renk
    borderWidth: 2,
    borderColor: '#111', // Hafif bir çerçeve
  },
  // ---

  buttonGroup: {
    flexDirection: 'row', // Butonları yan yana diz
    justifyContent: 'space-evenly', // Aralarını eşit aç
    width: '100%', // Butonların ekranın tamamını kaplaması için
  },
  button: {
    width: 80,
    paddingVertical: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

