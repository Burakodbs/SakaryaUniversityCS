import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [gender, setGender] = useState('');
	const [birthdate, setBirthdate] = useState('');

	const handleRegister = () => {

		createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				const user = userCredential.user;

				const data = {
					'firstName': firstName,
					'lastName': lastName,
					'gender': gender,
					'birthdate': birthdate,
				}

				db.collection('userData').doc();
				ref.set(data);

				navigation.navigate('LoginScreen');
			})
			.catch(error => {
				Alert.alert('Kayıt Başarısız', error.message);
			});
	};

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={styles.title}>Hesap Oluştur</Text>
				<TextInput
					style={styles.input}
					placeholder="Ad"
					onChangeText={setFirstName}
					value={firstName}
				/>
				<TextInput
					style={styles.input}
					placeholder="Soyad"
					onChangeText={setLastName}
					value={lastName}
				/>
				<TextInput
					style={styles.input}
					placeholder="E-posta"
					onChangeText={setEmail}
					value={email}
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholder="Şifre"
					onChangeText={setPassword}
					value={password}
					secureTextEntry
				/>
				<TextInput
					style={styles.input}
					placeholder="Cinsiyet"
					onChangeText={setGender}
					value={gender}
				/>
				<TextInput
					style={styles.input}
					placeholder="Doğum Tarihi"
					onChangeText={setBirthdate}
					value={birthdate}
				/>
				<TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
					<Text style={styles.buttonText}>Kayıt Ol</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.registerButton} onPress={()=>{navigation.goBack();}}>
					<Text style={styles.buttonText}>Geri Dön</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#597E52',
	},
	title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#333',
	},
	input: {
		width: '80%',
		height: 40,
		borderColor: '#333',
		borderWidth: 1,
		marginBottom: 10,
		paddingLeft: 10,
		color: '#333',
		backgroundColor: '#FFFFEC',
		alignSelf: 'center',
	},
	registerButton: {
		backgroundColor: 'tomato',
		padding: 10,
		borderRadius: 5,
		marginTop: 10,
		width: 265,
		alignSelf: 'center',
	},
	buttonText: {
		color: '#FFFFEC',
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default RegisterScreen;
