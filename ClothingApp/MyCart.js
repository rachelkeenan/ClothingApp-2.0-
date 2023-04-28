import { View, Text, TextInput, Button, Image, StyleSheet,TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';



//////


const PostItem = () => {
  const [picture, setPicture] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [caption, setCaption] = useState('');

  const handleSubmit = () => {
    // Here you can implement the logic to post the item to a server or store it locally
    console.log({ picture, size, price, description, caption });
  };

  return (
    <View style={styles.container}>
      <Text></Text>
      <Text style={styles.heading}>VILLANOVA UNIVERSITY</Text>
      <Text></Text>
      <Text style={styles.subheading}>Upload New Item</Text>
      <Text></Text>
      <Button
      onPress={iOS()}
      onChange={iOS()}
      title="Take Picture"
      onChangeText={setPicture}
      value={picture}
    />
      
      <Text style={styles.label}>  Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the name of your item"
        onChangeText={setSize}
        value={size}
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
        onChangeText={setDescription}
        value={size}
      />
      <Text style={styles.label}>  Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a description of your item"
        onChangeText={setCaption}
        value={description}
      />
      <View style={styles.imageContainer}>
        {picture ? (
          <Image source={{ uri: picture }} style={styles.image} />
        ) : null}
      </View>
      <Button style={styles.button} title="Post Item" onPress={handleSubmit} />
    </View>
  );


///////

function iOS() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={takePicture}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Snap </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}


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
    fontSize: 30
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
    resizeMode: 'cover'
  }
});

export default PostItem;
