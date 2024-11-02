//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
#include <iostream>

using namespace std;

struct olcu {
	unsigned int metre;
	unsigned int cm;
};

int main()
{
	olcu en = { 2,40 };
	//cout << "En: " << en.metre << " m " << en.cm << " cm" << endl;


	olcu boy;
	cout << "Boyunu Giriniz:";
	cin >> boy.metre >> boy.cm;

	olcu cevre;
	cevre.metre = 2 * (en.metre + boy.metre);
	cevre.cm    = 2 * (en.cm    + boy.cm);
	
	if (cevre.cm >= 100)
	{
		int ekle = cevre.cm / 100;
		int kalan= cevre.cm % 100;

		cevre.cm = kalan;
		cevre.metre+=ekle;
	}

	cout << "En   : " << en.metre << " m " << en.cm << " cm" << endl;
	cout << "Boy  : " << boy.metre << " m " << boy.cm << " cm" << endl;
	cout << "Cevre: " << cevre.metre << " m " << cevre.cm << " cm" << endl;
	cout << sizeof(int) << endl;
	cout << sizeof(olcu) << endl;
	
	system("pause");
	return 0;
}