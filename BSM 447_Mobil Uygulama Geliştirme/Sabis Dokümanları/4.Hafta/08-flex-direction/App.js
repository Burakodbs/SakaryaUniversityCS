import React from 'react';
import { View, Text, Dimensions } from 'react-native';

export default () => {
  const { width } = Dimensions.get('window')

  return (
    <View>

      <Text style={{ padding: 10 }}>row (default)</Text>

      <View style={{ flexDirection: 'row', justifyContent:'flex-start', width, height: width, backgroundColor: 'whitesmoke' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>

      <Text style={{ padding: 10, marginTop: 10 }}>column</Text>
      
      <View style={{ flexDirection: 'column', justifyContent: 'center', width, height: width, backgroundColor: 'whitesmoke' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>

    </View>
  );
}
