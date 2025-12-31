import {View, Text} from 'react-native';

export default function App() {
  return(
        <View>

            <Text style={{padding: 10}}> alignItems strech </Text>
            <View style={{ alignItems:'strech', backgroundColor:'whitesmoke' }}>
                  <View style={ { width:50, height:50, backgroundColor:'powderblue' } } />
                  <View style={ { width:50, height:50,  backgroundColor:'skyblue' } } />
                  <View style={ { width:50, height:50, backgroundColor:'steelblue' } } />
            </View>

            <Text style={{padding: 10, marginTop:10}}> alignItems flex-start </Text>
            <View style={{ alignItems:'flex-start', backgroundColor:'whitesmoke' }}>
                  <View style={ { width:50, height:50, backgroundColor:'powderblue' } } />
                  <View style={ { width:50, height:50,  backgroundColor:'skyblue' } } />
                  <View style={ { width:50, height:50, backgroundColor:'steelblue' } } />
            </View>

            <Text style={{padding: 10, marginTop:10}}> center </Text>
            <View style={{ alignItems:'center', backgroundColor:'whitesmoke' }}>
                  <View style={ { width:50, height:50, backgroundColor:'powderblue' } } />
                  <View style={ { width:50, height:50,  backgroundColor:'skyblue' } } />
                  <View style={ { width:50, height:50, backgroundColor:'steelblue' } } />
            </View>

            <Text style={{padding: 10, marginTop:10}}> alignItems flex-end </Text>
            <View style={{ alignItems:'flex-end', backgroundColor:'whitesmoke' }}>
                  <View style={ { width:50, height:50, backgroundColor:'powderblue' } } />
                  <View style={ { width:50, height:50,  backgroundColor:'skyblue' } } />
                  <View style={ { width:50, height:50, backgroundColor:'steelblue' } } />
            </View>

        </View>

  );
}

