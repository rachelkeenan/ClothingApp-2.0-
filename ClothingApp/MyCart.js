import { View, Text, TextInput, Button, Image, StyleSheet,TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';

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
      <Text style={styles.heading}>Upload New Item</Text>
      <Text style={styles.label}></Text>
      <Button 
      style = {styles.button}
      onPress={iOS()}
      title="Take Picture"
    />
        {/* style={styles.input}
        placeholder="Take Pic"
        onChangeText={setPicture}
        onChange={iOS()}
        value={picture}
      /> */}
      <Text style={styles.label}>Size</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the size of the item"
        onChangeText={setSize}
        value={size}
      />
      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the price of the item"
        onChangeText={setPrice}
        value={price}
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a description of the item"
        onChangeText={setDescription}
        value={description}
      />
      <Text style={styles.label}>Caption</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a caption for the item"
        onChangeText={setCaption}
        value={caption}
      />
      <View style={styles.imageContainer}>
        {picture ? (
          <Image source={{ uri: picture }} style={styles.image} />
        ) : null}
      </View>
      <Button style={styles.button} title="Post Item" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 30
  },
  heading: {
    fontSize:50,
    fontWeight: 'bold',
    marginTop: 10
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
  button: {
    backgroundColor:'black',
    fontSize:100
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover'
  }
});

export default PostItem;
