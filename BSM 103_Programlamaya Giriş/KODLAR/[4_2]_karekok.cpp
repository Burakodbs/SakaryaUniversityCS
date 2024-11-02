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
	do
	{
		b = (a - x * x) / (2 * x);				// hatayi hesapla
		y = x + b;								// yeni karakök değeri
		cout << endl << x;
		x = y;
	} while (fabs(b) > e);

	cout << "Karekök: " << y <<endl;			// en son hesaplanan karekök değeri
	

	system("pause");

	return 0;
}





