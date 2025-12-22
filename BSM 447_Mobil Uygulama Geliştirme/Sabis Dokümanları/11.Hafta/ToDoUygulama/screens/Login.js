import { Text, View, TextInput, ImageBackground, Button, KeyboardAvoidingView, Platform } from 'react-native';
import AppStyles from '../styles/AppStyles';
import InlineTextButton from '../components/InlineTextButton';
import React from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function Login({ navigation }) {
  const background = require("../assets/background.jpg");

  if (auth.currentUser) {
    navigation.navigate("ToDo");
  } else {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("ToDo");
      }
    });
  }

  let [errorMessage, setErrorMessage] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");

  let login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("ToDo", { user: userCredential.user });
          setErrorMessage("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          setErrorMessage(error.message)
        });
    } else {
      setErrorMessage("Please enter an email and password");
    }
  }

  return (
    <ImageBackground style={AppStyles.imageContainer} source={background}>
      <KeyboardAvoidingView 
        style={AppStyles.backgroundCover} 
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>Login</Text>
        <Text style={AppStyles.errorText}>{errorMessage}</Text>
        <TextInput 
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]} 
          placeholder='Email' 
          placeholderTextColor="#BEBEBE"
          value={email}
          onChangeText={setEmail} />
        <TextInput 
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]} 
          placeholder='Password' 
          placeholderTextColor="#BEBEBE" 
          secureTextEntry={true} 
          value={password} 
          onChangeText={setPassword} />
        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>Don't have an account? </Text>
          <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")} />
        </View>
        <View style={[AppStyles.rowContainer, AppStyles.bottomMargin]}>
          <Text style={AppStyles.lightText}>Forgotten your password? </Text>
          <InlineTextButton text="Reset" onPress={() => navigation.navigate("ResetPassword")} />
        </View>
        <Button title="Login" onPress={login} color="#f7b267" />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}


