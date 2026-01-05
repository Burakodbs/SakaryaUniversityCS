import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Feed( { navigation } ) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text> Haber Akışı </Text>
      <Button
        title="Menüyü Aç"
        onPress={ () => navigation.openDrawer() }
      />
    </View>
  );
}

function Article(  ) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text> Makale İçeriği </Text>
    </View>
  );
}

export default function DrawerNavigationApp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Feed">
        <Drawer.Screen name="Feed" component={Feed} options={{ title:'HABERLER' }} />
        <Drawer.Screen name="Article" component={Article}  options={{ title:'MAKALELER' }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}












