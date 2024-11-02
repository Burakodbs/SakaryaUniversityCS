//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Karekök Alma - Kötü Örnek (GOTO Kullanımı)
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi
#include <cmath>					// sqrt() - karekök alma fonksiyonu için

using namespace std;

int main()
{
	
	setlocale(LC_ALL, "Turkish");

	float a, x, e, b, y;

	cout << "karekökü bulunacak sayiyi giriniz: ";
	cin >> a;
	cout << "tahmini karakör değerini giriniz: ";
	cin >> x;
	cout << "kabul edilebilir hata değerini giriniz: ";
	cin >> e;
A5:
	b = (a - x * x) / (2 * x);  // hatayi hesapla
	y = x + b;    // yeni karakök değeri
	cout  << y << endl;
	if (fabs(b) <= e)
		goto A10;
	else
		x = y; goto A5;
A10:
	cout << "Karekök: " << y <<endl;  // en son hesaplanan karekök değeri
	

	system("pause");

	return 0;
}





