// components/UnitSelection.js - Kilo ve Yaş Seçimi Bileşeni

import React, { useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { BOX, ROW, CENTER, TEXT_LABEL, TEXT_VALUE } from "../style";

function UnitSelection({ label, value, minValue, maxValue, setValue }) {
  // --- useRef KULLANIMI ---
  // DERS NOTU: Normalde değişken saklamak için useState kullanırız.
  // Ancak bir setInterval başlattığımızda bize bir ID (kimlik numarası) döner.
  // Bu ID'yi saklamalıyız ki durdurabilelim.
  // Bu ID değiştiğinde ekranın yeniden çizilmesine (render) gerek yoktur.
  // O yüzden performans için useRef kullanıyoruz. useRef, render tetiklemez.
  const timer = useRef(null);

  // Değeri azaltan fonksiyon
  const decreaseValue = () => {
    // --- FUNCTIONAL STATE UPDATE ---
    // DERS NOTU: setValue(value - 1) yazmadık! Neden?
    // Çünkü setInterval (seri artırma) sırasında React'ın elindeki 'value' değeri eskiyebilir (Stale State).
    // setValue(prevValue => ...) diyerek her zaman en güncel veriyi aldığımızdan emin oluruz.
    setValue((currentValue) => {
      if (currentValue > minValue) {
        return currentValue - 1;
      }
      // Minimum değerin altına inme.
      return minValue;
    });
  };

  // Değeri artıran fonksiyon
  const increaseValue = () => {
    setValue((currentValue) => {
      if (currentValue < maxValue) {
        return currentValue + 1;
      }
      // Maksimum değeri geçme.
      return maxValue;
    });
  };

  // --- BASILI TUTMA MANTIĞI (LONG PRESS) ---
  // Kullanıcı butona basılı tutarsa ne olacak?
  // isIncrease: true ise artır, false ise azalt.
  function fastChangeValue(isIncrease) {
    // 50 milisaniyede bir çalışan bir sayaç (interval) başlatıyoruz.
    const interval = setInterval(() => {
      if (isIncrease) {
        increaseValue();
      } else {
        decreaseValue();
      }
    }, 50); // Hız ayarı: 50ms

    // Başlattığımız sayacın kumandasını (ID) ref içine kaydediyoruz.
    // Böylece parmağımızı çektiğimizde hangisini durduracağımızı bileceğiz.
    timer.current = interval;
  }

  // Parmağımızı çektiğimizde (onPressOut) çalışacak fonksiyon.
  const stopTimer = () => {
      // Eğer çalışan bir sayaç varsa durdur ve temizle.
      if (timer.current) {
          clearInterval(timer.current);
          timer.current = null;
      }
  }

  return (
    <View style={styles.box}>
      <Text style={styles.label}>{label}</Text>

      <Text style={styles.value}>{value}</Text>

      <View style={styles.buttonGroup}>
        {/* AZALTMA BUTONU */}
        <TouchableOpacity
          style={styles.button}
          onPress={decreaseValue} // Tek tıklama
          onLongPress={() => fastChangeValue(false)} // Basılı tutma başlangıcı
          onPressOut={stopTimer} // Parmağı çekince durdur (Refactor edildi)
        >
          <FontAwesome5 name="minus" size={20} color="#fff" />
        </TouchableOpacity>

        {/* ARTIRMA BUTONU */}
        <TouchableOpacity
          style={styles.button}
          onPress={increaseValue} // Tek tıklama
          onLongPress={() => fastChangeValue(true)} // Basılı tutma başlangıcı
          onPressOut={stopTimer} // Parmağı çekince durdur
        >
          <FontAwesome5 name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    ...CENTER, // style.js'den gelen ortalama
    ...BOX,    // style.js'den gelen kutu stili
    marginHorizontal: 10,
  },
  label: {
    ...TEXT_LABEL, // Başlık stili
  },
  value: {
    ...TEXT_VALUE, // Rakam stili
  },
  buttonGroup: {
    flexDirection: "row", // Butonları yan yana diz
    width: "100%",
    justifyContent: "space-around", // Aralarına eşit boşluk ver
  },
  button: {
    ...CENTER,
    width: 40,
    height: 40,
    borderRadius: 20, // Tam daire yapmak için (genişliğin yarısı)
    backgroundColor: "#5e606e", // Buton rengi
  },
});

// React.memo: Eğer value değişmediyse bu bileşeni tekrar çizme.
export default React.memo(UnitSelection);