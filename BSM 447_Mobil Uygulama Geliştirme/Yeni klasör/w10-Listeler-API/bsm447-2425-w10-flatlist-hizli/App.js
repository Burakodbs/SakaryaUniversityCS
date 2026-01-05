import React from 'react';
import { View, Text, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = Array.from({ length: 5000 }, (_, i) => `Dizi Elemanı ${i + 1}`);

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, marginTop: 40 }}>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>FlatList (HIZLI)</Text>
      <FlatList data={DATA} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (<Text style={{ padding: 20, borderBottomWidth: 1 }}>{item}</Text>)} />
    </SafeAreaProvider>
  );
}