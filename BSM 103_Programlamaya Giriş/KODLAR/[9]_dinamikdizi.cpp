//==========================================
// Adı				: Programlamaya Giriş 
// Yazar			: Gülüzar ÇİT
// Versiyon			: 1.0
// Telif Hakkı		: @Copyright 2018
//=========================================
// İşaretçiler 
//=========================================

#include <iostream>
using namespace std;

int main()
{
	long *dizi;
	
	int n;
	cout << "Kac sayi gireceksiniz?"; cin >> n;
	
	dizi = new long[n];
	
	//dizi=NULL;

	if (dizi == NULL)
		return 0;
	
	for (int i = 0; i < n; i++)
	{
		cout << "sayiyi giriniz ";
		cin >> dizi[i];
	}

	cout << "Girdiğiniz degerler :   ";
	
	for (int i = 0; i < n; i++)
		cout << dizi[i] << ", ";
	
	delete[] dizi;

	system("pause");
	return 0;
}
 