import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from "../firebase";
import { signOut } from 'firebase/auth';

const ProfileScreen = ({ navigation }) => {

	useEffect(
		() => {
			if (!auth.currentUser)
				navigation.navigate("LoginScreen");
		}
	);

	const logout = () => {
		signOut(auth).then(() => {
			navigation.navigate('MyTabs', {
				screen: 'HomeScreen',
			});
		});
	}

	const userProfile = {
		firstName: 'Ahmet',
		lastName: 'Çelik',
		gender: 'Erkek',
		birthdate: '24/05/1996',
		email: 'ahmet.celik@gmail.com',
	};

	const handleEditProfile = () => {
		navigation.navigate('EditProfileScreen');
	};

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={styles.title}>Kullanıcı Bilgileri</Text>
				<View style={styles.profileInfo}>
					<Text style={styles.label}>Ad: {userProfile.firstName}</Text>
					<Text style={styles.label}>Soyad: {userProfile.lastName}</Text>
					<Text style={styles.label}>Cinsiyet: {userProfile.gender}</Text>
					<Text style={styles.label}>Doğum Tarihi: {userProfile.birthdate}</Text>
					<Text style={styles.label}>E-posta: {userProfile.email}</Text>
				</View>
				<TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
					<Text style={styles.buttonText}>Profili Düzenle</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.editButton} onPress={logout}>
					<Text style={styles.buttonText}>Çıkış</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#597E52',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#333',
	},
	profileInfo: {
		padding: 15,
		borderRadius: 10,
		marginBottom: 20,
	},
	label: {
		fontSize: 16,
		marginBottom: 10,
		color: '#333',
	},
	editButton: {
		backgroundColor: 'tomato',
		padding: 15,
		borderRadius: 10,
	},
	buttonText: {
		color: '#FFFFEC',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default ProfileScreen;
