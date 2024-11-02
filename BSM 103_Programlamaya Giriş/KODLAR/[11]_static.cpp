//=========================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//=========================================
// Sınıf ve Nesne 
//=========================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

class Araba
{
private:
	int renk;
	int model;
	double yakitMiktari;
public:
	static int sayi;

	Araba()
	{
		cout << ++sayi << endl;
	}
	
	static int getSayi()	//int getSayi()     
	{
		return sayi;
	}

	~Araba()
	{
		cout << sayi-- << endl;
	}
};

// statik üyeler burada başlatılabilir....     
int Araba::sayi = 0; 

using namespace std;

int main()
{
	cout << "ilk:" << Araba::getSayi();

	Araba a1, a2, a3;

	cout << "Aktif Araba Sayısı => " << a1.getSayi() << endl;
	cout << "Aktif Araba Sayısı => " << a2.getSayi() << endl;
	cout << "Aktif Araba Sayısı => " << a3.getSayi() << endl;

	system("pause");
	return 0;
}



