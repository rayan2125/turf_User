import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { Sizes, color, witdh } from '../assets/Constant/Constant'



const turf = [
  {
    name: "kings of mira road",
    img: require("../assets/Images/nsd.jpeg")
  },
  {
    name: "kings of mira road",
    img: require("../assets/Images/end.jpeg")
  },
  {
    name: "kings of mira road",
    img: require("../assets/Images/football.jpeg")
  },
  {
    name: "kings of mira road",
    img: require("../assets/Images/ravi.jpeg")
  },
]




const Slider = () => {


  const renderItem = ({ item }) => (
    <View style={{ borderRadius: Sizes.fixPadding, backgroundColor: 'white', flex: 1, width: '100%',gap:10,rowGap:10 }}>
      <Image source={item.img} style={{
        width: 300,
        height: 150,
        resizeMode: "stretch",
        borderRadius: Sizes.fixPadding,
        marginRight: Sizes.fixPadding * 2,
      }} resizeMode='cover' />
      <Text>{item.name}</Text>
    </View>
  );
  return (
    <View style={{ width: witdh,}}>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={turf}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingLeft: Sizes.fixPadding * 2.0 }}
      
      />

    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
  image: {
    width: '100%', // Adjust the image width as needed
    height: '60%'

  },
})