import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native"; 
// SafeAreaView -> Ekranın üstünde çentik var. Orada gözükmesin. Ya da en altta geri, home, uygulamalar var. o kısımda da gözükmesin. Aynı zamanda Pil, Mobil data, header kısmı var. O kısım kullanılmasın. 
import Constants from "expo-constants";

export default function HelloWorld2() {
  return (
  
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        Hello <Text style={styles.highlightText1}>World</Text>
      </Text>

      <Text style={styles.heading}>
        Hello <Text style={styles.highlightText2}>World</Text>
      </Text>

      <Text style={[styles.heading, { color: "#59595d" }]}>
        Hello <Text style={styles.highlightText3}>World</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // SafeAreaView on Android devices
    paddingTop: Constants.statusBarHeight, 
    // Bu yine RN ile gelen güzel bir özellik. Eskiden 10 20 derdik. Bu üstten boşluk bırak demek. 
    // Şimdi Nasıl ki yüzlerce ekran çözünürlüğü var. Aynı şekilde telefonlarda da bu var. 
    // Çalışan telefonun statusBar Yüksekliği ne kadarsa o kadar yukardan boşluk bırak demek.
  },

  heading: {
    marginTop: 50, // Yukarıdan 50 piksel boşluk bırak
    textAlign: "center", // Metin tam ortada olsun.
    fontSize: 30, // Metin boyutu 30 
    fontWeight: "bold", // Kalın harflerle yaz
    textTransform: "uppercase", // Ne yazarsan yaz HEPSİ BÜYÜK
  },

// Renkleri değiştir.
  highlightText1: {
    color: "#e74c3c",
  },

  highlightText2: {
    fontStyle: "italic", // Eğik
    textDecorationLine: "underline", // Altı çizgili
    color: "#2980b9",
  },

// red
  highlightText3: {
    color: "#fff",
    backgroundColor: "#59595d",
  },

});
