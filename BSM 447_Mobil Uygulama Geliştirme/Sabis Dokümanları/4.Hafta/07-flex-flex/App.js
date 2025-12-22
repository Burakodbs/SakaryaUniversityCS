import React from 'react';
import { View } from 'react-native';

// Try removing the `flex: 1` on the parent View.
// The parent will not have dimensions, so the children can't expand.
// What if you add `height: 300` instead of `flex: 1`?
export default () => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
    <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
    <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
  </View>
);
