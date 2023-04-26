import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

export default function MyHistory() {
  const [items, setItems] = useState([
    {
      id: '1',
      name: 'Villanova Hoodie',
      size: 'Medium',
      image: require('./assets/item1.jpg'),
      price: 49.99,
      description: 'decscription',
      caption: 'Sold'
    },
    {
      id: '2',
      name: 'Aritzia Gold Dress',
      size: 'Small',
      image: require('./assets/item2.jpg'),
      price: 59.99,
      description: 'description',
      caption: 'Click to view details'
    },
    {
      id: '3',
      name: 'New Balance',
      size: '7.5',
      image: require('./assets/item3.jpg'),
      price: 79.99,
      description: 'This is item 3',
      caption: 'Click to view details'
    },
    {
      id: '4',
      name: 'Item 4',
      size: 'Small',
      image: require('./assets/item4.jpg'),
      price: 49.99,
      description: 'This is item 4',
      caption: 'Click to view details'
    },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemSize}>{item.size}</Text>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemCaption}>{item.caption}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  itemImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  itemSize: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  itemDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  itemCaption: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});
