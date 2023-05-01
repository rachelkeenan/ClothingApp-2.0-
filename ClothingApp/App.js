import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './Home';
import ItemsForSale from './ItemsForSale';
import PostAnItem from './PostAnItem';
import MyCart from './MyCart';
import MyHistory from './MyHistory';
import BlueJeans from './BlueJeans';
import GoldDress from './GoldDress';
import Sneakers from './Sneakers';
import Hoodie from './Hoodie';
import ItemInfo from './ItemInfo';
import Hat from './Hat';
import PinkSkirt from './PinkSkirt';
import Leggings from './Leggings';
import GraySweatpants from './GraySweatpants';
import FloralDress from './FloralDress';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckoutPage from './CheckoutPage';


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
    <Stack.Screen name='My History' component={MyHistory} />
    <Stack.Screen name='Blue Jeans' component={BlueJeans} />
    <Stack.Screen name='Gold Dress' component={GoldDress} />
    <Stack.Screen name='Sneakers' component={Sneakers} />
    <Stack.Screen name='Hoodie' component={Hoodie} />
    <Stack.Screen name='Floral Dress' component={FloralDress} />
    <Stack.Screen name='ItemInfo' component={ItemInfo} />

    <Stack.Screen name='Hat' component={Hat} />
    <Stack.Screen name='PinkSkirt' component={PinkSkirt} />
    <Stack.Screen name='Leggings' component={Leggings} />
    <Stack.Screen name='GraySweatpants' component={GraySweatpants} />
    <Stack.Screen name='CheckoutPage' component={CheckoutPage} />

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
