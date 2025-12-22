import React from 'react';
import { View, StyleSheet } from 'react-native';

export default () => <View style={styles.myStyle} />;

const styles = StyleSheet.create({
  myStyle: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
  },
});
