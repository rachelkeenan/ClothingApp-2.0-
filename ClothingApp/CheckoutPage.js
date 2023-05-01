import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Input, Button, Text, ListItem } from 'react-native-elements';
import { CreditCardInput } from 'react-native-credit-card-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const products = [
  {
    id: 1,
    name: 'Lulu Lemon Leggings',
    price: 53.99,
  },
  {
    id: 2,
    name: 'Gray Sweatpants',
    price: 12.99,
  },
];

const CheckoutPage = ( { navigation }) => {
  const [street, setStreet] = useState('');
  const [state, setState] = useState('');
  const [zip, setZIP] = useState('');
  const [cardData, setCardData] = useState({});
  const [totalCost, setTotalCost] = useState(0);

  const handleStreetChange = (text) => {
    setStreet(text);
  };
  const handleStateChange = (text) => {
    setState(text);
  };
  const handleZIPChange = (text) => {
    setZIP(text);
  };

  const handleCardChange = (formData) => {
    setCardData(formData);
  };

  const calculateTotalCost = () => {
    const sum = products.reduce((total, product) => {
      return total + product.price;
    }, 0);

    setTotalCost(sum);
  };

  const handleCheckout = () => {
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
    </TouchableOpacity>
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Text style={styles.heading}>VILLANOVA UNIVERSITY</Text>
        <Text></Text>
        <Text style={styles.subheading}>Check out Information</Text>
        <Text></Text>
      <View style={styles.productListContainer}>
        {products.map((product) => (
          <ListItem key={product.id} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{product.name}</ListItem.Title>
            </ListItem.Content>
            <Text>${product.price}</Text>
          </ListItem>
        ))}
      </View>
      <View style={styles.totalCostContainer}>
        <Text h4>Total: ${totalCost}</Text>
      </View>
      <View style={styles.formContainer}>
      <Text style={styles.subheadings}>Delivery Address</Text>
        <Input
          placeholder="Street Adress"
          onChangeText={handleStreetChange}
          value={street}
        />
        <Input
          placeholder="State"
          onChangeText={handleStateChange}
          value={state}
        />
        <Input
          placeholder="ZIP code"
          onChangeText={handleZIPChange}
          value={zip}
        />
        <CreditCardInput onChange={handleCardChange} />
        <Button
          title="Calculate Total"
          onPress={calculateTotalCost}
          buttonStyle={styles.calculateTotalButton}
        />
        <Button buttonStyle={styles.checkoutButton} 
          title="Checkout" 
          onPress={() => navigation.navigate('Home')}/>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading:{
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#00205B',
    padding:0,
  },
  subheading:{
    fontSize: 30,
    textAlign: 'center',
    color: '#00205B',
    marginBottom: 10,
  },
  subheadings:{
    fontSize: 20,
    color: '#00205B',
    fontWeight: 'bold',
    marginBottom:20,
  },
  productListContainer: {
    marginBottom: 20,
  },
  totalCostContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
    color: '#00205B',
  },
  formContainer: {
    flex: 1,
  },
  calculateTotalButton: {
    marginVertical: 10,
    backgroundColor: '#00205B',
  },
  checkoutButton: {
    marginVertical: 10,
    backgroundColor: '#00205B',
    marginBottom:100
  },
});

export default CheckoutPage;
