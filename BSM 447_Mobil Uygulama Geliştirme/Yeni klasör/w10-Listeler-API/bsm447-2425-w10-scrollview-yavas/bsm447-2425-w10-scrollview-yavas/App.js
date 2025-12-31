import React from 'react';
import { View, Text, ScrollView, FlatList, SafeAreaView } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

// 5000 elemanlı sahte bir dizi oluşturuyoruz
// Öğrencilere bu kısa yolu öğretin, çok severler:
const DATA = Array.from({ length: 5000 }, (_, i) => `Eleman ${i + 1}`);

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, marginTop: 40 }}>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>
        ScrollView (YAVAŞ)
      </Text>

      {/* TÜM LİSTEYİ AYNI ANDA RENDER EDER */}
      <ScrollView>
        {DATA.map((item, index) => (
          <Text key={index} style={{ padding: 20, borderBottomWidth: 1 }}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </SafeAreaProvider>
  );
}