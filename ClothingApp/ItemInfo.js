import { View, Text, TextInput, Button, Image, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';


const ItemInfo = ( { route, navigation }) => {
  const [picture, setPicture] = useState('');
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('For Sale');
  const [location, setLocation] = useState('');
  const [id, setID] = useState('10');
  const { capturedPhoto } = route.params;

  const handleSubmit = () => {
    // Here you can implement the logic to post the item to a server or store it locally
    console.log({ name, picture, size, price, description, caption });
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text></Text>
      <Text style={styles.heading}>VILLANOVA UNIVERSITY</Text>
      <Text></Text>
      <Text style={styles.subheading}>Upload New Item</Text>
      <Text></Text>
      <Image source={{ uri: capturedPhoto.uri }} style={styles.image} />
      <Text style={styles.label}>  Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the name of your item"
        onChangeText={setName}
        value={name}
      />
      <Text style={styles.label}>  Price</Text>
      <TextInput
        style={styles.input}
        placeholder="$"
        onChangeText={setPrice}
        value={price}
      />
      <Text style={styles.label}>  Size</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter size of your item"
        onChangeText={setSize}
        value={size}
      />
      <Text style={styles.label}>  Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a description of your item"
        onChangeText={setDescription}
        value={description}
      />
      <Text></Text>
      <Text style={styles.status} >STATUS: For Sale</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.text}>Post Item</Text>
          </TouchableOpacity>
      <Text></Text>
      <Text></Text>
    </View>
    </ScrollView>
  );




};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white'
  },
  heading:{
    fontSize: 45,
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
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 30,
    color: '#00205B'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 5,
    marginBottom: 10
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 0.3,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00205B',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  status: {
    color: 'grey',
    fontSize: 15,
    alignContent:'center'
  }
});

export default ItemInfo;
