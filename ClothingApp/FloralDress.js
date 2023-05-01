import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const FloralDress = () => {
  const item = {
    name: 'Floral Dress',
    image: 'https://img.abercrombie.com/is/image/anf/KIC_159-2878-4366-206_prod1?policy=product-large',
    price: 39.99,
    size: 'xS',
    description: 'Long white and blue spring dress from Abercrombie.',
    status: 'For Sale',
    location: 'Floral Dress'
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
export default FloralDress;
