import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"

const Header = ({titile, back,iconName}) => {
  return (
    <View style={{backgroundColor:'red', height:50, justifyContent:"space-between", alignItems:'center',flexDirection:'row',width:'100%'}}>
      <TouchableOpacity style={{marginHorizontal:20}} onPress={back}>

      <Icon name={iconName} size={20} color="white"/>
      </TouchableOpacity>
      <Text style={{width:"60%",color:"white"}}>{titile}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})