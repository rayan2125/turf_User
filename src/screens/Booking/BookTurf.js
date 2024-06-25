import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, FlatList, ScrollView, TextInput } from 'react-native';
import Header from '../../lib/Header/Header';
import { Sizes, color } from '../../assets/Constant/Constant';
import CustomDatePicker from '../../components/DatePicker/datePicker';
import { Icon, Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const BookTurf = ({ route }) => {
  const navigation = useNavigation()
  const data = route.params;
  const currentDate = new Date();
  const dateData = [];
  const numberOfDays = 30
  for (let i = 0; i <= numberOfDays; i++) {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + i);
    const formattedDate = {
      date: String(newDate.getDate()).padStart(2, '0'), // Format date with leading zero if necessary
      month: String(newDate.toLocaleString('default', { month: 'short' })),
      year: String(newDate.getFullYear()),
    };
    dateData.push(formattedDate);
  }
  const today = {
    date: String(currentDate.getDate()).padStart(2, '0'),
    month: String(currentDate.toLocaleString('default', { month: 'short' })),
    year: String(currentDate.getFullYear()),
  };
  const currentHour = currentDate.getHours();
  const amOrPm = currentHour >= 12 ? 'PM' : 'AM';


  const displayHour = currentHour % 12 || 12;

  const currentTime = `${displayHour} ${amOrPm}`;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("slected date")
  const [openModal, setOpenModal] = useState(false)
  const [bookTime, setBookTime] = useState("1")
  const [bgBookDate, setBgBookDate] = useState(today);
  const [customTime, setCustomTime] = useState(currentTime)



  const [timePop, setTimePop] = useState(false)


  const handleback = () => {
    navigation.navigate('Home');
  };
  const handleConfirm = (date) => {
    const dt = new Date(date);
    const hours = dt.getHours();
    const displayHour = hours % 12 || 12;
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${displayHour}:${dt.getMinutes() === 0 ? '00' : dt.getMinutes()} ${amOrPm}`;

    setCustomTime(formattedTime)

    setTimePop(false);
  };


  const handleCancel = (date) => {

    setTimePop(false)
  };




  const handleChangeTime = () => {

    setTimePop(true)
  }



  const handleVisible = () => {

    setShowDatePicker(true);
  }

  const handleBookDate = (item) => {

    setBgBookDate(item)
  }
  const handleIncrementTime = () => {
    setBookTime(prevTime => String(parseInt(prevTime, 10) + 1)); // Increment bookTime by 1
  };

  const handleDecrementTime = () => {
    setBookTime(prevTime => String(parseInt(prevTime, 10) - 1)); // Decrement bookTime by 1
  };
  const customTimeHours = parseInt(customTime.split(':')[0]);

  const customTimeSuffix = customTime.split(' ')[1];


  let newHour = (customTimeHours + bookTime) % 12;

  if (newHour === 0) newHour = 12;
  const newTime = `${newHour}:00 ${customTimeSuffix}`;

  const timeSetData = newTime;


  return (
    <>
      <Header titile='BooK Slot' iconName='arrow-left' />
      <View style={{ flex: 1, margin: Sizes.fixPadding }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.navigate("TurfDetails")} >

            <Image
              style={{ height: 250, width: '100%' }}

              source={data.img}
            />
          </TouchableOpacity>


          <View style={{ backgroundColor: "white", borderRadius: 15, marginBottom: 10, marginTop: 10 }}>
            <FlatList
              horizontal={true}
              data={dateData}
              renderItem={({ item, index }) => {
                const bg = bgBookDate?.date

                return (
                  <TouchableOpacity
                    onPress={() => handleBookDate(item)}
                    key={index}
                    style={{ margin: 5, backgroundColor: bg === item.date ? color.Primary : "transparent", paddingHorizontal: 2, paddingVertical: 2, borderRadius: 5 }}
                  >
                    <Text>{item.date}</Text>
                    <Text>{item.month}</Text>
                    <Text>{item.year}</Text>
                  </TouchableOpacity>
                )
              }}
            />
            <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
              <Text>
                Slot are aviable
              </Text>
            </View>
          </View>

          <View style={{
            flex: 1,
            backgroundColor: "white",
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
            justifyContent: "center"
          }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: "center", paddingHorizontal: 10, paddingVertical: 10 }}>
              <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>

                <Text style={{ color: "black" }}>
                  Select Start Time
                </Text>

                <TouchableOpacity
                  onPress={handleChangeTime}
                  style={{
                    borderColor: color.Primary,
                    borderWidth: 1, width: 90,
                    paddingHorizontal: 10, paddingVertical: 10,
                    borderRadius: 15,
                    fontSize: 30,
                    color: color.Primary,
                    justifyContent: "center",
                    alignItems: 'center'
                  }}


                >
                  <Text style={{ color: color.Primary }}>{customTime}</Text>
                </TouchableOpacity>
              </View>
              <View style={{}}>
                <View style={{ flexDirection: 'row', alignSelf: "center" }}>

                  <Icon source="clock-start" size={30} color={color.Primary} />

                </View>
                <View style={{ flexDirection: 'row' }}>

                  <Text style={{ marginHorizontal: 6, color: color.Primary, paddingHorizontal: 10, paddingVertical: 10, }}>{bgBookDate.date}/{bgBookDate.month}/{bgBookDate.year} {customTime}</Text>

                </View>
              </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: "center", paddingHorizontal: 10, paddingVertical: 10 }}>
              <View>
                <Text style={{ color: "black" }} >
                  Select End Time
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderColor: color.Primary,
                    borderWidth: 1, width: 90,
                    paddingHorizontal: 10, paddingVertical: 10,
                    borderRadius: 15,
                    fontSize: 30,
                    color: color.Primary,
                    alignItems: 'center'
                  }}


                >
                  <TouchableOpacity onPress={handleDecrementTime}>
                    <Icon source="menu-down" size={25} color={color.Primary} />
                  </TouchableOpacity>
                  <Text style={{ color: color.Primary }}>{bookTime}</Text>
                  <TouchableOpacity onPress={handleIncrementTime}>
                    <Icon source="menu-up" size={25} color={color.Primary} />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: 'row', alignSelf: "center" }}>

                  <Icon source="clock-end" size={30} color={color.Primary} />

                </View>
                <View style={{ flexDirection: 'row' }}>

                  <Text style={{ marginHorizontal: 6, color: color.Primary,paddingHorizontal: 10, paddingVertical: 10, }}>{bgBookDate.date}/{bgBookDate.month}/{bgBookDate.year} 8:30 pm</Text>

                </View>
              </View>

            </View>
          </View>



        </View>
      </View>
      <View style={{ paddingHorizontal: 10, justifyContent: "flex-end", backgroundColor: "white", height: "10%", borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Turfbooking",)}
          style={{ backgroundColor: color.Primary, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white" }}>Book Now</Text>
        </TouchableOpacity>
      </View>


      {
        timePop &&
        <CustomDatePicker
          isVisible={timePop}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      }

    </>
  );
};

export default BookTurf;
