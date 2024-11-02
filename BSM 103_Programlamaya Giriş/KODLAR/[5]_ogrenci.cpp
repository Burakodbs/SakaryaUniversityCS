//=========================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//=========================================
// Sınıf ve Nesne 
//=========================================

#include <iostream>
#include <iomanip>
#include <string>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

class Ogrenci {
private:
	string ad;
	string soyad;
	int vize;
	int final;
	double ort;
public:
	void bilgiGir() {
		cout << "Öğrencinin;" << endl;
		cout << "    Adı        : "; cin >> ad;
		cout << "    Soyadı     : "; cin >> soyad;
		cout << "    Vize Notu  : "; cin >> vize;
		cout << "    Final Notu : "; cin >> final;
	}
	void bilgiGoster() {
		cout << "    Adı Soyadı     : " << ad << " " << soyad << '\t'
			 << "    Ortalaması     : " << ortalama() << '\t'
			 << "    Başarı Durumu  : " << basari(ortalama()) << endl;
	}

	double ortalama() {
		return ort = vize * 0.5 + final * 0.5;
	}

	string basari(double ort) {
		if (ort >= 50)
			return "Gecti :-)";
		else
			return "Kaldı :-(";
	}

};

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	Ogrenci ogr1, ogr2;
	ogr1.bilgiGir();
	cout << "-----------------------" << endl;
	ogr2.bilgiGir();
	cout << "-----------------------" << endl;

	cout << "*** Ogrenci Bilgileri ***" << endl;
	ogr1.bilgiGoster();
	ogr2.bilgiGoster();

	system("pause");

	return 0;
}



