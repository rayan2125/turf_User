import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <View>
     
      <Slider/>
      <View>
        <Text>
          Near by 
        </Text>
      </View>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})