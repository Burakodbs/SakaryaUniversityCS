//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Yapı Tanımlama - struct
//============================================

#include <iostream>
#include <iomanip>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

struct Karmasik
{
	double gercel;
	double sanal;
};

int main()
{

	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	Karmasik sayi1, sayi2, sonuc;
	sayi1.gercel = 44.426423423;
	sayi1.sanal = 48;

	cout << "2. sayinin gercel ve sanal kisimlarini giriniz:";
	cin  >> sayi2.gercel >> sayi2.sanal;

	sonuc.gercel = sayi1.gercel + sayi2.gercel;
	sonuc.sanal	 = sayi1.sanal + sayi2.sanal;

	cout << fixed << setprecision(2) << sonuc.gercel
		 << "+" << sonuc.sanal << " i" << endl;
	
	//cout << fixed <<setprecision(1)<<sayi1.gercel
	//     << '+' << setw(5) << right << sayi1.sanal << 'i' << endl;
	
	//gecikme için...
	//for(float j=1;j<1000000.0;j+=.01);

	cout << sizeof(sayi1) << "    " << sizeof(int);
	
	//system("cls");			// ekranı temizleme
	system("pause");			// bir tuşa basıncaya kadar bekle

	return 0;
}

