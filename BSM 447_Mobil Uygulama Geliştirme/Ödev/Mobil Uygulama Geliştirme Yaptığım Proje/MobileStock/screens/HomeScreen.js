import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
	const userProfile = {
		firstName: 'John',
		lastName: 'Doe',
		gender: 'Male',
		birthdate: '01/01/1990',
		email: 'john.doe@example.com',
		symbols: [
			{ name: 'Dolar', value: '29.78', chartData: [29.31, 29.39, 29.52, 29.02, 29.43, 29.74, 29.78] },
			{ name: 'Euro', value: '32.59', chartData: [32.31, 32.61, 32.52, 32.21, 32.49, 32.55, 32.59] },
			{ name: 'Sterlin', value: '37.74', chartData: [37.24, 37.58, 37.41, 37.15, 37.47, 37.54, 37.74] },
			{ name: 'Yen', value: '0.208', chartData: [0.208, 0.209, 0.210, 0.209, 0.210, 0.209, 0.208] },
			{ name: 'Apple', value: '$184.25', chartData: [193.60, 193.05, 193.15, 193.58, 192.53, 185.64, 184.25] },
			{ name: 'Google', value: '$138.92', chartData: [141.49, 141.52, 140.37, 140.23, 138.69, 138.17, 138.92] },
			{ name: 'Amazon', value: '$148.47', chartData: [153.42, 153.41, 153.34, 153.38, 151.94, 149.93, 148.47] },
			{ name: 'Microsoft', value: '$370.60', chartData: [374.58, 374.66, 374.07, 375.28, 376.04, 370.87, 370.60] },
			{ name: 'Nvidia', value: '$475.69', chartData: [488.30, 492.79, 494.17, 495.22, 495.22, 481.68, 475.69] },
		],
	};

	const handleEditFavorites = () => {
		alert('Favoriler düzenleme ekranına yönlendiriliyor...');
	};

	// Sembol ekleme için
	const [isAddVisible, setIsAddVisible] = useState(false);
	const [number, setNumber] = useState('');

	const handleAddOpenModal = () => {
		setIsAddVisible(true);
	};

	const handleAddCloseModal = () => {
		setIsAddVisible(false);
	};

	const handleAddConfirm = () => {
		handleAddCloseModal();
	};

	// Sembol silme için

	const [isRemoveVisible, setIsRemoveVisible] = useState(false);
	const [selectedSymbol, setSelectedSymbol] = useState('');

	const handleRemoveOpenModal = (value) => {
		setIsRemoveVisible(true);
		setSelectedSymbol(selectedSymbol);
	};

	const handleRemoveCloseModal = () => {
		setIsRemoveVisible(false);
	};

	const handleRemoveConfirm = () => {
		handleRemoveCloseModal();
	};

	// Sembol Sayfası

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={styles.symbolSection}>
					<Text style={styles.symbolLabel}>Semboller</Text>
					{userProfile.symbols.map((symnbol, index) => (
						<TouchableOpacity key={index}
							style={styles.symbolItem}
							onLongPress={() => handleRemoveOpenModal(symnbol.name)}
							activeOpacity={1}
						>
							<Text style={styles.symbolItemText}>
								{symnbol.name}: ₺{symnbol.value}
							</Text>
							<LineChart
								data={{
									datasets: [
										{
											data: symnbol.chartData,
											color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
											strokeWidth: 3,
										},
									],
								}}
								width={350}
								height={200}
								yAxisLabel="₺"
								chartConfig={{
									backgroundGradientFrom: '#FFFFEC',
									backgroundGradientTo: '#AFAFAF',
									decimalPlaces: 3,
									color: (opacity = 1) => `rgba(198, 169, 105, ${opacity})`,
									labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
									style: {
										borderRadius: 8,
									},
									propsForDots: {
										r: '3',
										strokeWidth: '1',
										stroke: '#000000',
									},
								}}
								bezier
							/>
						</TouchableOpacity>
					))}
				</View>
				<TouchableOpacity style={styles.editButton} onPress={handleAddOpenModal}>
					<Text style={styles.editButtonText}>Sembol Ekle</Text>
				</TouchableOpacity>

				{/* Sembol ekleme ekranı */}

				<Modal isVisible={isAddVisible} onBackdropPress={handleAddCloseModal}>
					<View style={styles.modalContainer}>
						<Text style={styles.modalTitle}>Sembol Ekle</Text>
						<TextInput
							style={styles.input}
							placeholder="Sembol"
							onChangeText={(value) => setNumber(value)}
						/>
						<View style={styles.buttonContainer}>
							<TouchableOpacity style={styles.cancelButton} onPress={handleAddCloseModal}>
								<Text style={styles.buttonText}>İptal</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.confirmButton} onPress={handleAddConfirm}>
								<Text style={styles.buttonText}>Ekle</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>

				{/* Sembol silme ekranı */}

				<Modal isVisible={isRemoveVisible} onBackdropPress={handleRemoveCloseModal}>
					<View style={styles.modalContainer}>
						<Text style={styles.modalTitle}>Sembol Sil</Text>
						<View style={styles.buttonContainer}>
							<TouchableOpacity style={styles.cancelButton} onPress={handleRemoveCloseModal}>
								<Text style={styles.buttonText}>İptal</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.confirmButton} onPress={handleRemoveConfirm}>
								<Text style={styles.buttonText}>Sil</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>

			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#597E52',
	},
	symbolSection: {
		marginBottom: 30,
	},
	symbolLabel: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#333',
		textAlign: 'center',
	},
	symbolItem: {
		marginBottom: 15,
		alignItems: 'center',
	},
	symbolItemText: {
		fontSize: 16,
		color: '#333',
		marginBottom: 10,
	},
	editButton: {
		backgroundColor: 'tomato',
		padding: 15,
		borderRadius: 10,
		marginBottom: 40,
	},
	editButtonText: {
		fontSize: 16,
		color: '#FFFFEC',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalContainer: {
		backgroundColor: 'white',
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
		borderColor: 'gray',
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
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
		marginRight: 5,
	},
	confirmButton: {
		flex: 1,
		backgroundColor: 'green',
		padding: 10,
		borderRadius: 5,
		marginLeft: 5,
	},
});

export default ProfileScreen;
