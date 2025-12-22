import {View, Text} from 'react-native';

export default function App() {
      const boyut = 50; // Sabit genişlik değeri atadık

  return(
        <View>

            <Text style={{padding: 10}}> flex-start </Text>
            <View style={{ flexDirection:'row', justifyContent:'flex-start',alignItems:'stretch', backgroundColor:'whitesmoke' }}>
                  <View style={ { width:boyut, height:50, backgroundColor:'powderblue' } } />
                  <View style={ { width:boyut, height:50,  backgroundColor:'skyblue' } } />
                  <View style={ { width:boyut, height:50, backgroundColor:'steelblue' } } />
            </View>

            <Text style={{padding: 10, marginTop:10}}> center </Text>
            <View style={{ flexDirection:'row', justifyContent:'space-around', backgroundColor:'whitesmoke', alignItems:'center' }}>
                  <View style={ { width:50, height:50, backgroundColor:'powderblue' } } />
                  <View style={ { width:50, height:50,  backgroundColor:'skyblue' } } />
                  <View style={ { width:50, height:50, backgroundColor:'steelblue' } } />
            </View>

        </View>

  );
}

