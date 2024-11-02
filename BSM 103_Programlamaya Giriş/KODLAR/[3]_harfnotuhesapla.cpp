//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Karar Yapıları - if/else
// Harf Notu Hesaplama
//============================================

#include <iostream>

using namespace std;


int main()
{
	int vize, final;

	cout << "Vize ve Final notunu giriniz: ";
	cin >> vize >> final;

	float ortalama = (vize * 0.4 + final * .6);

	cout << "Ortalamanız : " << ortalama;

	if (ortalama >= 90)				// 90-100
		cout << "A";
	else if (ortalama >= 80)		// 80-89 
		cout << "B";
	else if (ortalama >= 70)		// 70-79  
		cout << "C";
	else if (ortalama >= 60)		// 60-69   
		cout << "D";
	else if (ortalama >= 50)		// 50-59
		cout << "E";
	else							// 0 - 60   
		cout << "F";

	system("pause");

	return 0;
}


