import {Text, View, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
          Merhaba Dünya!
      </Text>
      <Text> {"\n"} </Text>
      <Text style={styles.innerText}>
          Merhaba Dünya!
      </Text>
      <Text> {"\n"} </Text>
      <Text style={[styles.baseText, styles.innerText]}> 
        Merhaba Dünya!
      </Text>
      <Text> {"\n"} </Text>
      <Text style={ { fontSize:40, color: 'yellow', fontStyle:'italic' } }>
        Merhaba Dünya!
      </Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f00',
    justifyContent:'center',
    alignItems:'center'
  },
  baseText:{
    fontWeight:'bold',
    fontSize:30,
    color:'#fff'
  },
  innerText:{
    color:'blue',
  }
});