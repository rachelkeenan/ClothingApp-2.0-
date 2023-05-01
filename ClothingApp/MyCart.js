import { StyleSheet, Text, View, Image, ScrollView, Button, FlatList } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView,TouchableOpacity } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const items = [
  {
    id: 1,
    name: 'Lulu Lemon Leggings',
    picture: 'https://images.lululemon.com/is/image/lululemon/LW5EOJS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    price: 53.99,
    size: 'L',
    description: 'Black, Lulu Lemon leggings. Never Used.',
    status: 'For Sale',
    location: 'Leggings'
  },
  {
    id: 2,
    name: 'GraySweatpants',
    picture: 'https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw0e9098ab/product_images/0133600120005NEW_01_006.jpg?sw=1000',
    price: 12.99,
    size: 'XS',
    description: 'Gray sweatpants.',
    status: 'For Sale',
    location: 'GraySweatpants'
  }
];

const MyCart = ( { navigation }) => {
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

export default MyCart;
