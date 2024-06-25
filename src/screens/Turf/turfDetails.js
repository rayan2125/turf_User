import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../lib/Header/Header'
import { color } from '../../assets/Constant/Constant'
import { useNavigation } from '@react-navigation/native'


const TurfDetails = () => {
    const navigation = useNavigation()
    return (
        <>
            <Header
                titile="Turf Infomations"
                iconName="arrow-left" />
            <View style={{ flex: 1 }}>
                <View style={{ height: 200 }}>
                    <Image
                        source={require("../../assets/Images/box.jpeg")}
                        resizeMode='cover'
                        style={{ flex: 1, width: "100%", height: null }}
                    />
                </View>
                <ScrollView>

                    <View style={{ flex: 1, backgroundColor: 'white', margin: 10, borderRadius: 15, paddingVertical: 10, paddingHorizontal: 10 }}>
                        <Text style={{ color: color.Primary }}>Mari ka turf</Text>
                        <Text style={{ color: color.Primary }}>add </Text>
                        <Text style={{ color: color.Primary }}>Area</Text>
                        <Text style={{ color: color.Primary }}>Price</Text>
                        <Text style={{ color: color.Primary }}>Opnening</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white', margin: 10, borderRadius: 15, paddingVertical: 10, paddingHorizontal: 10 }}>
                        <Text style={{ color: color.Primary }}>Facilites Provided</Text>
                        <Text style={{ color: color.Primary }}>24 hour Open </Text>
                        <Text style={{ color: color.Primary }}>Water</Text>
                        <Text style={{ color: color.Primary }}>WashRoom</Text>
                        <Text style={{ color: color.Primary }}>Opnening</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white', margin: 10, borderRadius: 15, paddingVertical: 10, paddingHorizontal: 10 }}>
                        <Text>abour us </Text>

                    </View>
                    <View style={{ flex: 1, backgroundColor: '#ffc6c4', margin: 10, borderRadius: 15, paddingVertical: 10, paddingHorizontal: 10 }}>
                        <Text style={{ color: "black", fontSize: 20, fontWeight: '500' }}>Cancellation Policy</Text>
                        <Text style={{ color: "#fff" }}>Cancellation allow</Text>
                        <Text style={{ color: "#fff" }}>Cancellation before</Text>
                        <Text style={{ color: "#fff" }}>Cancellation Charges</Text>

                    </View>
                </ScrollView>
            </View>
            <View style={{ paddingHorizontal: 10, justifyContent: "flex-end", backgroundColor: "white", height: "10%", borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={{ backgroundColor: color.Primary, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "white" }}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default TurfDetails

const styles = StyleSheet.create({})