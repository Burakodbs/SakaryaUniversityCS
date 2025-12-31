import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { auth, firestore } from '../firebase';

export default function ToDoScreen({ navigation }) {

  const [todo, setTodo] = useState('');
  const [user, setUser] = useState(null);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {

    const currentUser = auth.currentUser;
    
    setUser(currentUser);

    const unsubscribe = firestore.collection('todos')
      .where('userId', '==', currentUser.uid)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const todos = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTodoList(todos);
      });

    return unsubscribe;
  }, []);

  const handleAddTodo = async () => {
    if (todo.trim() === '') return alert('Please enter a ToDo');

    const newTodo = {
      userId: user.uid,
      todo: todo,
      createdAt: new Date(),
      completed: false,
    };

    try {
      await firestore.collection('todos').add(newTodo);
      setTodo('');
    } catch (error) {
      alert(error.message);
    }
  };

  const toggleTodoCompletion = async (id, currentStatus) => {
    try {
      await firestore.collection('todos').doc(id).update({
        completed: !currentStatus
      });
    } catch (error) {
      alert('Failed to update status: ' + error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await firestore.collection('todos').doc(id).delete();
    } catch (error) {
      alert('Failed to delete: ' + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.replace('Login'); // Kullanıcı Login ekranına yönlendirilir
    } catch (error) {
      alert('Failed to logout: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {user?.email}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Listeye yeni öğe ekleyin"
          value={todo}
          onChangeText={setTodo}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todoList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={[styles.todoText, item.completed && styles.completedText]}>
              {item.todo}
            </Text>

            <View style={styles.actionButtons}>
              <TouchableOpacity 
                style={styles.checkButton} 
                onPress={() => toggleTodoCompletion(item.id, item.completed)}
              >
                <Text style={styles.checkText}>{item.completed ? '✅' : '☑️'}</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.deleteButton} 
                onPress={() => deleteTodo(item.id)}
              >
                <Text style={styles.deleteText}>❌</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    marginTop:30,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
  },
  button: {
    height: 50,
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  todoItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkButton: {
    marginHorizontal: 10,
  },
  checkText: {
    fontSize: 18,
  },
  deleteButton: {
    marginHorizontal: 10,
  },
  deleteText: {
    fontSize: 18,
    color: 'red',
  },
  logoutButton: {
    height: 50,
    backgroundColor: '#d9534f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
