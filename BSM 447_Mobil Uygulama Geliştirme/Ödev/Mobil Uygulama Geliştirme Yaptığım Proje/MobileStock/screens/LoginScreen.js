import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const LoginScreen = ({ navigation }) => {

	if (auth.currentUser) {
		navigation.navigate('MyTabs', {
			screen: 'ProfileScreen',
		});
	} else {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				navigation.navigate('MyTabs', {
					screen: 'ProfileScreen',
				});
			}
		});
	}

	const register = () => {
		navigation.navigate('RegisterScreen');
	}

	const [errorMessage, setErrorMessage] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState();

	const login = () => {
		if (email !== "" && password !== "") {
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					navigation.navigate('MyTabs', {
						screen: 'ProfileScreen',
					});
					setErrorMessage("");
					setEmail("");
					setPassword("");
				})
				.catch((error) => {
					setErrorMessage(error.message)
				});
		} else {
			setErrorMessage("Lütfen, e-posta adresi ve şifre giriniz!");
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={styles.title}>Hoş Geldiniz!</Text>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>E-Posta Adı:</Text>
					<TextInput
						style={styles.input}
						placeholder="E-Posta Adresini Giriniz"
						value={email}
						onChangeText={setEmail}
					/>
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Şifre:</Text>
					<TextInput
						style={styles.input}
						placeholder="Şifrenizi Girin"
						secureTextEntry
						value={password}
						onChangeText={setPassword}
					/>
				</View>
				<TouchableOpacity style={styles.loginButton} onPress={login}>
					<Text style={styles.buttonText}>Giriş Yap</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.loginButton} onPress={register}>
					<Text style={styles.buttonText}>Kayıt Ol</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#597E52',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#333',
	},
	inputContainer: {
		marginBottom: 15,
	},
	label: {
		fontSize: 16,
		marginBottom: 5,
		color: '#333', // Etiket rengi
	},
	input: {
		height: 40,
		width: 300,
		borderColor: '#333',
		borderWidth: 1,
		padding: 10,
		backgroundColor: '#FFFFEC',
	},
	loginButton: {
		backgroundColor: 'tomato',
		padding: 15,
		borderRadius: 10,
		marginTop: 20,
		width: 300,
	},
	buttonText: {
		color: '#FFFFEC',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default LoginScreen;
