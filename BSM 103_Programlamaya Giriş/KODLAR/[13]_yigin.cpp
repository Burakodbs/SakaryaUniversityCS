//=========================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//=========================================
// Sınıf ve Nesne 
//=========================================

#include <iostream
#include <cstring>
#include <stdlib.h>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

class Ogrenci                    	
{   
   private:
      const string ad;
      string soyad;
   public:							// Kurucu Fonksiyon
      Ogrenci(string a, string s): ad(a), soyad(s)
      {      						//ad=a;
      }
	  
      void bilgiGir()  const    //const olmayan nesne kullanabilir
      {
         getline(cin,ad);          
         getline(cin,soyad);
      }
	  
      void bilgiListele() const  //const olan nesne bunu kullanır
      { 
         cout << ad << "\t" << soyad; 
      }
	  
      void bilgiListele()  		//const olmayan nesne bunu kullanır
      { 
         cout << ad << "\tconst olmayan\t" << soyad; 
      }
};

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	const Ogrenci o1("Ayse","Yilmaz");
	//o1.bilgiGir();//Hata, sadece const fonksiyonlar kullanılabilir
	o1.bilgiListele(); //const olan fonksiyon çağrılır

	system("pause");

	return 0;
}



