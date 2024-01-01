import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Sizes, color } from '../../assets/Constant/Constant'
import { useNavigation } from '@react-navigation/native';
const TurfCard = ({ name, price, locations, timming,img }) => {
    const navigation= useNavigation()
    return (
        <View>
            <View style={{
                paddingHorizontal: Sizes.fixPadding,
                paddingVertical: Sizes.fixPadding,
                alignItems: 'center',
                flexDirection: 'row',
                flex: 1,
               
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                borderColor: 'green',
                borderWidth: 1,
                // backgroundColor: color.Secondry
            }}>
                <View style={{ backgroundColor: color.Primary, width: 100, height: 100, borderRadius: 99, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Image source={img}
                    style={{width:100,height:100,}}
                    />
                </View>
                <View style={{ marginHorizontal: 15 }}>
                    <Text>{name}</Text>
                    <Text>{price}</Text>
                    <Text>{locations}</Text>
                    <Text>{timming}</Text>
                </View>

            <TouchableOpacity 
            onPress={()=>navigation.navigate('BookTurf')}
            style={{
                backgroundColor: 'green',
                height: 30, marginBottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15
            }}>
                <Text style={{ color: 'white' }}>book</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default TurfCard

const styles = StyleSheet.create({})