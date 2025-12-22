import { Text, View, TextInput, ImageBackground, Button, KeyboardAvoidingView, Platform } from 'react-native';
import AppStyles from '../styles/AppStyles';
import InlineTextButton from '../components/InlineTextButton';
import React from 'react';
import { auth } from "../firebase";
import { sendPasswordResetEmail } from 'firebase/auth';

export default function ResetPassword({ navigation }) {
  const background = require("../assets/background.jpg");

  let [email, setEmail] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");

  let resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.popToTop();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <ImageBackground style={AppStyles.imageContainer} source={background}>
      <KeyboardAvoidingView 
        style={AppStyles.backgroundCover} 
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>Reset Password</Text>
        <Text style={AppStyles.errorText}>{errorMessage}</Text>
        <TextInput 
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]} 
          placeholder='Email' 
          placeholderTextColor="#BEBEBE"
          value={email}
          onChangeText={setEmail} />
        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>Don't have an account? </Text>
          <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")} />
        </View>
        <Button title="Reset Password" onPress={resetPassword} color="#f7b267" />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}


