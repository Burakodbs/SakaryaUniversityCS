import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Constants from 'expo-constants';

const trafficButtons = [
  { id: 'red', color: '#ce0100', underlay: '#9b0100', text: 'Red' },
  { id: 'yellow', color: '#ffd300', underlay: '#cca000', text: 'Yellow' },
  { id: 'green', color: '#54a111', underlay: '#3c730c', text: 'Green' },
];

export default function TrafficLight() {
  const [color, setColor] = useState('');

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.trafficLightBox}>
        <View style={[styles.lightCircle, { backgroundColor: color === 'red' ? '#ce0100' : '#444' }]} />
        <View style={[styles.lightCircle, { backgroundColor: color === 'yellow' ? '#ffd300' : '#444' }]} />
        <View style={[styles.lightCircle, { backgroundColor: color === 'green' ? '#54a111' : '#444' }]} />
      </View>
      <View style={styles.buttonGroup}>
        {trafficButtons.map((btn) => (
          <TouchableHighlight key={btn.id} style={[styles.button, { backgroundColor: btn.color }]} underlayColor={btn.underlay} onPress={() => setColor(btn.id)}>
            <Text style={styles.buttonText}>{btn.text}</Text>
          </TouchableHighlight>
        ))}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', paddingTop: Constants.statusBarHeight, justifyContent: 'space-evenly', alignItems: 'center' },
  trafficLightBox: { backgroundColor: '#222', borderRadius: 10, width: 100, padding: 15, alignItems: 'center' },
  lightCircle: { width: 70, height: 70, borderRadius: 35, marginVertical: 10, backgroundColor: '#444', borderWidth: 2, borderColor: '#111' },
  buttonGroup: { flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' },
  button: { width: 80, paddingVertical: 8, borderRadius: 4, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff' },
});

