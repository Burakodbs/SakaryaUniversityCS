import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Text>BSM 447 MOBİL UYGULAMA GELİŞTİRME</Text>
      </View>
    
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aabbcc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});