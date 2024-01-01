import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { Sizes, color } from '../../assets/Constant/Constant'
import TurfCard from '../../components/Card/TurfCard'
 

const NearBy = () => {

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
    <View style={{flex:1,flex:1,margin:Sizes.fixPadding}}>
     <ScrollView>
{
    nameTurf.map((item,index)=>{
        return(
            <TurfCard
            img={item.img}
            name={item.name}
            locations={item.location}
            price={item.price}
            timming={item.timming}/>
        )
    })
}
     </ScrollView>
    </View>
  )
}

export default NearBy

const styles = StyleSheet.create({})