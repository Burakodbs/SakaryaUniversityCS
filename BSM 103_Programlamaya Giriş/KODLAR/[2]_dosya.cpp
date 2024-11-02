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
#include <string>

using namespace std;

struct rehber {
	string ad;
	string tel;
};

int main()
{
	rehber rehberim;

	char devam = 'e';

	ofstream dosyaYaz;
	
	dosyaYaz.open("Rehber.txt", ios::app);

	do {
		cout << "ad ve telefon bilgileri giriniz\n";
		cin >> rehberim.ad >> rehberim.tel;
		dosyaYaz << rehberim.ad << "\t" << rehberim.tel << "\n";
		cout << "\n Yeni kayit yapacak misiniz (e/h) ";
		cin >> devam;
	} while (!(devam == 'h'));

	dosyaYaz.close();

	ifstream dosyaOku;
	
	dosyaOku.open("Rehber.txt");
	
	string isim;
	
	cout << "Aranilacak Adi Giriniz: ";
	cin >> isim;
	
	while (!dosyaOku.eof()) {
		// while (dosyaOku>>rehberim.ad>>rehberim.tel)
		dosyaOku >> rehberim.ad >> rehberim.tel;
		if (isim == rehberim.ad)
			cout << rehberim.ad << "\n" << rehberim.tel;
	}

	dosyaOku.close();

	system("pause");
	return 0;
}

