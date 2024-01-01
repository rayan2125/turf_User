import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Header from '../../lib/Header/Header'
import { Sizes } from '../../assets/Constant/Constant'
import TextI from '../../components/Text/TextInput'

const BookTurf = ({ navigation }) => {
  const handleback = () => {
    navigation.navigate("Home")
  }
  return (
    <>
      <Header
        titile='BooK Turf'
        back={handleback}
        iconName="arrow-left" />
      <View style={{ flex: 1, margin: Sizes.fixPadding,justifyContent:"center", }}>
<View style={{borderColor:"red",borderWidth:1,paddingHorizontal:Sizes.fixPadding,paddingVertical:Sizes.fixPadding,borderRadius:15}}>

        <View style={{flexDirection:'row',alignItems:"center"}}>
          <View style={{width:'30%'}}>

          <Image
          style={{height:120,width:"100%"}}
          resizeMode='contain'
          source={require("../../assets/Images/nsd.jpeg")}/>
          </View>
          <View>

          <Text>Mari</Text>
          <Text>Timming::9am-9pm</Text>
          <Text> Mira Road 401105 </Text>
          </View>

        </View>

        <TextI
          title="Turf Name"
        />
        <TextI
          title="Price"
        />
        <TextI
          title="Date"
        />
        <TextI
          title="Timing"
        />
        <TouchableOpacity style={{ backgroundColor: 'green', justifyContent: "center", alignItems: "center", height: 30 }}>
          <Text style={{ color: "white" }}>
            Book now
          </Text>
        </TouchableOpacity>
</View>

      </View>
    </>
  )
}

export default BookTurf