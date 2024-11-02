//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Döngü Yapıları - while
// Klavyeden girilen cümlenin kaç kelime 
// harften oluştuğunu bulan program
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi
#include <conio.h>					// _getch() için

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	int harfSayac	= 0;			// kelime sayacı
	int kelimeSayac = 1;			// harf sayacı
	
	char ch = 'a';					//‘\r’ (Enter tuşu) olmamalı 

	cout << "Bir Cümle Giriniz .: ";

	while (ch != '\r')				// enter tusuna basana kadar dön
	{
		ch = _getche();				// klavyeden girilen karakteri okur

		if (ch == ' ')				// eğer karakter boşluk ise
			kelimeSayac++;			// kelime sayısını bir artır 
		else						// diğer durumda
			// !!!!!!!!!!!!!!!!!!!!!!!!! burada bir hata var !!!!!!!!!!
			harfSayac++;			// harf sayısını bir artır
	}

	cout << "\n Kelime Sayısı......: " << kelimeSayac << endl;
	cout <<    "Harf Sayısı........: " << (harfSayac - 1) << endl;		// ‘\r’ (Enter tuşu) çıkartılır
	
	system("pause");

	return 0;
}



