import {Text, View, StyleSheet} from 'react-native';

export default function App01(){
  return (
    <View style={style.container}>
      <Text style={style.baseText}>
        Merhaba Dünya!
      </Text>
      <Text> {"\n"} </Text>
      <Text style={style.innerText}>
        Merhaba Dünya!
      </Text>
      <Text>{"\n"}</Text>
      <Text style={ [ style.baseText, style.innerText ] }>
        Merhaba Dünya!
      </Text>

      <Text style={ {color:"yellow", fontSize:40, fontStyle:'italic' } }>
        Merhaba Dünya!
      </Text>

    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#71c2e5ff'
  },
  baseText:{
    fontWeight:'bold',
    fontSize:30,
    color:'red'
  },
  innerText:{
    color:'blue'
  }
});