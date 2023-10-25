import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Bookinghistory from './History/Bookinghistory'
import Header from '../lib/Header/Header'
import { Sizes, color } from '../assets/Constant/Constant'

const History = () => {
  return (
    <>
    <Header
    titile="History"
    />
    <View style={{margin:Sizes.fixPadding}}>
      <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
        <View style={{backgroundColor:color.Primary,width:'48%',height:40, justifyContent:'center',alignItems:'center', borderRadius:10}}>
          <Text style={{color:'white'}}> Payment</Text>
        </View>
        <View style={{backgroundColor:color.Primary,width:'48%',height:40, justifyContent:'center',alignItems:'center', borderRadius:10}}>
          <Text style={{color:'white'}}> Matches</Text>
        </View>
      </View>
      <Text></Text>
      <Bookinghistory/>

    </View>
    </>
  )
}

export default History

const styles = StyleSheet.create({})