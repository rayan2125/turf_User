import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../lib/Header/Header'
import { Sizes } from '../../assets/Constant/Constant'

const BookTurf = ({navigation}) => {
    const handleback=()=>{
        navigation.navigate("Home")
    }
  return (
    <>
    <Header
    titile='BooK Turf'
    back={handleback}
    iconName="arrow-left"/>
    <View style={{flex:1,margin:Sizes.fixPadding}}>
        <Text>Date</Text>
      <Text>Turf Name</Text>
      <Text>Timing</Text>
      <Text>Price</Text>
      <Text>Timing</Text>
      <TouchableOpacity>
<Text>
    Book now
</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default BookTurf

const styles = StyleSheet.create({})