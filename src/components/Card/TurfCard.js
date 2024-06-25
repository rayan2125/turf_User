import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Sizes, color } from '../../assets/Constant/Constant'
import { useNavigation } from '@react-navigation/native';
const TurfCard = ({ name, price, locations, timming,img,onPress }) => {
    const navigation= useNavigation()
    return (
        
            <View style={{
                paddingHorizontal: Sizes.fixPadding,
                paddingVertical: Sizes.fixPadding,
                alignItems: 'center',
                flexDirection: 'row',
                flex: 1,
               zIndex:9,
               elevation:8,
               backgroundColor:"white",
                marginTop:Sizes.fixPadding-5,
          
               borderRadius:Sizes.fixPadding,
                
            }}>
                <View style={{ backgroundColor: color.Primary, width: 100, height: 100, borderRadius: 99, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Image source={img}
                    style={{width:100,height:100,}}
                    />
                </View>
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={{color:"black"}}>{name}</Text>
                    <Text style={{color:"black"}}>{price}</Text>
                    <Text style={{color:"black"}}>{timming}</Text>
                    <Text style={{color:"black"}}>{locations}</Text>
                </View>

            <TouchableOpacity 
           onPress={onPress}
            style={{
                position:'absolute',
                right:Sizes.fixPadding+3,
                backgroundColor: color.Primary,
                // height: 30,
                 marginBottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal:Sizes.fixPadding+10,
                paddingVertical:Sizes.fixPadding,
                borderRadius:10
               
            }}>
                <Text style={{ color: 'white' }}>Book</Text>
            </TouchableOpacity>
            </View>
      
    )
}

export default TurfCard

const styles = StyleSheet.create({})