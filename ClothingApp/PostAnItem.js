import { Text, View, Button, Image, TextInput, StyleSheet,TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { Camera } from 'expo-camera';
import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


 function PostAnItem( { navigation }) {
  //////////
  const [picture, setPicture] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [caption, setCaption] = useState('');

  const handleSubmit = () => {
    // Here you can implement the logic to post the item to a server or store it locally
    console.log({ picture, size, price, description, caption });
  };
  //////////
  const onPress = () => {
    props.navigation.navigate('Home');
  };

  //////////
  //const Stack = createStackNavigator();

  ////////
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
})();
  }, []);
const takePicture = async () => {
    if(camera){
        const data = await camera.takePictureAsync(null)
        setImage(data.uri);
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
   <View style={{ flex: 1}}>
    <Text></Text>
    <Text style={styles.heading}>VILLANOVA UNIVERSITY</Text>
    <Text style={styles.subheading}>Post an Item for Sale</Text>
    <Text></Text>


      <View style={styles.cameraContainer}>
            <Camera 
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio} 
            type={type}
            ratio={'1:1'} />
      </View>
      <Button
            title="Flip Image"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
        </Button>
       <Button title="Take Picture" onPress={() => takePicture()} />
        {image && <Image source={{uri: image}} style={{flex:1}}/>}


        
        

      <View style={styles.imageContainer}>
        {picture ? (
          <Image source={{ uri: picture }} style={styles.image} />
        ) : null}
      </View>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Item Info')}>
      <Button style={styles.button} title="Add information" onPress={() => navigation.navigate('Item Info')}></Button>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.navigate('Item Info')}>
        
        </TouchableOpacity>
          

   </View>
  );
}


const styles = StyleSheet.create({
  cameraContainer: {
      flex: 1,
      flexDirection: 'row',
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
  fixedRatio:{
      flex: 1,
      aspectRatio: 1
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 0
  }
});

export default PostAnItem;