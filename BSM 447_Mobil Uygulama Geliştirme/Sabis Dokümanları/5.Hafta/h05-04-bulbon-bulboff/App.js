import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Image,
  Switch,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import bulbOff from "./assets/bulb-off.jpg";
import bulbOn from "./assets/bulb-on.jpg";

// State işlemleri var. Hooks

export default function TheLight() {

  const [isEnabled, setIsEnabled] = useState(false); 
  // Hooks Bir şeyin durumunu aç kapa, true false, yeşil kırmızı vb. gibi tanımlamaya yarıyor.
  // 
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Image
        fadeDuration={0} //
        source={isEnabled ? bulbOn : bulbOff} // isEnabled ise bulbOn'u getir değilse bulbOff getir.
        style={styles.image} // Stil olarak bunu tanımla
      />

    
      <Switch
        trackColor={{ false: "#fff", true: "#52d964" }}
        thumbColor={"#fff"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
    </SafeAreaView>
  );
}

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  image: {

    // telefonda denerken alttaki iki satır açılarak deneniyor.

    //maxWidth: "100%",
    //maxHeight: screenHeight - Constants.statusBarHeight - 150,
    width : 300,
    height :300,
    resizeMode: "contain",
    //marginBottom: 20,
    //marginLeft : 100,
  },
  switch: {
    alignSelf: "center",
 
    transform: Platform.OS === "android" ? [{ scale: 1.5 }] : [],
  },
});

