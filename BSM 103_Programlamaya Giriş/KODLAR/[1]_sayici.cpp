//=========================================
// Adı				: Programlamaya Giriş 
// Yazar			: Gülüzar ÇİT
// Versiyon			: 1.0
// Telif Hakkı		: @Copyright 2018
//=========================================
// Nesnete Dayalı Prg & Kalıtım 
//=========================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

class Sayici                            //Temel Sınıf
{
protected:                           //Türetilmiş sınıfta doğrudan erişilebilmesi için protected yapılmalı
	unsigned int sayi;
public:
	Sayici() : sayi(0)
	{  }
	Sayici(int c) : sayi(c)
	{  }
	unsigned int getSayi() const
	{
		return sayi;
	}

	void setSayi(unsigned int sayi)
	{
		this->sayi = sayi;
	}

	void operator ++ ()
	{
		sayi++;
	}
};

class AsagiSayici : public Sayici           // Türetilen Sinif
{
public:
	void operator -- ()
	{
		sayi--;
	}

	// Temel Sinif yapicisi cagrilmasaydi,
	// temel sinifin varsayilan(parametresiz) yapısıcıs calisacakti...
	// Burada ise, temel sinif tek parametreli yapicisi calisir => Sayici(a)
	// En son ise turetilmis sinif yapicisi tamamlanir...
	AsagiSayici(int a) :Sayici(a)
	{  
		cout << "Turetilmis Sinif Parametreli Yapicisi";
	}
};

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	AsagiSayici c1;

	cout << "\nc1=" << c1.getSayi();

	++c1; ++c1; ++c1;
	cout << "\nc1=" << c1.getSayi();

	--c1; --c1;
	cout << "\nc1=" << c1.getSayi();
	cout << endl;

	system("pause");

	return 0;
}



