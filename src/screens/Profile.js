import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"


const data = [
    {
title:"Turf Booking",
id:"1",

},
    {
title:"My Team",
id:"1",

},
    {
title:"My Matches",
id:"1",

},
    {
title:"new feature",
id:"1",

},
]

const payment =["My payment","recharge","other activity"]
const Profile = ({navigation}) => {
  return (
    <View style={{padding:10,margin:20}}>
    <View style={{flexDirection:'row', alignItems:'center',marginBottom:10}}>
        <View style={{backgroundColor:"white", height:70, width:70, borderRadius:99, justifyContent:'center',alignItems:'center'}}>
            <Text>
                img
            </Text>
           
        </View>
        <View style={{marginHorizontal:6}}>

        <Text style={{marginHorizontal:10, fontSize:20}}>Nikhil Dubey </Text>
           
            <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:10}}>
                <Icon name="home"/>
                <Text> b/307, sai nath bhayander /40017</Text>
            </View>
        </View>
    </View>
      <View style={{backgroundColor:'white', elevation:7,paddingVertical:15,paddingHorizontal:15, borderRadius:15 }}> 
      {
        data.map((item)=>{
            return(
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', gap:10, marginBottom:10, width:'100%'}} onPress={()=>navigation.navigate("Turfbooking")}>

                    <Text style={{fontSize:20 ,width:'80%',marginHorizontal:10}}>{item.title}</Text>
                    <Icon name="greater-than" size={20}/>
                </TouchableOpacity>
            )
        })
      }
      </View>
      <View style={{backgroundColor:'white', elevation:7,paddingVertical:15,paddingHorizontal:15, borderRadius:15,top:30 }}> 
      {
        payment.map((item)=>{
            return(
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', gap:10, marginBottom:10, width:'100%'}}>

                    <Text style={{fontSize:20 ,width:'80%',marginHorizontal:10}}>{item}</Text>
                    <Icon name="greater-than" size={20}/>
                </TouchableOpacity>
            )
        })
      }
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})