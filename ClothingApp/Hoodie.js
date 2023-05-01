import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const Hoodie = () => {
  const item = {
    name: 'Villanova Hoodie',
    image: 'https://www-cdn.champion.com/catalog/product/H/N/HNS_CS30515868DA/HNS_CS30515868DA_MarineMidnightNavy_Front.jpg?optimize=high&auto=webp&quality=90&fit=cover&width=1024',
    price: 39.99,
    size: 'M',
    description: 'Navy blue hoodie with white embroidered "Villanova" on the front. Made by Champion',
    status: 'For Sale',
    location: 'Hoodie'
  };

  const [cart, setCart] = useState(false);
    
  const addToCart = () => {
    setCart(true);
  }


  return (
    <View style={styles.container}>
    <Text></Text>
    <Text style={styles.heading}>VILLANOVA UNIVERSITY</Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
      <Text style={styles.subheading}>{item.name}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
      {/* <Image source={item.image} style={styles.image} /> */}
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.size}>SIZE: {item.size}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text></Text>
      <Text style={styles.status}>STATUS: {item.status}</Text>
      <Text></Text>
      <Button
        title="Add to Cart"
        disabled={cart}
        onPress={() => addToCart()}
      />
      <Text></Text>
      <Text></Text>
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
  image: {
    width: '100%',
    height: 400,
    marginBottom: 20,
    borderWidth:'5',
    borderColor:'#00205B'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  size: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    color:'darkgray'
  },
});

export default Hoodie;
