import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import ModalDropdown from 'react-native-modal-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';

const NotificationScreen = () => {
	const notifications = [
		{
			id: '1',
			message: 'Dolar 29.75 TL sınırını aştı!',
		},
		{
			id: '2',
			message: 'Euro 32.60 TL sınırının altına düştü!',
		},
		{
			id: '3',
			message: 'Google hisseleri $140 sınırının altına düştü!',
		},
		{
			id: '4',
			message: 'Apple hisseleri $190 sınırının altına düştü!',
		},
	];

	const [selectedValue, setSelectedValue] = useState('');

	const dropdownOptions = ['Arttı', 'Düştü'];

	const handleDropdownSelect = (index, value) => {
		setSelectedValue(value);
	};

	const clearNotifications = () => {
		alert('Bildirimler temizlendi!');
	};

	const [isVisible, setIsVisible] = useState(false);
	const [number, setNumber] = useState('');
	const [symbol, setSymbol] = useState('');

	const handleOpenModal = () => {
		setIsVisible(true);
	};

	const handleCloseModal = () => {
		setIsVisible(false);
	};

	const handleConfirm = () => {
		handleCloseModal();
	};

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={styles.title}>Bildirimler</Text>
				{notifications.length === 0 ? (
					<Text style={styles.noNotificationText}>Henüz bildirim yok.</Text>
				) : (
					<FlatList
						data={notifications}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<View style={styles.notificationItem}>
								<Text style={styles.notificationText}>{item.message}</Text>
							</View>
						)}
					/>
				)}
				<TouchableOpacity style={styles.clearButton} onPress={clearNotifications}>
					<Text style={styles.clearButtonText}>Bildirimleri Temizle</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.clearButton} onPress={handleOpenModal}>
					<Text style={styles.clearButtonText}>Uyarı Oluştur</Text>
				</TouchableOpacity>
			</View>

			<Modal isVisible={isVisible} onBackdropPress={handleCloseModal}>
				<View style={styles.modalContainer}>
					<Text style={styles.modalTitle}>Uyarı</Text>
					<TextInput
						style={styles.input}
						placeholder="Sembol"
						onChangeText={setSymbol}
					/>
					<TextInput
						style={styles.input}
						placeholder="Miktar"
						keyboardType="numeric"
						onChangeText={setNumber}
					/>
					<ModalDropdown
						style={styles.input}
						options={dropdownOptions}
						onSelect={handleDropdownSelect}
						defaultValue={"Seçenek Seçiniz"}
						textStyle={{ fontSize: 16 }}
						dropdownTextStyle={{ fontSize: 16 }}
					/>
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.cancelButton} onPress={handleCloseModal}>
							<Text style={styles.buttonText}>İptal</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
							<Text style={styles.buttonText}>Onayla</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#597E52',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#333',
		textAlign: 'center',
	},
	noNotificationText: {
		fontSize: 16,
		textAlign: 'center',
		marginTop: 20,
		color: '333', // Gri renk
	},
	notificationItem: {
		borderBottomWidth: 1,
		borderBottomColor: '#333',
		paddingVertical: 15,
	},
	notificationText: {
		fontSize: 16,
		color: '#333',
	},
	clearButton: {
		backgroundColor: 'tomato',
		padding: 15,
		borderRadius: 10,
		marginTop: 20,
	},
	clearButtonText: {
		fontSize: 16,
		color: '#FFFFEC',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalContainer: {
		backgroundColor: '#597E52',
		padding: 20,
		borderRadius: 10,
	},
	modalTitle: {
		fontSize: 20,
		marginBottom: 10,
		textAlign: 'center',
	},
	input: {
		height: 40,
		borderColor: '#333',
		borderWidth: 1,
		marginBottom: 10,
		paddingLeft: 10,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cancelButton: {
		flex: 1,
		backgroundColor: 'tomato',
		padding: 10,
		borderRadius: 5,
		marginRight: 5,
	},
	confirmButton: {
		flex: 1,
		backgroundColor: '#FFFFEC',
		padding: 10,
		borderRadius: 5,
		marginLeft: 5,
	},
});

export default NotificationScreen;
