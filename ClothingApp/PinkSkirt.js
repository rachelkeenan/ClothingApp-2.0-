import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const PinkSkirt = () => {
  const item = {
    name: 'American Eagle Skirt',
    image: 'https://s7d2.scene7.com/is/image/aeo/0313_4290_615_f?$cat-main_large$&fmt=jpeg&defaultImage=0313_4290_615_f',
    price: 12.99,
    size: 'M',
    description: 'Light pink, floral skirt, only worn once.',
    status: 'For Sale',
    location: 'PinkSkirt'
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
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.size}>SIZE: {item.size}</Text>
      <Text style={styles.description}>{item.description}</Text>
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

export default PinkSkirt;