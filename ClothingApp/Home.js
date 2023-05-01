import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

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
        {key: '004', tab: 'My History', location: 'My History'}
      ];
    
        //const [tab, setTab] = useState(dataSource);

      //the renderItem prop takes a function. The function has a parameter which
      //is an item in the data source. Place the item in a component to display the item.
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>VILLANOVA  UNIVERSITY</Text>
      <Text style={styles.subheading}>Online Store</Text>
      <Text></Text>
      <Image style={styles.image} source={{uri:'https://money-assets.money.com/mcp/2020/profile/216597.jpg'}}></Image>
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
      <View style={styles.footerContainer}>
      <Image style={styles.logo} source={{uri:'https://teamcolorcodes.com/wp-content/uploads/2017/11/Villanova-Wildcats-Logo-JPG.jpg'}} />
      <View style={styles.contactInfoContainer}>
        <Text style={styles.contactInfoText}>800E Lancaster Ave</Text>
        <Text style={styles.contactInfoText}>(484) 619-1234</Text>
        <Text style={styles.contactInfoText}>onlinestore@villanova.edu</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 0,
     backgroundColor: 'white'
    },
    heading:{
      fontSize: 35,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      backgroundColor: '#00205B',
      paddingVertical:20
    },
    subheading:{
      fontSize: 40,
      textAlign: 'center',
      color: '#00205B'
    },
    item: {
      alignItems: 'center',
      padding: 5,
      backgroundColor: '#00205B',
      color: 'white',
      fontSize: 30,
      textAlign: 'center'
    },
    border: {
      borderWidth: 1,
      sborderColor: 'white',
    },
    image: {
      width: '100%',
      height: 200,
      alignSelf: 'center'
    },
    footerContainer: {
      backgroundColor: '#fff',
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      width: 100,
      height: 90,
    },
    contactInfoContainer: {
      alignItems: 'flex-end',
    },
    contactInfoText: {
      fontSize: 12,
      lineHeight: 18,
      marginBottom: 5,
      color: '#333',
    }
  });  

