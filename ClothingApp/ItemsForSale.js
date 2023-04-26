import { StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function ItemsForSale(){
    
    const Selling = [
        {key: '001', article: 'Green American Eagle Sweater', size: 'small', price: 4},
        {key: '002', article: 'Pink Free People Dress', size: 'large', price: 30},
        {key: '003', article: 'New Balance', size: '7.5', price: 79.99},
        // {key: '004', article: 'Previous Posts', size: 'large', price: '$30'}
      ];

      // const [hungry, setHungry] = useState("I am hungry, please feed me");
      const [addToCart, addedToCart] = useState(false);
   
  return (
    <View style={styles.container}>
      <FlatList
        data={Selling}
        renderItem={({item}) =>    
        <TouchableOpacity onPress={console.log("Pressed")}>    
        <View style={styles.border}>
        <Text style={styles.item}>{item.article}</Text>  
        <Text style={styles.item}>{item.size}</Text>
        <Text style={styles.item}>{item.price}</Text> 
        <Button title="Add to cart" disabled={addedToCart} 
        onPress={()=> {
          // addToCart("Added!");
          addedToCart(true);
      }}/>
        </View>
        </TouchableOpacity>
        }
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 50
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44
    },
    border: {
      borderWidth: 1,
      sborderColor: 'gray'
    }
  });  
 
