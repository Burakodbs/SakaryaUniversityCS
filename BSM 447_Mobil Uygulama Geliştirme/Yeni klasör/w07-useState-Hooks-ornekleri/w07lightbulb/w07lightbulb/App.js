import React, { useState } from "react";
import { Dimensions, StyleSheet, Switch, Platform } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";

const { width: screenWidth } = Dimensions.get("window");

export default function TheLight() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaProvider style={styles.container}>
      <FontAwesome5 name="lightbulb" style={styles.icon} color={isEnabled ? "yellow" : "#555"} />
      <Switch
        trackColor={{ false: "#fff", true: "#52d964" }}
        thumbColor={"#fff"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
        accessibilityLabel="Ampul Anahtarı"
        accessibilityHint={isEnabled ? "Ampulü kapatmak için dokunun" : "Ampulü açmak için dokunun"}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: screenWidth * 0.5,
    marginBottom: 40,
  },
  switch: {
    ...Platform.select({
      android: { transform: [{ scale: 2 }] },
      ios: { transform: [{ scale: 1.2 }] },
    }),
  },
});

