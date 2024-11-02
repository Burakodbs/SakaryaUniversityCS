//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Karar Yapıları - switch/case
// Dört İşlem
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi 

using namespace std;


int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");
	
	char islem;
	float sayi1, sayi2;

	cout << "Bir işlem girin (+, -, *, /): ";
	cin >> islem;

	cout << "İki sayi girin: ";
	cin >> sayi1 >> sayi2;

	switch (islem)
	{
	case '+':
		cout << sayi1 << " + " << sayi2 << " = " << sayi1 + sayi2;
		break;
	case '-':
		cout << sayi1 << " - " << sayi2 << " = " << sayi1 - sayi2;
		break;
	case '*':
		cout << sayi1 << " * " << sayi2 << " = " << sayi1 * sayi2;
		break;
	case '/':
		cout << sayi1 << " / " << sayi2 << " = " << sayi1 / sayi2;
		break;
	default:
		// Klavyeden girilen karakter dört işlemden hiç biri değilse (+, -, *, /)
		cout << "Hata!...";
		break;
	}


	//switch-case yapısı if/else yapısı ile de gerçekleştirilebilir.
	/*
	if (islem='+')
		cout << sayi1 << " + " << sayi2 << " = " << sayi1 + sayi2;
	else if (islem = '-')
		cout << sayi1 << " - " << sayi2 << " = " << sayi1 - sayi2;
	else if (islem = '*')
		cout << sayi1 << " * " << sayi2 << " = " << sayi1 * sayi2;
	else if (islem = '/')
		cout << sayi1 << " / " << sayi2 << " = " << sayi1 / sayi2;
	else 
		cout << "Hata!...";
	*/

	system("pause");

	return 0;
}


