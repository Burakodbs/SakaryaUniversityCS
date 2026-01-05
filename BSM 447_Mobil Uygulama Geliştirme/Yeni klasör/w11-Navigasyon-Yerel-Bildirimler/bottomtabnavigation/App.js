import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeScreen( ) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text> Ana Ekran </Text>
    </View>
  );
}

function SettingsScreen( ) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text> Ayarlar Ekranı </Text>
    </View>
  );
}

export default function BottomTabNavigationApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon:({focused, color, size}) => {
            let iconName;
            if(route.name === 'Ana Sayfa') {
              iconName = focused ? 'home':'home-outline';
            } else if (route.name === 'Ayarlar') {
              iconName = focused ? 'settings':'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })
        }
      >
        <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
        <Tab.Screen name="Ayarlar" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}












