//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Yapı Tanımlama - struct
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

enum CalisanDurumu { acliksiniri, ortahalli, iyidurumda };

struct Isci
{
	int isciNo;
	float maas;
	CalisanDurumu cd;
};

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");


	Isci  isci;

	cout << " ###  GIRILEN BILGILER  ###" << endl;
	cout << "1. calisanin numarasini giriniz:  ";
	cin >> isci.isciNo;
	cout << endl;
	cout << "1. calisanin maasini giriniz:  ";
	cin >> isci.maas;
	cout << endl;

	cout << " ***  CIKTI BILGISI  ***" << endl;
	cout << " 1.Calisanin numarasini = \t " << isci.isciNo << endl;
	cout << " 1.Calisanin maasi      = \t " << isci.maas << " TL" << endl;

	if (isci.maas < 600)
		isci.cd = acliksiniri;
	else if (isci.maas < 1500)
		isci.cd = ortahalli;
	else if (isci.maas > 1500)
		isci.cd = iyidurumda;

	switch (isci.cd)
	{
	case acliksiniri:
		cout << " 1.Calisanin durumu     = \t acliksiniri \n " << endl;
		break;
	case ortahalli:
		cout << " 1.Calisanin durumu     = \t ortahalli\n " << endl;
		break;
	case iyidurumda:
		cout << " 1.Calisanin durumu     = \t iyidurumda \n" << endl;
		break;
	}

	system("pause");			// bir tuşa basıncaya kadar bekle

	return 0;
}

