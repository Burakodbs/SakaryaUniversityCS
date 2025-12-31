import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  Image, 
  TextInput, 
  SafeAreaView, 
  Platform,
  ActivityIndicator,
  StatusBar
} from 'react-native';

// Sabitler
const USER_COUNT = 1000; 

export default function App() {

  const [masterData, setMasterData] = useState([]);   // Yedek (Orijinal)
  const [filteredData, setFilteredData] = useState([]); // Ekranda görünen
  const [loading, setLoading] = useState(true);
  

  // ---------------------------------------------------------
  // 2. YAŞAM DÖNGÜSÜ (EFFECTS)
  // ---------------------------------------------------------
  useEffect(() => {
    // Uygulama açılınca veriyi çek
    fetchUsers();
  }, []);


  // ---------------------------------------------------------
  // 3. YARDIMCI FONKSİYONLAR (LOGIC)
  // ---------------------------------------------------------
  
  const fetchUsers = async () => {
    // TODO: API'den veriyi çek (randomuser.me) ve state'e at
  try {
        const response = await fetch(`https://randomuser.me/api/?results=${USER_COUNT}`);
        const json = await response.json();
        
        //setUsers(json.results); // Veriyi state'e atıyoruz

        // 3. aşama yukarısı // ve aşağısı ekle
        setMasterData(json.results);   // Kasaya koy
        setFilteredData(json.results); // Vitrine koy

      } catch (error) {
        console.error("Hata:", error);
      } finally {
        setLoading(false); // Yükleme bitti
      }    
    console.log("Veri çekiliyor...");
  };

  const searchFilterFunction = (text) => {
      if (text) {
          // 1. Orijinal veriden (masterData) filtrele
          const newData = masterData.filter(item => {
            // İsimleri BÜYÜK HARFE çevir ki 'ahmet' ile 'AHMET' eşleşsin
            const itemData = `${item.name.first} ${item.name.last}`.toUpperCase();
            const textData = text.toUpperCase();
            // indexOf > -1 ise aranan metin ismin içinde var demektir
            return itemData.indexOf(textData) > -1;
          });

          // 2. Bulunanları vitrine (filteredData) koy
          setFilteredData(newData);
        } else {
          // 3. Eğer kutu boşsa, her şeyi geri getir
          setFilteredData(masterData);
        }

    console.log("Aranan:", text);
  };


  // ---------------------------------------------------------
  // 4. ARAYÜZ PARÇALARI (RENDER ITEMS)
  // ---------------------------------------------------------
  
  // FlatList'in her bir satırı nasıl görünecek?
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image 
        source={{ uri: item.picture.medium }} 
        style={styles.avatar} 
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          {item.name.first} {item.name.last}
        </Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.country}>{item.location.country}</Text>
      </View>
    </View>
  );

  // Yükleniyor ekranı
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#009688" />
        <Text style={{ marginTop: 10 }}>Kullanıcılar Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* ARAMA KUTUSU ALANI */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="İsim Ara..."
          placeholderTextColor="#999"
          // TODO: onChangeText eventini bağla
          //3. adım
          onChangeText={(text) => searchFilterFunction(text)}
        />
      </View>

      {/* LİSTE ALANI */}
      <View style={styles.listContainer}>
        {/* TODO: FlatList bileşenini buraya yazacağız */}
        
        <FlatList
            data={filteredData}
            keyExtractor={(item) => item.login.uuid}
            renderItem={renderItem}
          />        
      </View>

    </SafeAreaView>
  );
}

// ---------------------------------------------------------
// 5. STİLLER (HAZIR - DOKUNMAYIN)
// ---------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    padding: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    elevation: 2,
    zIndex: 1,
  },
  searchInput: {
    height: 45,
    backgroundColor: '#f1f3f4',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  listContainer: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 2,
  },
  email: {
    fontSize: 13,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  country: {
    fontSize: 12,
    color: '#009688',
    fontWeight: '600',
  },
});