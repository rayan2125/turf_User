import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { Sizes } from '../../assets/Constant/Constant'

const TextI = ({title}) => {
  return (
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',marginBottom:Sizes.fixPadding}}>
      <Text>{title}</Text>
      <TextInput mode='outlined' 
      style={{width:'70%'}}
      />
    </View>
  )
}

export default TextI

const styles = StyleSheet.create({})