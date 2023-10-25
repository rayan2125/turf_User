import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '../components/Slider'
import { Sizes } from '../assets/Constant/Constant'
import NearBy from './NearBy/NearBy'

const Home = () => {
  return (
<<<<<<< HEAD
    <View style={{margin:Sizes.fixPadding,flex:1,}}>
      <View style={{width:'100%', borderColor:'black', borderWidth:1,height:30,borderRadius:15,justifyContent:'center'}}>

      <Text style={{marginHorizontal:10}} >
        search
      </Text>
      </View>
      <View>
        <Text>
          Offer for you
        </Text>
      <Slider/>        
      </View>
      <Text>
        Near by you
      </Text>
    <NearBy/>
=======
    <View>
     
      <Slider/>
      <View>
        <Text>
          Near by 
        </Text>
      </View>
>>>>>>> 44f056173278cea263bd0ce095c56bab7c480564
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})