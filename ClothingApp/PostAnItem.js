import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function PostItem() {
  const [picture, setPicture] = useState(null);
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [caption, setCaption] = useState('');

  const handlePost = () => {
    // code to post item data to server or do something with it
    console.log({
      picture,
      size,
      price,
      description,
      caption
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Picture</Text>
      <Image source={{ uri: picture }} style={styles.image} />
      <Button title="Choose Picture" onPress={() => { /* code to choose picture */ }} />
      <Text style={styles.label}>Size</Text>
      <TextInput style={styles.input} value={size} onChangeText={setSize} />
      <Text style={styles.label}>Price</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} />
      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />
      <Text style={styles.label}>Caption</Text>
      <TextInput style={styles.input} value={caption} onChangeText={setCaption} />
      <Button title="Post Item" onPress={handlePost} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
    label: {
      fontSize: 16
    }
  });