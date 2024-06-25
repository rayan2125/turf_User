import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-paper'


const TurfListing = () => {
    const bookData = [
        { id: 1, name: "Daily" },
        { id: 2, name: "Weeakly" },
        { id: 3, name: "Montly" },
        { id: 4, name: "Yearly" },
    ]
    const Time = [
        { id: 1, name: "1 am", },
        { id: 2, name: "2 am", },
        { id: 3, name: "3 am", },
        { id: 4, name: "4 am", },
        { id: 5, name: "5 am", },
        { id: 6, name: "6 am", },
        { id: 7, name: "7 am", },
        { id: 8, name: "8 am", },
        { id: 9, name: "9 am", },
        { id: 10, name: "10 am", },
        { id: 11, name: "11 am", },
        { id: 12, name: "12 pm", },
        { id: 13, name: "1 pm", },
        { id: 14, name: "2 pm", },
        { id: 15, name: "3 pm", },
        { id: 16, name: "4 pm", },
        { id: 17, name: "5 pm", },
        { id: 18, name: "6 pm", },
        { id: 19, name: "7 pm", },
        { id: 20, name: "8 pm", },
        { id: 21, name: "9 pm", },
        { id: 22, name: "10 pm", },
        { id: 23, name: "11 pm", },
        { id: 24, name: "12 am", },
    ]
    const Date = [
        { id: 1, name: "1 ", },
        { id: 2, name: "2 ", },
        { id: 3, name: "3 ", },
        { id: 4, name: "4 ", },
        { id: 5, name: "5 ", },
        { id: 6, name: "6 ", },
        { id: 7, name: "7 ", },
        { id: 8, name: "8 ", },
        { id: 9, name: "9 ", },
        { id: 10, name: "10 ", },
        { id: 11, name: "11 ", },
        { id: 12, name: "12 ", },
        { id: 13, name: "13 ", },
        { id: 14, name: "14 ", },
        { id: 15, name: "15 ", },
        { id: 16, name: "16 ", },
        { id: 17, name: "17 ", },
        { id: 18, name: "18 ", },
        { id: 19, name: "19 ", },
        { id: 20, name: "20 ", },
        { id: 21, name: "21 ", },
        { id: 22, name: "22 ", },
        { id: 23, name: "23 ", },
        { id: 24, name: "24 ", },
        { id: 24, name: "24 ", },
        { id: 25, name: "25 ", },
        { id: 26, name: "26 ", },
        { id: 27, name: "27 ", },
        { id: 28, name: "28 ", },
        { id: 29, name: "29 ", },
        { id: 30, name: "30 ", },
        { id: 31, name: "31 ", },
    ]
    const Week = [
        { id: 1, name: 'Sunday' },
        { id: 2, name: 'Monday' },
        { id: 3, name: 'Tuesday' },
        { id: 4, name: 'Wednesday' },
        { id: 5, name: 'Thursday' },
        { id: 6, name: 'Friday' },
        { id: 7, name: 'Saturday' }
    ];

    const Months = [
        { id: 1, name: 'Jan' },
        { id: 2, name: 'Feb' },
        { id: 3, name: 'Mar' },
        { id: 4, name: 'Apr' },
        { id: 5, name: 'May' },
        { id: 6, name: 'Jun' },
        { id: 7, name: 'Jul' },
        { id: 8, name: 'Aug' },
        { id: 9, name: 'Sep' },
        { id: 10, name: 'Oct' },
        { id: 11, name: 'Nov' },
        { id: 12, name: 'Dec' }
    ];
    const Years = [
        { id: 1, name: 2023 },
        { id: 2, name: 2024 },
        { id: 3, name: 2025 },
    ]
    const numColumns = 3

    const [selectedItems, setSelectedItems] = useState([]);
    console.log(selectedItems)
    const [dayWise, setDayWise] = useState("1")


    const handleSelect = (item) => {
        const itemId = item.id;


        const index = selectedItems.findIndex((selectedItem) => selectedItem === itemId);

        if (index === -1) {

            setSelectedItems([...selectedItems, itemId]);
        } else {

            const updatedItems = [...selectedItems];
            updatedItems.splice(index, 1);
            setSelectedItems(updatedItems);
        }
    };
    const handleDays = (item) => {
        setDayWise(item.id);


    }







    return (
        <View style={{ flex: 1, justifyContent: "center", }}>
            <View style={{ flex: 1 / 5 }}>

                <Text>List Turf</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", }}>

                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                    <FlatList
                        horizontal={true}
                        data={bookData}
                        renderItem={({ item, index }) => {
                            const bg = dayWise

                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleDays(item)}
                                    style={{
                                        margin: 5, paddingVertical: 10,
                                        justifyContent: 'center', alignItems: "center",
                                        paddingHorizontal: 10, backgroundColor: item.id === bg ? "red" : "#ff7270", borderRadius: 18, width: 80
                                    }}
                                >
                                    <Text style={{ color: 'white' }}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        }} />
                </View>

                <View style={{ flex: 1, }}>
                    <FlatList
                        data={
                            dayWise == 1 ? Time :
                                dayWise == 2 ? Week :
                                    dayWise == 3 ? Months :
                                        dayWise == 4 ? Years : ''
                        }
                        style={{ flex: 1 }}
                        numColumns={numColumns}
                        renderItem={({ item, index }) => {
                            const isSelected = selectedItems.includes(item.id);

                            return (
                                <TouchableOpacity

                                    key={index}
                                    onPress={() => handleSelect(item)}
                                    style={{
                                        borderColor: 'black',
                                        flexDirection: 'row',
                                        borderWidth: 1,
                                        paddingVertical: 10,
                                        paddingHorizontal: 10,
                                        margin: 7,
                                        width: '30%',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        borderRadius: 18,
                                        backgroundColor: isSelected ? 'lightblue' : 'white',
                                    }}
                                >
                                    <Text style={{ color: 'black' }}>{item.name}</Text>
                                    {isSelected && (
                                        <View
                                            style={{
                                                height: 20,
                                                width: 20,
                                                borderRadius: 99,
                                                backgroundColor: 'green',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Icon source="check" color="white" />
                                        </View>
                                    )}
                                </TouchableOpacity>
                            );
                        }}
                    />

                </View>
                {selectedItems &&
                    <TouchableOpacity style={{
                        backgroundColor: 'red',
                        justifyContent: "center", alignItems: 'center',
                        paddingHorizontal: 10, paddingVertical: 10, borderRadius: 18, margin: 10
                    }}>
                        <Text style={{ color: 'white' }}>List Now</Text>
                    </TouchableOpacity>}
            </View>
        </View>
    )
}

export default TurfListing

const styles = StyleSheet.create({})