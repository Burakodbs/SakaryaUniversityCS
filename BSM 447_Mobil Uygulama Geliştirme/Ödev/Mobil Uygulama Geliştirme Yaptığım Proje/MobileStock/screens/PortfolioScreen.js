import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';

const PortfolioScreen = () => {
	const userPortfolio = {
		symbols: [
			{ name: 'Dolar', unitValue: 29.78, amount: 100 },
			{ name: 'Euro', unitValue: 32.59, amount: 50 },
			{ name: 'Sterlin', unitValue: 37.74, amount: 30 },
			{ name: 'Yen', unitValue: 0.208, amount: 200 },
			{ name: 'Apple', unitValue: 5486.965, amount: 10 },
			{ name: 'Google', unitValue: 4137.0376, amount: 5 },
			{ name: 'Amazon', unitValue: 4421.4366, amount: 3 },
			{ name: 'Microsoft', unitValue: 11036.468, amount: 8 },
			{ name: 'Nvidia', unitValue: 14166.0482, amount: 15 },
		],
	};

	const calculateTotalValueInTRY = () => {
		const totalSymbolsValue = userPortfolio.symbols.reduce((acc, currency) => acc + currency.unitValue * currency.amount, 0);
		return totalSymbolsValue;
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
		setSelectedSymbol(value);
	};

	const handleRemoveCloseModal = () => {
		setIsRemoveVisible(false);
	};

	const handleRemoveConfirm = () => {

		// Modal'ı kapat
		handleRemoveCloseModal();
	};

	// Sayfa
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<Text style={styles.title}>Portföyüm</Text>
				<View style={styles.portfolioSection}>
					{userPortfolio.symbols.map((symbol, index) => (
						<TouchableOpacity key={index}
							style={styles.itemContainer}
							onLongPress={() => handleRemoveOpenModal(symbol.amount)}
							activeOpacity={1}
						>
							<Text style={styles.itemName}>{symbol.name}</Text>
							<Text style={styles.itemAmount}>Birim: {symbol.amount}</Text>
							<Text style={styles.itemUnitValue}>Birim Fiyat: ₺{symbol.unitValue.toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</Text>
							<Text style={styles.itemValue}>Toplam: ₺{(symbol.unitValue * symbol.amount).toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</Text>
						</TouchableOpacity>
					))}
				</View>
				<View style={styles.totalValueContainer}>
					<Text style={styles.totalValueLabel}>Portföy Değeri</Text>
					<Text style={styles.totalValueTRY}>{calculateTotalValueInTRY().toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 })} TRY</Text>
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

				{/* Sembol silme veya güncelleme ekranı */}

				<Modal isVisible={isRemoveVisible} onBackdropPress={handleRemoveCloseModal}>
					<View style={styles.modalContainer}>
						<Text style={styles.modalTitle}>Sembol Sil</Text>
						<Text>Miktar</Text>
						<TextInput
							style={styles.input}
							value={selectedSymbol.toString()}
							keyboardType="numeric"
						/>
						<View style={styles.buttonContainer}>
							<TouchableOpacity style={styles.cancelButton} onPress={handleRemoveCloseModal}>
								<Text style={styles.buttonText}>İptal</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.confirmButton} onPress={handleRemoveConfirm}>
								<Text style={styles.buttonText}>Sil</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.confirmButton} onPress={handleRemoveConfirm}>
								<Text style={styles.buttonText}>Güncelle</Text>
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
		flexGrow: 1,
		padding: 20,
		backgroundColor: '#597E52', // Açık gri arka plan
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#333', // Koyu gri renk
		textAlign: 'center',
	},
	portfolioSection: {
		marginBottom: 20,
	},
	itemContainer: {
		backgroundColor: '#FFFFEC', // Beyaz renk
		padding: 15,
		borderRadius: 10,
		marginBottom: 10,
	},
	itemName: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 5,
		color: '#333', // Koyu gri renk
	},
	itemUnitValue: {
		fontSize: 14,
		marginBottom: 5,
		color: '#333', // Gri renk
	},
	itemAmount: {
		fontSize: 14,
		marginBottom: 5,
		color: '#333', // Gri renk
	},
	itemValue: {
		fontSize: 14,
		color: '#333', // Gri renk
	},
	totalValueContainer: {
		backgroundColor: 'tomato', // Yeşil renk
		padding: 15,
		borderRadius: 10,
		marginBottom: 20,
	},
	totalValueLabel: {
		fontSize: 16,
		color: '#FFFFEC',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	totalValueTRY: {
		fontSize: 20,
		color: '#FFFFEC',
		fontWeight: 'bold',
		textAlign: 'center',
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

export default PortfolioScreen;
