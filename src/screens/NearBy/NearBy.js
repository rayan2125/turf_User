import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { Sizes, color } from '../../assets/Constant/Constant'
import TurfCard from '../../components/Card/TurfCard'
 

const NearBy = () => {

    const nameTurf=[
        {
            name:'mari ka turf',
            price:'700/hours',
            timming:"7am-12pm",
            location:"mira road"
        },
        {
            name:'mari ka turf',
            price:'700/hours',
            timming:"7am-12pm",
            location:"mira road"
        },
        {
            name:'mari ka turf',
            price:'700/hours',
            timming:"7am-12pm",
            location:"mira road"
        },
        {
            name:'mari ka turf',
            price:'700/hours',
            timming:"7am-12pm",
            location:"mira road"
        },
        {
            name:'mari ka turf',
            price:'700/hours',
            timming:"7am-12pm",
            location:"mira road"
        },
        {
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