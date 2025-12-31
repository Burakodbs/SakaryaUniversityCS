import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
// SQLite kütüphanesini projeye dahil ediyoruz
import * as SQLite from 'expo-sqlite';

// 📂 Veritabanı referansını tutacak global değişken
let db;

// 🛠️ Veritabanı dosyasını asenkron olarak açan fonksiyon
// Eğer dosya yoksa 'example.db' adında yeni bir dosya oluşturur.
async function openDatabase() {
  db = await SQLite.openDatabaseAsync('example.db');
}

export default function App() {
  // --- STATE TANIMLAMALARI ---
  // todo: Input alanındaki metni tutar.
  const [todo, setTodo] = useState('');
  // todos: Veritabanından çekilen görev listesini tutar (Dizi).
  const [todos, setTodos] = useState([]);
  // totalTasks: Toplam görev sayısını gösterir.
  const [totalTasks, setTotalTasks] = useState(0); 

  // --- YAŞAM DÖNGÜSÜ (LIFECYCLE) ---
  // Uygulama ilk açıldığında (mount olduğunda) bir kez çalışır.
  useEffect(() => {
    const setupDatabase = async () => {
      // 1. Veritabanı bağlantısını aç
      await openDatabase();

      try {
        // 2. Tabloyu oluştur (SQL Sorgusu)
        // PRAGMA journal_mode = WAL: Daha performanslı yazma işlemi için ayar.
        // CREATE TABLE IF NOT EXISTS: Tablo yoksa oluşturur, varsa hata vermez.
        // done INTEGER DEFAULT 0: 0 -> Yapılmadı, 1 -> Yapıldı anlamına gelir.
        await db.execAsync(`
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            title TEXT NOT NULL,
            done INTEGER DEFAULT 0
          );
        `);
        console.log('Tablo başarıyla kontrol edildi/oluşturuldu.');
        
        // 3. Tablo hazır olunca mevcut verileri ekrana getir.
        fetchTodos();
      } catch (error) {
        console.log('Veritabanı kurulum hatası: ', error);
      }
    };

    setupDatabase();
  }, []);

  // --- CRUD OPERASYONLARI ---

  // 📖 READ: Verileri veritabanından çekme fonksiyonu
  const fetchTodos = async () => {
    try {
      // getAllAsync: SQL sorgusu sonucundaki tüm satırları dizi olarak döner.
      const todos = await db.getAllAsync('SELECT * FROM todos');
      setTodos(todos); // State'i güncelle
      setTotalTasks(todos.length); // Sayacı güncelle
    } catch (error) {
      console.log('Veri çekme hatası: ', error);
    }
  };

  // ➕ CREATE: Yeni veri ekleme fonksiyonu
  const addTodo = async () => {
    // Boş veri girişini engelle
    if (todo.trim() === '') {
      Alert.alert('Hata', 'Lütfen bir görev girin');
      return;
    }

    try {
      // runAsync: Veri ekleme, silme, güncelleme gibi sonuç döndürmeyen işlemler için kullanılır.
      // (?) işareti SQL Injection saldırılarını önlemek için parametre yer tutucusudur.
      await db.runAsync('INSERT INTO todos (title, done) VALUES (?, 0)', [todo]);
      
      setTodo(''); // Input alanını temizle
      fetchTodos(); // Listeyi güncellemek için verileri tekrar çek
    } catch (error) {
      console.log('Veri ekleme hatası: ', error);
    }
  };

  // 🗑️ DELETE: Veri silme fonksiyonu
  const deleteTodo = async (id) => {
    try {
      // ID'ye göre satırı siler
      await db.runAsync('DELETE FROM todos WHERE id = ?', [id]);
      fetchTodos(); // Listeyi güncelle
    } catch (error) {
      console.log('Silme hatası: ', error);
    }
  };

  // ✏️ UPDATE: Görev durumunu (Yapıldı/Yapılmadı) güncelleme
  const toggleTodoStatus = async (id, currentStatus) => {
    // Mevcut durum 0 ise 1 yap, 1 ise 0 yap (Tersi işlem)
    const newStatus = currentStatus === 0 ? 1 : 0;
    try {
      await db.runAsync('UPDATE todos SET done = ? WHERE id = ?', [newStatus, id]);
      fetchTodos(); // Listeyi güncelle
    } catch (error) {
      console.log('Durum değiştirme hatası: ', error);
    }
  };

  // --- ARAYÜZ (UI) ---
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SQLite To-Do Listesi</Text>

      {/* Input ve Ekle Butonu Alanı */}
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Yeni Görev Ekle" 
          value={todo} 
          onChangeText={setTodo} 
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>Ekle</Text>
        </TouchableOpacity>
      </View>

      {/* Görev Listesi (FlatList performans için tercih edilir) */}
      <FlatList 
        data={todos}
        keyExtractor={(item) => item.id.toString()} // Her öğe için benzersiz anahtar
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            {/* Görev Metni: Eğer done=1 ise üstünü çiz */}
            <Text style={[styles.todoText, item.done === 1 && styles.todoTextDone]}>
              {item.title}
            </Text>
            
            {/* Durum Değiştirme Butonu (Yapıldı/Yapılmadı) */}
            <TouchableOpacity 
              style={[styles.statusButton, item.done === 1 ? styles.statusDone : styles.statusNotDone]} 
              onPress={() => toggleTodoStatus(item.id, item.done)}
            >
              <Text style={styles.statusButtonText}>
                {item.done === 1 ? 'Yapılmadı' : 'Yapıldı'}
              </Text>
            </TouchableOpacity>

            {/* Silme Butonu */}
            <TouchableOpacity 
              style={styles.deleteButton} 
              onPress={() => deleteTodo(item.id)}
            >
              <Text style={styles.deleteButtonText}>Sil</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Alt Bilgi (Footer) */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Toplam Görev Sayısı: {totalTasks}</Text>
      </View>
    </View>
  );
}

// --- STİLLER ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginLeft: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  todoText: {
    fontSize: 18,
    flex: 1,
  },
  todoTextDone: {
    textDecorationLine: 'line-through', // Üstünü çizme stili
    color: '#888',
  },
  statusButton: {
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
  },
  statusDone: {
    backgroundColor: '#f39c12', // Turuncu (Geri al rengi)
  },
  statusNotDone: {
    backgroundColor: '#27ae60', // Yeşil (Tamamla rengi)
  },
  statusButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#e74c3c', // Kırmızı
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    marginBottom:20,
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});