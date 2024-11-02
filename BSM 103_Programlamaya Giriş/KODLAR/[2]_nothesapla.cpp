//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Karar Yapıları - if-else
// İki sayıyı karşılaştırma
//=========================================

#include <iostream>
#include <locale.h>

using namespace std;

int main()
{
	setlocale(LC_ALL, "Turkish");

	int		vize, final;

	cout << "Vize ve final notunu giriniz:";
	cin >> vize >> final;

	float	ortalama = (vize*0.4 + final*.6);

	cout << "Ortalamanız:" << ortalama << endl;

	if (ortalama < 50 || final < 50)
	{
		cout << "Kaldı..." << endl;
	}
	else
	{
		cout << "Geçti..." << endl;
	}

	system("pause");

	return 0;
}