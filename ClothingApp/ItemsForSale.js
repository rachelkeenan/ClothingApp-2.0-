import { StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native';

export default function ItemsForSale(){
    //dataSource contains the data we want rendered as a list
    //the dataSource should contain a unique key for each item in the array
 
    const dataSource = [
        {key: '001', tab: 'Items for Sale', description: 'friend'},
        {key: '002', tab: 'Post an Item', description: 'friend'},
        {key: '003', tab: 'My Cart'},
        {key: '004', tab: 'Previous Posts'}
      ];
   
      //the renderItem prop takes a function. The function has a parameter which
      //is an item in the data source. Place the item in a component to display the item.
  return (
    <View style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={({item}) =>    
        <TouchableOpacity onPress={console.log("Pressed")}>    
        <View style={styles.border}>
        <Text style={styles.item}>{item.tab}</Text>  
        <Text style={styles.item}>{item.description}</Text>  
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
 
