//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// İç İçe Döngüler
// Dört İşlem - V2
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	char islem, ch;
	float sayi1, sayi2;

	do {
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
		
		do {
			cout << "\nBaşka işlem (e/h) : ";
			cin >> ch;
		} while (!(ch == 'e' || ch == 'h'));

	} while (ch != 'h');

	system("pause");

	return 0;
}


