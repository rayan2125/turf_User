import { StyleSheet, Text, View,ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Sizes, color } from '../../assets/Constant/Constant'
import TurfCard from '../../components/Card/TurfCard'
import { useNavigation } from '@react-navigation/native'
 

const NearBy = () => {
const navigation = useNavigation()
    const nameTurf=[
        {
            img:require("../../assets/Images/nsd.jpeg"),
            name:'mari ka turf',
            price:'700/hours',
            timming:"7am-12pm",
            location:"mira road"
        },
        {
            img:require("../../assets/Images/box.jpeg"),
            name:'mari ka turf',
            price:'700/hours',
            timming:"7am-12pm",
            location:"mira road"
        },
        {
            img:require("../../assets/Images/cricket.jpeg"),
            name:'mari ka turf',
            price:'700/hours',
            timming:"7am-12pm",
            location:"mira road"
        },
        {
            img:require("../../assets/Images/end.jpeg"),
            name:'mari ka turf',
            price:'700/hours',
            timming:"7am-12pm",
            location:"mira road"
        },
        {
            img:require("../../assets/Images/football.jpeg"),
            name:'mari ka turf',
            price:'700/hours',
            timming:"7am-12pm",
            location:"mira road"
        },
        {
            img:require("../../assets/Images/ravi.jpeg"),
            name:'mari ka turf',
            price:'700/hours',
            timming:"7am-12pm",
            location:"mira road"
        },
    ]
  return (
    <>
<FlatList
  data={nameTurf}
  renderItem={({ item, index }) => {
   
    return (
      <TurfCard
      key={index}
        img={item.img}
        name={item.name}
        location={item.location} 
        price={item.price}
        timming={item.timming}  
        onPress={()=>navigation.navigate('BookTurf',item)}
      />
    );
  }}
/>

    </>
    


     
  
  )
}

export default NearBy

const styles = StyleSheet.create({})