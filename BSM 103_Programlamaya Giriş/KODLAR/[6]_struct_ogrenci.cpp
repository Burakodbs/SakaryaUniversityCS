//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Yapı Tanımlama - struct
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

struct ogrenci {                    // yapı tanımlama
	string ad;
	string soyad;
	int vize;
	int final;
};


int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	ogrenci ogrNot;                      // yapı değişkeni tanımlanır
	double basari;


	cout << "Öğrencinin Adı:" << endl;
	cin >> ogrNot.ad;                                                 // yapı üyesine değer atama
	cout << endl << "Ogrencinin soyadini giriniz \n";
	//cin >> ogrNot.soyad;
	cout << endl << "Vize notunu giriniz \n";
	//cin >> ogrNot.vize;
	cout << endl << "Final notunu giriniz \n";
	//cin >> ogrNot.final;
	cout << endl << "Ogrenci Bilgileri\n";

	//cout << ogrNot.ad << '\t' << ogrNot.soyad << '\t' << ogrNot.vize << '\t' << ogrNot.final << endl;
	//basari = 0.4*ogrNot.vize + 0.6*ogrNot.final;
	//if (basari > 50)
		//cout << "basari notunuz:" << basari << '\t' << "Gectiniz \n";
	//else
		//cout << "basari notunuz:" << basari << '\t' << "Seneye \n";

	
	system("pause");			// bir tuşa basıncaya kadar bekle

	return 0;
}

