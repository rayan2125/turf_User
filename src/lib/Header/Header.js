import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({titile}) => {
  return (
    <View style={{backgroundColor:'red', height:50, justifyContent:'center', alignItems:'center'}}>
      <Text>{titile}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})