import React from 'react';
import { View, Text } from 'react-native';

export default function HelloWorld1() {
  return (
    
    <View // HTML DIV
      style={{ // çift süslü parantez arasına yazıyoruz. Direk kullandığımız yerde stil tanımlayacaksak.
        flex: 1, // Tüm ekranı kapla
        justifyContent: 'center', // Geçen hafta anlatmıştık, ana ekran boyunca ortala
        alignItems: 'center', // ikinci ekranda ortalasın
        backgroundColor: 'yellow', // Zemin rengi 
      }} 
    >

      <Text
        style={{
          fontSize: 30, // Font boyutu
          fontWeight: 'bold', // Font Tipi, Kalın, İtalik, Altı çizgili vs.
          color: 'purple', // YAzı rengi MOR
          textTransform: 'uppercase', // Yazı nasıl yazılırsa yazılsın HEPSİ BÜYÜK
        }}
      >

        Merhaba Dünya!
      
      </Text>
    
    </View>
  
  );
}
