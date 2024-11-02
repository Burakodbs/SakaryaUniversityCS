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
	//Yapıcı Fonksiyon nesne oluşturulurken ve sadece 1 defa calistirilir
	Ogrenci()
	{
		ad    = "Şener";
		soyad = "Şen";
		vize  = 55;
		final = 100;
		cout << "Parametresiz Yapici Calisti ... \n";
	}
	Ogrenci(string a, string s, int v, int f)
	{
		ad = a;
		soyad = s;
		vize = v;
		final = f;
		cout << "4 Parametreli Yapici Calisti ... \n";
	}


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

	Ogrenci ogr1;
	Ogrenci ogr2("Cem", "Demir", 40,50);

	cout << "*** Ogrenci Bilgileri ***" << endl;
	ogr1.bilgiGoster();
	ogr2.bilgiGoster();

	ogr1.bilgiGir();
	ogr1.bilgiGoster();

	system("pause");

	return 0;
}



