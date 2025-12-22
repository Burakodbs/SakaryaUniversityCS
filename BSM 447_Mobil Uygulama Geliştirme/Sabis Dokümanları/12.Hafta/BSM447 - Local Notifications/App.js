import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Alert, Platform } from 'react-native';
import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
//import * as Permissions from 'expo-permissions';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
              shouldPlaySound: false,
              shouldSetBadge:false,
              shouldShowAlert: true 
    };
  }
});

  export default function App() {

    const triggerNotificationHandler = () => {
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'My first local notification',
          body: 'This is the first local notification we are sending!'
        },
        trigger: {
          seconds: 3,
        },
      });
    };
  

  return (
    <View style={styles.container}>
      <Button title="Bildirim Yolla" onPress={triggerNotificationHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
