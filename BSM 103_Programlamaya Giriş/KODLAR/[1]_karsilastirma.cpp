//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Karar Yapıları - if
// İki sayıyı karşılaştırma
//=========================================

#include <iostream>

using namespace std;


int main()
{
	int sayi1, sayi2;

	cout << "iki sayi giriniz: ";
	cin >> sayi1 >> sayi2;
   
	if( sayi1<sayi2)
	{   
		cout << sayi1<<"\t" <<sayi2 <<"den kucuk...\n";
	}
   
	if( sayi1>sayi2)
	{
		cout << " sayi1 sayi2 den buyuk...\n";
	}
	
	if( sayi1==sayi2)
	{
		cout << " sayi1 sayi2 ye esit...\n";
	}
	return 0;
}

