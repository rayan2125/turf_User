import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Slider from '../components/Slider'
import { Sizes, color } from '../assets/Constant/Constant'
import NearBy from './NearBy/NearBy'
import { Icon, Searchbar } from 'react-native-paper'

const Home = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, ]
  return (
    <View style={{  flex: 1,backgroundColor:'white' }}>
      <View style={{ flexDirection: 'row', justifyContent: "flex-end", alignItems: "center", marginBottom: 10 }}>
        <Icon source="heart" size={30} color={color.Primary} />
        <Icon source="cart" size={30} color={color.Primary} />

      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Searchbar style={{ width: "90%", backgroundColor: color.Primary, borderRadius: 20 }}
          placeholder="Search"
          placeholderTextColor="white"
          iconColor="white"
          inputStyle={{ color: 'white' }}
          theme={{
            colors: {
              primary: 'white',
            },
          }} />
        <Icon source="filter-variant" color={color.Primary} size={40} />
      </View>

      <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 18, fontWeight: "600", lineHeight: 20, letterSpacing: 0.2, color: "black" }}>Category</Text>
        <Text style={{ fontSize: 16, fontWeight: "600", lineHeight: 20, letterSpacing: 0.2, }}>All..</Text>
      </View>
      <View>

        <FlatList
        contentContainerStyle={{backgroundColor:'white'}}
          data={data}
          numColumns={3}
          renderItem={({ item, index }) => {
            return (

              <View key={index} style={{width:"33%"}}>

                <TouchableOpacity style={{ 
                  elevation:10,
                  width:"90%",
                  marginVertical:5,
                  marginHorizontal:5,
                  backgroundColor: color.Primary, paddingHorizontal: 10, paddingVertical: 10, alignSelf: "center", borderRadius: 18 }}>
                  <Text style={{ color: "white", fontWeight: "600", fontFamily: 'Roboto',textAlign:"center" }}>Cricket</Text>
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>
      <View style={{}}>
        <Text style={{ color: 'black', fontSize: 30 }}>
          Today's Offer
        </Text>
        <Slider />
      </View>

      <Text style={{ fontSize: 30, color: 'black' }}>
        Near by you
      </Text>
      <NearBy />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})