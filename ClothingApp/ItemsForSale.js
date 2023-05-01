import { StyleSheet, Text, View, Image, ScrollView, Button, FlatList } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const items = [
  {
    id: 1,
    name: 'Navy Villanova Hat',
    picture: 'https://media.rallyhouse.com/homepage/4803133-1.jpg?tx=f_auto,c_fit,w_730,h_730',
    price: 15.99,
    size: 'N/A',
    description: 'Navy blue hat with Villanova "V" on the front.',
    status: 'For Sale',
    location: 'Hat'
  },
  {
    id: 2,
    name: 'Light Blue Madewell Jeans',
    picture: 'https://www.madewell.com/images/NJ180_DM6913_ld?wid=1080&hei=1372&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0',
    price: 89.99,
    size: '25',
    description: 'Straight leg light blue jeans.',
    status: 'For Sale',
    location: 'Blue Jeans'
  },
  {
    id: 3,
    name: 'American Eagle Skirt',
    picture: 'https://s7d2.scene7.com/is/image/aeo/0313_4290_615_f?$cat-main_large$&fmt=jpeg&defaultImage=0313_4290_615_f',
    price: 12.99,
    size: 'M',
    description: 'Light pink, floral skirt, only worn once.',
    status: 'For Sale',
    location: 'PinkSkirt'
  },
  {
    id: 4,
    name: 'Villanova Hoodie',
    picture: 'https://www-cdn.champion.com/catalog/product/H/N/HNS_CS30515868DA/HNS_CS30515868DA_MarineMidnightNavy_Front.jpg?optimize=high&auto=webp&quality=90&fit=cover&width=1024',
    price: 39.99,
    size: 'M',
    description: 'Navy blue hoodie with white embroidered "Villanova" on the front. Made by Champion',
    status: 'For Sale',
    location: 'Hoodie'
  },
  {
    id: 5,
    name: 'Floral Dress',
    picture: 'https://img.abercrombie.com/is/image/anf/KIC_159-2878-4366-206_prod1?policy=product-large',
    price: 39.99,
    size: 'XS',
    description: 'Long white and blue spring dress from Abercrombie.',
    status: 'For Sale',
    location: 'Floral Dress'
  }
];

const ItemsForSale = ( { navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text></Text>
        <Text style={styles.heading}>VILLANOVA UNIVERSITY</Text>
        <Text></Text>
        <Text style={styles.subheading}>Items For Sale</Text>
        <Text></Text>
      {items.map(item => (
        <TouchableOpacity onPress={() => navigation.navigate(item.location)}>   
        <View key={item.id} style={styles.item}>
          <Image source={{ uri: item.picture }} style={styles.image} />
          <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.size}>SIZE:  {item.size}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.status}>                  Status: {item.status}</Text>
          </View>
        </View>
        </TouchableOpacity> 
      ))}
    </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'

  },
  heading:{
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#00205B'
  },
  subheading:{
    fontSize: 30,
    textAlign: 'center',
    color: '#00205B'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor:'white',
    justifyContent: 'flex-end'
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderColor:'#13B5EA',
    borderWidth:'2'
  },
  details: {
    flex: 1
  },
  name: {
    fontSize: 20,
    fontWeight:'bold',
    color:'#00205B'
  },
  price: {
    fontWeight: 'bold',
    color: '#00205B'
  },
  size: {
    marginTop: 5
  },
  description: {
    marginTop: 5
  },
  status: {
    marginTop: 5,
    color: '#888',
    textAlign:'right'
  }
});

export default ItemsForSale;
