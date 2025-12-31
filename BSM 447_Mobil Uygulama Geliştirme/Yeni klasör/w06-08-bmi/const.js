// const.js - Sabitler ve Konfigürasyon Dosyası

// DERS NOTU: Yazılımda "Magic Numbers" (Sihirli Sayılar) dediğimiz kötü bir alışkanlık vardır.
// Kodun içine rastgele "150", "20" gibi sayılar gömmek hatadır.
// Çünkü bu sayının ne anlama geldiği belli değildir ve değiştirmesi zordur.
// Bu yüzden tüm ayarları tek bir dosyada topluyoruz.

// ---------------------------------------------------------
// 1. VARSAYILAN DEĞERLER (DEFAULT STATE)
// ---------------------------------------------------------
// Uygulama ilk açıldığında veya "Sıfırla" butonuna basıldığında
// state'lerin alacağı başlangıç değerleri.
// Tek bir obje içinde tutmak, yönetimi kolaylaştırır.
export const DEFAULT_VALUE = {
  gender: "female", // Başlangıçta seçili gelecek cinsiyet
  height: 185,    // Başlangıç boyu (cm)
  weight: 80,     // Başlangıç kilosu (kg)
  age: 40,        // Başlangıç yaşı
};

// ---------------------------------------------------------
// 2. DOĞRULAMA LİMİTLERİ (VALIDATION BOUNDARIES)
// ---------------------------------------------------------
// Kullanıcının girebileceği en alt ve en üst sınırlar.
// UnitSelection.js ve HeightSelection.js dosyalarında bu sınırları kullanıyoruz.

export const MIN_WEIGHT = 30;  // En az 10 kg olabilir
export const MAX_WEIGHT = 150; // En çok 150 kg olabilir

export const MIN_AGE = 1;      // En az 1 yaşında olabilir
export const MAX_AGE = 150;    // En çok 150 yaşında olabilir (Rekorlar kitabına saygı :))