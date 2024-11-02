//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Kayan noktalı veri tipi - float
// Kalvyeden girilen yarıçap değerine göre 
// dairenin alanını hesaplayan program
//============================================

#include <iostream>
 
using namespace std;

int main()
{
	float yaricap;                           	// kayan noktalı veri tipi 
	const float PI = 3.14159F;           		// float veri tipinde sabir değer atama
	
	float alan;
	
	cout << "Dairenin yari capi: ";  			// kullanıcıdan veri girişi ister
	cin >> yaricap;                          	// kullanıcı tarafından girilen değeri 'yaricap' değişkenine atar
	
	alan = PI * yaricap * yaricap; 
    //float alan = PI * yaricap * yaricap; 
	
	//cout.setf(ios::fixed);
	//cout.setf(ios::showpoint); 
	//cout.precision(2);						// kayan noktalı sayı hassasiyeti 
												// (Virgülden sonra) istenen sayıda basamak yazdırma (örneğin 2 basamak)

	
	cout << setprecision(4) << alan << '\n';
	//cout << "Alan Degeri: " << alan << endl;
	
	system("pause");  
	
	return 0;
}


