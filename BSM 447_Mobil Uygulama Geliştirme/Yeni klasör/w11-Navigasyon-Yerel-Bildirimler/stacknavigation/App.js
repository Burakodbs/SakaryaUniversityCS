import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return(
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text> Ana Sayfa </Text>
      <Button 
        title="Detay Ekranına Git"
        onPress={ () => navigation.navigate('Details') }
      />
    </View>
  );
}

function AltDetayScreen({ navigation }) {
  return(
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text> Alt Detay Ekranı </Text>
      <Button 
        title="Geri Git"
        onPress={ () => navigation.goBack() }
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return(
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text> Detay Sayfası </Text>
      <Button 
        title="Alt Detayllara Git"
        onPress={ () => navigation.navigate('AltDetayScreen') }
      />
    </View>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Ana Sayfa'}} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="AltDetayScreen" component={AltDetayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}













