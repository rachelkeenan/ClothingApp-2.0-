
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function PostAnItem({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraType = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: true };
        const photo = await cameraRef.current.takePictureAsync({ options, aspect: [1, 1] });
        setCapturedPhoto(photo);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleSavePicture = async () => {
    if (capturedPhoto) {
      navigation.navigate('ItemInfo', { capturedPhoto });
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>VILLANOVA UNIVERSITY</Text>
        <Text></Text>
        <Text style={styles.subheading}>Take a picture of your item:</Text>
        <Text></Text>
      <TouchableOpacity style={styles.savebutton} onPress={handleSavePicture}>
            <Text style={styles.text}>Add Information</Text>
          </TouchableOpacity>
      <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCameraType}>
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleTakePicture}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {capturedPhoto && (
        <View style={styles.preview}>
          <Image source={{ uri: capturedPhoto.uri }} style={styles.previewImage} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  button: {
    flex: 0.3,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  savebutton: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,

  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  preview: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  previewImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  }
});
   
