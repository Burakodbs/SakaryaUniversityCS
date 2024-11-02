//=========================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//=========================================
// Sınıf ve Nesne 
//=========================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;
class mesafe 	//sınıf tanımla
{
private:
	int metre;
	float cm;
public:
	mesafe() :metre(0), cm(0.0)
	{   }

	mesafe(int met, float sant) : metre(met), cm(sant)
	{   }

	void degerAl()
	{
		cout << "\n metre gir : "; cin >> metre;
		cout << " cm gir    : ";   cin >> cm;
	}

	void goster()
	{
		cout << metre << "  metre  " << cm << " cm dir";
	}

	void toplauzun(mesafe, mesafe);  //prototip tanımlama
};

void mesafe::toplauzun(mesafe  m2, mesafe m3)
{
	cm = m2.cm + m3.cm;
	metre = 0;
	if (cm >= 100.0)
	{
		cm -= 100.0;
		metre++;
	}
	metre += m2.metre + m3.metre;
}

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	mesafe mesafe1, mesafe3;
	mesafe mesafe2(5, 4.3);

	mesafe1.degerAl();
	mesafe3.toplauzun(mesafe1, mesafe2);

	cout << " \n mesafe1= "; mesafe1.goster();
	cout << "\n mesafe2= "; mesafe2.goster();
	cout << "\n mesafe3= "; mesafe3.goster();
	cout << endl;

	system("pause");

	return 0;
}



