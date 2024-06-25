import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const OnBoarding = () => {
    const navigation = useNavigation()
    const [scrollData, setScrollData] = useState(0);
    const handleScroll = () => {
        setScrollData(1)
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {scrollData === 0 && (
                <View style={{ flex: 1, justifyContent: "center", margin: 10 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Booking Turf</Text>
                    <Text>Book Your in Your nearby Turf</Text>
                </View>
                <TouchableOpacity
                onPress={handleScroll}
                style={{
                    backgroundColor: 'red',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius:20,
                    marginBottom:20
                }}>
                    <Text style={{ color: 'white' }}>Get Started With us</Text>
                </TouchableOpacity>
                
            </View>
            )}

            {scrollData === 1 && (
                <View style={{ flex: 1, justifyContent: "center", margin: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Booking Turf</Text>
                        <Text>Book Your in Your nearby Turf</Text>
                    </View>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate("Login")}
                    style={{
                        backgroundColor: 'red',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius:20,
                        marginBottom:20
                    }}>
                        <Text style={{ color: 'white' }}>Bussiness Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("Login")}
                    style={{
                        backgroundColor: 'red',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius:20,
                    }}>
                        <Text style={{ color: 'white' }}>User Login</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default OnBoarding;

const styles = StyleSheet.create({});
