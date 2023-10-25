import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
import TiCard from '../components/Card/TiCard'
import Card from '../components/Card/Card'
import { Sizes } from '../assets/Constant/Constant'


const data = [
    {
        title: "Turf Booking",
        id: "1",

    },
    {
        title: "My Team",
        id: "1",

    },
    {
        title: "My Matches",
        id: "1",

    },
    {
        title: "new feature",
        id: "1",

    },
]

const payment = ["My payment", "recharge", "other activity"]
const Profile = ({ navigation }) => {
    return (
        <View style={{ padding: 10, margin: 20 }}>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10,backgroundColor:'white', paddingHorizontal:10,paddingVertical:10,borderTopLeftRadius:15,borderTopRightRadius:15}}>
                <View style={{ backgroundColor: "red", height: 70, width: 70, borderRadius: 99, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>
                        img
                    </Text>

                </View>
                <View style={{ marginHorizontal: 6 }}>

                    <Text style={{ marginHorizontal: 10, fontSize: 20 }}>Nikhil Dubey </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
                        <Icon name="home" />
                        <Text> b/307, sai nath bhayander /40017</Text>
                    </View>
                </View>
            </View>
           
<View style={{backgroundColor:'white', top:-7, paddingHorizontal:15,paddingVertical:15,borderBottomLeftRadius:15,borderBottomRightRadius:15}}>

<View style={{backgroundColor:'rgba(251,51,51,0.1)', paddingHorizontal:Sizes.fixPadding,paddingVertical:Sizes.fixPadding,borderRadius:Sizes.fixPadding,borderColor:'red',borderWidth:1}}>

                {
                    data.map((item) => {
                        return (
                            <TiCard
                            title={item.title}
                            />
                        )
                    })
                }
</View>
            
            
          
                {
                    payment.map((item) => {
                        return (
                            <TiCard
                            title={item}
                            />
                        )
                    })
                }
</View>
           
            
            <TiCard
            title="Logout"
            />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})