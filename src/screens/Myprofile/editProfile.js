import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../lib/Header/Header'
import { Divider, Icon } from 'react-native-paper'
import { color } from '../../assets/Constant/Constant'

const EditProfile = () => {
    return (
        <>
            <Header
                titile="Edit Profile"
                iconName="arrow-left"
            />
            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image source={require("../../assets/Images/box.jpeg")}
                        style={{ height: 160, width: 160, borderRadius: 99 }} />
                    <TouchableOpacity style={{ right: -50, top: -30,height:40,width:40,borderRadius:99,backgroundColor:color.Primary,justifyContent:'center',alignItems:"center" }}>

                        <Icon source="camera" size={30} color='white' />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1,margin:10, }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center',paddingHorizontal:10,paddingVertical:10 }}>
                        <View style={{ width: '60%' }}>

                            <Icon source="account" size={25} color={color.Primary} />
                        </View>
                        <Text style={{ width: "40%" }}>
                            Nikhil Dubey
                        </Text>

                    </View>
                    <Divider bold={true}/>
                    <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center',paddingHorizontal:10,paddingVertical:10 }}>
                        <View style={{ width: '60%' }}>

                            <Icon source="email" size={25} color={color.Primary} />
                        </View>
                        <Text style={{ width: "40%" }}>
                            Nikhil@gmail.com
                        </Text>

                    </View>
                    <Divider bold={true}/>
                    <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center',paddingHorizontal:10,paddingVertical:10 }}>
                        <View style={{ width: '60%' }}>

                            <Icon source="cellphone" size={25} color={color.Primary} />
                        </View>
                        <Text style={{ width: "40%" }}>
                            8104781464
                        </Text>

                    </View>
                    <Divider bold={true}/>
                    <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center',paddingHorizontal:10,paddingVertical:10 }}>
                        <View style={{ width: "60%" }}>

                            <Icon source="cake" size={25} color={color.Primary} />
                        </View>
                        <Text style={{ width: "40%" }}>
                            19-11-2000
                        </Text>

                    </View>
                    <Divider bold={true}/>
                    <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center',paddingHorizontal:10,paddingVertical:10 }}>
                        <View style={{ width: '60%' }}>

                            <Icon source="home" size={25} color={color.Primary} />
                        </View>
                        <Text style={{ width: "40%" }}>B/29,</Text>

                    </View>
                    <Divider bold={true}/>

                </View>
            </View>
            <View style={{margin:10}}>
            <TouchableOpacity style={{
                alignItems:"center",
                backgroundColor:color.Primary,paddingHorizontal:10,paddingVertical:10,borderRadius:15}}>
                <Text style={{color:"white"}}>Save Profile</Text>
            </TouchableOpacity>

            </View>
        </>
    )
}

export default EditProfile

const styles = StyleSheet.create({})