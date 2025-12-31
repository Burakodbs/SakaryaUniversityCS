// style.js - Ortak Stil ve Yapılandırma Dosyası

// React Native'in platform bilgisini (iOS mu Android mi?) almak için kullanıyoruz.
// Çünkü her işletim sisteminin fontları veya tasarım dili farklı olabilir.
import { Platform } from "react-native";

// ---------------------------------------------------------
// 1. RENK PALETİ (THEME CONSTANTS)
// ---------------------------------------------------------
// Uygulamanın genelinde kullanılacak renkleri buraya sabitliyoruz.
// Yarın öbür gün "Müşteri: Koyu lacivert değil de siyah olsun" derse,
// 50 farklı dosyayı gezmek yerine sadece burayı değiştiriyoruz.
export const BG_COLOR = "#323344";          // Kartların arka plan rengi
export const HIGHLIGHT_BG_COLOR = "#24263b";// Aktif olmayan veya vurgusuz alanlar

// ---------------------------------------------------------
// 2. METİN STİLLERİ (TEXT STYLES)
// ---------------------------------------------------------

// Temel Metin Stili
// Uygulamadaki tüm yazıların ortak özelliği.
export const TEXT = {
  color: "#fff",      // Tüm yazılar beyaz olsun
  textAlign: "center",// Tüm yazılar ortalı olsun
};

// Etiket (Label) Stili - Örn: "YAŞ", "BOY" yazıları
export const TEXT_LABEL = {
  fontSize: 15,       // Küçük punto
  textAlign: "center",
  color: "#848694",   // Gri tonlu (ikincil metin rengi)
};

// Değer (Value) Stili - Örn: "180", "75" gibi büyük rakamlar
export const TEXT_VALUE = {
  ...TEXT, // SPREAD OPERATOR: Yukarıdaki TEXT objesinin tüm özelliklerini (renk, ortalama) buraya kopyala.
           // Bu sayede 'color: #fff' diye tekrar yazmamıza gerek kalmadı.
           
  // Platform Kontrolü:
  // Eğer cihaz iOS ise 'Helvetica Neue' fontunu kullan, daha şık durur.
  // Değilse (Android ise) null geç, yani telefonun varsayılan fontunu (Roboto) kullan.
  fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : null,
  fontSize: 35,       // Büyük punto
  lineHeight: 55,     // Satır yüksekliği (yazının dikeyde kapladığı alan)
  fontWeight: "bold", // Kalın yazı
};

// ---------------------------------------------------------
// 3. DÜZEN (LAYOUT) STİLLERİ
// ---------------------------------------------------------

// Yan Yana Dizilim (ROW)
// Flexbox yapısında elemanları yan yana dizmek için.
export const ROW = {
  flex: 1,                    // Bulunduğu alanı kapla
  flexDirection: "row",       // Yan yana diz (Varsayılan column'dur)
  justifyContent: "space-between", // Elemanların arasına eşit boşluk bırak (Sola ve Sağa yasla)
};

// Tam Ortalama (CENTER)
// Bir nesneyi hem yatayda hem dikeyde tam ortaya koymak için.
export const CENTER = {
  justifyContent: "center",   // Dikeyde ortala (flexDirection column ise)
  alignItems: "center",       // Yatayda ortala
};

// Kutu/Kart Görünümü (BOX)
// Cinsiyet, Boy, Kilo kutularının ortak çerçeve stili.
export const BOX = {
  flex: 1,                    // Esnek yapı, boşluğu doldur
  backgroundColor: BG_COLOR,  // Yukarıda tanımladığımız renk
  padding: 15,                // İçeriden 15 birim boşluk
  borderRadius: 10,           // Köşeleri yuvarlat (Modern görünüm)
};