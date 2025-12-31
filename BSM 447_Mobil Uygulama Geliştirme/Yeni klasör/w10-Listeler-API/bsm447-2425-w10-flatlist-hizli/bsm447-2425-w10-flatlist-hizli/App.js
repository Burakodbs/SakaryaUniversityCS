import React from 'react';
import { View, Text, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


// 5000 elemanlı sahte bir dizi oluşturuyoruz
// Öğrencilere bu kısa yolu öğretin, çok severler:
const DATA = Array.from({ length: 5000 }, (_, i) => `Dizi Elamanı ${i + 1}`);

// ... importlar ve DATA aynı ...

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, marginTop: 40 }}>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>
        FlatList (HIZLI)
      </Text>

      {/* SADECE GÖRÜNENİ RENDER EDER */}
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={{ padding: 20, borderBottomWidth: 1 }}>
            {item}
          </Text>
        )}
      />
    </SafeAreaProvider>
  );
}
 