import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './Home';
import ItemsForSale from './ItemsForSale';
import PostAnItem from './PostAnItem';
import MyCart from './MyCart';
import myHistory from './MyHistory';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //Use the NavigationContainer and the Stack to display your app
    //<Text style={{textAlign: 'center', paddingTop: 300}}>Homework 5</Text>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Items For Sale' component={ItemsForSale} />  
    <Stack.Screen name='Post an Item' component={PostAnItem} />
    <Stack.Screen name='My Cart' component={MyCart} />
    <Stack.Screen name='My History' component={myHistory} />
    </Stack.Navigator>    
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
