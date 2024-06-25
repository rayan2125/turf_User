import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
import TiCard from '../components/Card/TiCard'
import Card from '../components/Card/Card'
import { Sizes, color } from '../assets/Constant/Constant'


const data = [
    {
        title: "My Booking",
        id: "1",

    },
    {
        title: "My Team",
        id: "2",

    },
    {
        title: "My Matches",
        id: "3",

    },
    {
        title: "New feature",
        id: "4",

    },
    {
        title: "Edit Profile",
        id: "5",

    },
]

const payment = ["My Payment", "Add Card", "Other activity"]
const Profile = ({ navigation }) => {
    const handleNavigation=(item)=>{
        if(item.id==="1"){
            navigation.navigate("BookingHistory")
        }
        if(item.id==="5"){
        navigation.navigate("EditProfile")
        }
        if(item.id==="2"){
            navigation.navigate("MyTeam")
        }
    }
    return (
        <View style={{flex:1, padding: 10, margin: 20 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 10, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                <View style={{ backgroundColor: color.Primary, height: 70, width: 70, borderRadius: 99, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>
                        img
                    </Text>

                </View>
                <View style={{ marginHorizontal: 6 }}>

                    <Text style={{ marginHorizontal: 10, fontSize: 20,color:color.Primary }}>Nikhil Dubey </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
                        <Icon name="home" />
                        <Text> b/307, sai nath bhayander /40017</Text>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: 'white', top: -7, paddingHorizontal: 15, paddingVertical: 15, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>

                <View style={{ backgroundColor: color.Primary, paddingHorizontal: Sizes.fixPadding, paddingVertical: Sizes.fixPadding, borderRadius: Sizes.fixPadding, borderColor:"white", borderWidth: 1 }}>

                    {
                        data.map((item,index) => {
                            return (
                                <TiCard
                                key={index}
                                    title={item.title}
                                    color="white"
                                    txtColor="white"
                                    navigation={()=>handleNavigation(item)}
                                />
                            )
                        })
                    }
                </View>

                <View style={{  paddingHorizontal: Sizes.fixPadding, paddingVertical: Sizes.fixPadding, borderRadius: Sizes.fixPadding, }}>

                {
                    payment.map((item) => {
                        return (
                            <TiCard
                                title={item}
                                color={color.Primary}
                                txtColor={color.Primary}
                            />
                        )
                    })
                }
            </View>
            </View>

<View style={{flex:1,justifyContent:'flex-end'}}>

            <TouchableOpacity style={{
                alignItems:"center",
                backgroundColor:color.Primary,paddingHorizontal:10,paddingVertical:10,borderRadius:15}}>
                <Text style={{color:"white"}}>Log Out</Text>
            </TouchableOpacity>
</View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})