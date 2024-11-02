//==========================================
// Adı				: Programlamaya Giriş 
// Yazar			: Gülüzar ÇİT
// Versiyon			: 1.0
// Telif Hakkı		: @Copyright 2018
//=========================================
// Dosyalama
//=========================================

#include <iostream>
#include <fstream>
using namespace std;

int main() {
	// Dosya veri yazma işlemi
	ofstream dosyaYaz;
	dosyaYaz.open("kayit.txt", ios::out);

	dosyaYaz << "Dosya Veri Yazma \n";
	dosyaYaz.close();


	// dosyadan okuma işlemi
	ifstream dosyaOku("kayit.txt", ios::in);

	if (dosyaOku.is_open())
		cout << "Dosya Acma Basarili\n";
	
	char oku;
	
	while (!dosyaOku.eof()) {
		dosyaOku >> oku;
		cout << oku << " ";
	}

	dosyaOku.close();

	system("pause");
	return 0;
}
