import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function Home( { navigation }) {
    //dataSource contains the data we want rendered as a list
    //the dataSource should contain a unique key for each item in the array

    const dataSource = [
        {key: '001', tab: 'Items for Sale', location: 'Items For Sale'},
        {key: '002', tab: 'Post an Item', location: 'Post an Item'},
        {key: '003', tab: 'My Cart', location: 'My Cart'},
        {key: '004', tab: 'Previous Posts', location: 'My History'}
      ];
    
        //const [tab, setTab] = useState(dataSource);

      //the renderItem prop takes a function. The function has a parameter which
      //is an item in the data source. Place the item in a component to display the item.
  return (
    <View style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={({item}) =>    
        <TouchableOpacity onPress={() => navigation.navigate(item.location)}>    
        <View style={styles.border}>
        <Text style={styles.item}>{item.tab}</Text>   
        <Text style={styles.item}>{item.description}</Text>  
        </View> 
        </TouchableOpacity> 
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 50
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44
    },
    border: {
      borderWidth: 1,
      sborderColor: 'gray'
    }
  });  
