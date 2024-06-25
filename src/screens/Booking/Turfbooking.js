
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../lib/Header/Header'
import { color } from '../../assets/Constant/Constant'
import { Icon, } from 'react-native-paper'
const Turfbooking = () => {
    return (
        <>
            <Header
                titile="Booking Turf"
                iconName="arrow-left"
            />
            <View style={{ flex: 1, margin: 10 }}>
                <View style={{ backgroundColor: "white", flexDirection: 'row', width: '100%', borderRadius: 15 }}>
                    <View style={{ width: '30%', justifyContent: "center", alignItems: "center", paddingVertical: 10, paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 30, color: "black", fontWeight: "700" }}>Dec</Text>
                        <Text style={{ fontSize: 30, color: color.Primary, fontWeight: "700" }}>26</Text>
                        <Text style={{ fontSize: 30, color: "black", fontWeight: "700" }}>2023</Text>
                    </View>
                    <View style={{ backgroundColor: color.Primary, width: '70%', borderTopRightRadius: 15, borderBottomRightRadius: 15, paddingVertical: 10, paddingHorizontal: 10 }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '400' }}>Turf Name</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon source="map-marker" size={20} color='white' />
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '400' }}>Address of Turf</Text>
                        </View>
                        <Text style={{ color: 'white', fontSize: 20 }}>Timing</Text>
                        <TouchableOpacity style={{ borderColor: 'white', borderWidth: 1, borderRadius: 18, justifyContent: 'center', alignItems: "center", flexDirection: 'row' }}>
                            <Icon source="map-marker" size={20} color='white' />
                            <Text style={{ color: 'white', fontSize: 20 }}> Map View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: 'white', marginTop: 10, paddingHorizontal: 10, paddingVertical: 10 }}>
                    <Text style={{ color: 'black', textAlign: 'center' }}>Any additional Items</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text>Ball:</Text>

                        <Text>1200</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text>Bat:</Text>
                        <Text>1200</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text>New Ball:</Text>
                        <Text>1200</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text>Water:</Text>
                        <Text>1200</Text>
                    </View>



                </View>

                <View style={{
                    flex: 1, backgroundColor: 'white', marginTop: 10, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 15,
                    borderColor: 'grey',
                    borderWidth: 1,
                    borderStyle: 'dotted'

                }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text>Slot Price:</Text>
                        <Text>1200</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text>Final Price:</Text>
                        <Text>1200</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text>Additional Items:</Text>
                        <Text>1200</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text>Advanced Amount:</Text>
                        <Text>1200</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text>Slot Price:</Text>
                        <Text>1200</Text>
                    </View>
                    <View style={{ height: 1, backgroundColor: 'black', borderStyle: "dashed", borderWidth: .1, borderColor: 'black', marginTop: 15 }}></View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text style={{ fontWeight: "bold", color: color.Primary }}>Pay Now:</Text>
                        <Text style={{}}>1200</Text>
                    </View>

                </View>
                <Text>by counting to the payment you agree to our</Text>

            </View>
            <View style={{ height: "10%", backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 10 }}>
                <TouchableOpacity style={{ backgroundColor: color.Primary, paddingHorizontal: 10, paddingVertical: 10, alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Pay Now</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Turfbooking

const styles = StyleSheet.create({})