import React from 'react';
import { SectionList, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const DERS_PROGRAMI = [
  { title: '1. Sınıf Dersleri', data: ['Algoritmaya Giriş', 'Matematik 1', 'Fizik 1'] },
  { title: '4. Sınıf Dersleri', data: ['Bitirme Projesi', 'Yapay Zeka', 'Mobil Programlama'] }
];

export default function BolumluListe() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SectionList
        sections={DERS_PROGRAMI}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headerBox}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item + index}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
  headerBox: { backgroundColor: '#e0e0e0', padding: 10 },
  headerText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  item: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
  itemText: { fontSize: 16 }
});