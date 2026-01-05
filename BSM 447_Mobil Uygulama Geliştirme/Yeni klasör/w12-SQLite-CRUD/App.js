import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

let db;

async function openDatabase() {
  db = await SQLite.openDatabaseAsync('example.db');
}

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    const setupDatabase = async () => {
      await openDatabase();
      try {
        await db.execAsync(`
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            title TEXT NOT NULL,
            done INTEGER DEFAULT 0
          );
        `);
        console.log('Tablo başarıyla kontrol edildi/oluşturuldu.');
        fetchTodos();
      } catch (error) {
        console.log('Veritabanı kurulum hatası: ', error);
      }
    };
    setupDatabase();
  }, []);

  const fetchTodos = async () => {
    try {
      const todos = await db.getAllAsync('SELECT * FROM todos');
      setTodos(todos);
      setTotalTasks(todos.length);
    } catch (error) {
      console.log('Veri çekme hatası: ', error);
    }
  };

  const addTodo = async () => {
    if (todo.trim() === '') {
      Alert.alert('Hata', 'Lütfen bir görev girin');
      return;
    }
    try {
      await db.runAsync('INSERT INTO todos (title, done) VALUES (?, 0)', [todo]);
      setTodo('');
      fetchTodos();
    } catch (error) {
      console.log('Veri ekleme hatası: ', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await db.runAsync('DELETE FROM todos WHERE id = ?', [id]);
      fetchTodos();
    } catch (error) {
      console.log('Silme hatası: ', error);
    }
  };

  const toggleTodoStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 0 ? 1 : 0;
    try {
      await db.runAsync('UPDATE todos SET done = ? WHERE id = ?', [newStatus, id]);
      fetchTodos();
    } catch (error) {
      console.log('Durum değiştirme hatası: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SQLite To-Do Listesi</Text>
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
      <FlatList 
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={[styles.todoText, item.done === 1 && styles.todoTextDone]}>
              {item.title}
            </Text>
            <TouchableOpacity 
              style={[styles.statusButton, item.done === 1 ? styles.statusDone : styles.statusNotDone]} 
              onPress={() => toggleTodoStatus(item.id, item.done)}
            >
              <Text style={styles.statusButtonText}>
                {item.done === 1 ? 'Yapılmadı' : 'Yapıldı'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.deleteButton} 
              onPress={() => deleteTodo(item.id)}
            >
              <Text style={styles.deleteButtonText}>Sil</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Toplam Görev Sayısı: {totalTasks}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', paddingTop: 50, paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  inputContainer: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingHorizontal: 10 },
  addButton: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 5, marginLeft: 10 },
  addButtonText: { color: 'white', fontWeight: 'bold' },
  todoItem: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', padding: 20, marginBottom: 10, borderRadius: 10 },
  todoText: { fontSize: 18, flex: 1 },
  todoTextDone: { textDecorationLine: 'line-through', color: '#888' },
  statusButton: { padding: 10, borderRadius: 5, marginRight: 10, alignItems: 'center', justifyContent: 'center', minWidth: 70 },
  statusDone: { backgroundColor: '#f39c12' },
  statusNotDone: { backgroundColor: '#27ae60' },
  statusButtonText: { color: 'white', fontWeight: 'bold' },
  deleteButton: { backgroundColor: '#e74c3c', padding: 10, borderRadius: 5 },
  deleteButtonText: { color: 'white', fontWeight: 'bold' },
  footer: { padding: 20, backgroundColor: '#e0e0e0', alignItems: 'center', marginBottom: 20, justifyContent: 'center' },
  footerText: { fontSize: 18, fontWeight: 'bold' },
});