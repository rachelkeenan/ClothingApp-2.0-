import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const items = [
  {
    id: 1,
    picture: 'https://images.sidearmdev.com/resize?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fvillanova.com%2fimages%2f2022%2f8%2f15%2fAnastasia_Galanou.JPG&width=300&type=jpeg',
    price: 10.99,
    size: 'M',
    description: 'Lorem ipsum dolor sit amet',
    status: 'In Stock'
  },
  {
    id: 2,
    picture: 'https://example.com/item2.jpg',
    price: 15.99,
    size: 'L',
    description: 'Consectetur adipiscing elit',
    status: 'Out of Stock'
  },
  {
    id: 3,
    picture: 'https://example.com/item3.jpg',
    price: 12.99,
    size: 'S',
    description: 'Sed do eiusmod tempor incididunt',
    status: 'In Stock'
  }
];

const MyHistory = () => {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <View key={item.id} style={styles.item}>
          <Image source={{ uri: item.picture }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.size}>{item.size}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        </View>
      ))}
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
