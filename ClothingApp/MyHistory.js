import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';

const items = [
  {
    id: 1,
    name: 'Aritzia Gold Dress',
    picture: 'https://images.sidearmdev.com/resize?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fvillanova.com%2fimages%2f2022%2f8%2f15%2fAnastasia_Galanou.JPG&width=300&type=jpeg',
    price: 49.99,
    size: 'S',
    description: 'Satin gold mini dress with adjustable spagetti straps',
    status: 'Sold'
  },
  {
    id: 2,
    name: 'Light Blue Madewell Jeans',
    picture: 'https://example.com/item2.jpg',
    price: 89.99,
    size: '25',
    description: 'Straight leg light blue jeans.',
    status: 'For Sale'
  },
  {
    id: 3,
    name: 'New Balance Sneakers',
    picture: 'https://example.com/item3.jpg',
    price: 79.99,
    size: '7.5',
    description: 'Dark grey New Balance sneakers, never been worn!',
    status: 'Sold'
  },
  {
    id: 4,
    name: 'Villanova Hoodie',
    picture: 'https://example.com/item3.jpg',
    price: 39.99,
    size: 'M',
    description: 'Navy blue hoodie with white embroidered "Villanova" on the front. Made by Champion',
    status: 'For Sale'
  },
  {
    id: 5,
    name: 'Floral Dress',
    picture: 'https://example.com/item3.jpg',
    price: 39.99,
    size: 'xS',
    description: 'Long white and blue spring dress from Abercrombie.',
    status: 'For Sale'
  }
];

const MyHistory = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      {items.map(item => (
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
      ))}
    </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  details: {
    flex: 1
  },
  name: {
    fontSize: 30
  },
  price: {
    fontWeight: 'bold'
  },
  size: {
    marginTop: 5
  },
  description: {
    marginTop: 5
  },
  status: {
    marginTop: 5,
    color: '#888'
  }
});

export default MyHistory;
