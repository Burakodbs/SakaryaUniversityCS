import {Text, View ,StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      
      <Text style={styles.baseText}>Hello World</Text>
      <Text style={styles.baseText}>{"/n"}</Text>
      <Text style={styles.innerText}>Merhaba Dünya</Text>
      <Text style={{
        fontSize : 40,
        color : 'yellow',
        fontWeight : 'bold'
      }}>Hello World</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseText: {
    fontweight: 'bold',
    fontSize: 30,
    color: '#fff',
  },
  innerText: {
    color: 'blue',
  }
});
