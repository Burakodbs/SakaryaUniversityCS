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

	Karmasik sayi1, sayi2;
	sayi1.gercel = 44.423423423;
	sayi1.sanal = 48;
	//sayi1.sanal=48e2;
	cout << fixed << setprecision(3) << sayi1.gercel
		<< ' + ' << sayi1.sanal << "i" << endl;

	//cout <<scientific<<setprecision(3)
	//	   <<sayi1.gercel<<'+'<<setw(5)<<right
	//     <<sayi1.sanal<<'i'<<endl;

	cout << sizeof(sayi1) << "    " << sizeof(int) << endl;
	
	//system("cls");			// ekranı temizleme
	system("pause");			// bir tuşa basıncaya kadar bekle

	return 0;
}

