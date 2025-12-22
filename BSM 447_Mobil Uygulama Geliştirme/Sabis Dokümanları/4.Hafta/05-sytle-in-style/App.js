import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => (
  <View style={styles.myStyle} >
    <Text style={styles.standardText} > Here is some</Text>
    <Text style={[styles.standardText, styles.fancyText]}> fancy text</Text>
  </View>
);

const styles = StyleSheet.create({
  myStyle: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
  },
  standardText: {
    fontSize: 24,
    color: '#333',
    //backgroundColor: 'yellow',
  },
  fancyText: {
    fontStyle: 'italic',
    color: 'rgb(0,125,255)',
  },
});
