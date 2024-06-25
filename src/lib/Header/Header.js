import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
import { color } from '../../assets/Constant/Constant'
import { useNavigation } from '@react-navigation/native'

const Header = ({titile, back,iconName}) => {
  const navigation = useNavigation()
  const handleBack =()=>{
    navigation.pop()
  }
  return (
    <View style={{backgroundColor:color.Primary, height:50, justifyContent:"space-between", alignItems:'center',flexDirection:'row',width:'100%'}}>
      <TouchableOpacity style={{marginHorizontal:20}} onPress={handleBack}>

      <Icon name={iconName} size={20} color="white"/>
      </TouchableOpacity>
      <Text style={{width:"60%",color:"white"}}>{titile}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})