import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      
      <Text style={styles.baseText}>Merhaba React Native!</Text>
      
      <Text>{"\n"}</Text>
      
      <Text style={styles.innerText}>Merhaba React Native!</Text>

      <Text style={{fontWeight: 'bold'}}>
        {"\n"}I am bold
        <Text style={{color: 'red'}}> and red</Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dadada',
    alignItems: 'center',
    justifyContent: 'center',
  },

  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'blue',
  },

});
