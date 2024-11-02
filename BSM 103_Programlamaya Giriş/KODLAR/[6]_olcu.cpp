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

class mesafe 	//sınıf tanımla
{
private:
	int metre;
	float cm;
public:
	void degerAta(int met, float sant)
	{
		metre = met; 
		cm    = sant;
	}

	void degerAl()
	{
		cout << " metre   : " ; cin >> metre;
		cout << " cm      : " ; cin >> cm;
	}

	void goster()
	{
		cout << metre << "  mt  " << cm << "cm\n" ;
	}
};

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	mesafe m1, m2;		// iki obje tanımla
	m1.degerAta(5, 20);	// m1 objesine değer ata
	m2.degerAl();		// m2 objesine değeral

	cout << "\n m1 değeri "; m1.goster();
	// m1 objesinin değerlerini göster
	cout << "\n m2 değeri "; m2.goster();
	// m2 objesinin değerlerini göster

	system("pause");

	return 0;
}



