import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Header from '../../lib/Header/Header'



const data=[
    {name:'mari and boys ',
    timing:"10am",
    price:"700",
    date:'30-10-2023'


},

{name:'mari and boys ',
    timing:"10am",
    price:"700",
    date:'30-10-2023'


},
{name:'mari and boys ',
    timing:"10am",
    price:"700",
    date:'30-10-2023'


},
{name:'virat turf',
    timing:"1am",
    price:"700",
    date:'4-10-2023'


},
{name:'nikhil turf ',
    timing:"10am",
    price:"1000",
    date:'10-10-2023'


},
{name:'ravi turf ',
    timing:"5pm",
    price:"800",
    date:'25-10-2023'


},
{name:'nikki sports club',
    timing:"10am",
    price:"1400",
    date:'3-10-2023'


},
{name:'nikhil the club',
    timing:"8am",
    price:"500",
    date:'7-10-2023'


},
{name:'mari and boys ',
    timing:"10am",
    price:"700",
    date:'30-10-2023'


},
]
const Turfbooking = () => {
  return (

    <>
<Header
titile="My Booking"
/>
    <View style={{padding:10}}>
        <ScrollView>

        {
        data.map((item, index)=>{
            return(
                <View style={{backgroundColor:'white', marginBottom:10,
                elevation:7,zIndex:99, paddingHorizontal:15,
                 paddingVertical:15,
                 borderRadius:15, position:'relative'}}>

      <Text>{item.name}</Text>
      <Text>Timming:{item.date}</Text>
      <Text>price:{item.price}</Text>
      <Text>price:{item.price}</Text>
      <View style={{position:'absolute',right:5, bottom:5}}>
        <Text style={{color:'green'}}>30mins only</Text>
      </View>
        </View>
            )
        })
        }
        </ScrollView>
        
    </View>
    </>
  )
}

export default Turfbooking

const styles = StyleSheet.create({})