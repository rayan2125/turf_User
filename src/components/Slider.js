import { StyleSheet, Text, View,Image, FlatList} from 'react-native'
import React from 'react'
import { Sizes, color, witdh } from '../assets/Constant/Constant'



const turf =[
    {
        name:"kings of mira road",
        img:require("../assets/Images/nsd.jpeg")
    },
    {
      name:"kings of mira road",
      img:require("../assets/Images/end.jpeg")
  },
    {
      name:"kings of mira road",
      img:require("../assets/Images/football.jpeg")
  },
    {
      name:"kings of mira road",
      img:require("../assets/Images/ravi.jpeg")
  },
]




const Slider = () => {


  const renderItem = ({ item }) => (
    <View style={{borderRadius:Sizes.fixPadding ,backgroundColor:'white',flex:1,width:'100%',}}>
      <Image source={item.img} style={styles.image} resizeMode='cover'/>
      <Text>{item.name}</Text>
    </View>
  );
  return (
    <View style={{width:witdh,}}>
       <FlatList
       horizontal
       showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
        data={turf}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        style={{width:witdh,margin:10}}
      />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
  image: {
    width: '100%', // Adjust the image width as needed
    height:'60%' 
  
  },
})