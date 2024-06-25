import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { color } from '../../assets/Constant/Constant'

const InCompleted = () => {
    const turfIncomplte=[
        {id:1,name:"Mari Turf",location:"Bhayander East",price:"1100",date:"27-dec-2023",timming:"2pm-3pm"},
        {id:2,name:"Nikhil Turf",location:"Bhayander West",price:"1000",date:"27-dec-2023",timming:"5am-6am"},
        {id:3,name:"Ajay Turf",location:"Mira Road",price:"2200",date:"27-dec-2023",timming:"4pm-6pm"},
        {id:4,name:"Mari Turf",location:"Bhayander East",price:"3000",date:"27-dec-2023",timming:"1pm-3pm"},
        {id:5,name:"Bravo Turf",location:"Mira Road",price:"1200",date:"27-dec-2023",timming:"11am-12pm"},
        {id:6,name:"Abhishek Turf",location:"Bhayander East",price:"1200",date:"27-dec-2023",timming:"7am-8am"},
        {id:7,name:"Radha Turf",location:"Mira Road",price:"1000",date:"27-dec-2023",timming:"10am-11am"},
        {id:8,name:"Khusboo and Mira Turf",location:"Mira Road",price:"1800",date:"27-dec-2023",timming:"2pm-3:30pm"},
        {id:9,name:"Ramesh Turf",location:"Bhayander East",price:"4200",date:"27-dec-2023",timming:"12am-4am"},
        {id:10,name:"NanduTurf",location:"Mira Road",price:"1900",date:"27-dec-2023",timming:"6pm-7:30pm"},
    ]
  return (
    <View style={styles.container}>
        <FlatList
        data ={turfIncomplte}
        renderItem ={({item,index})=>{
            return(
                <View
                key={index}
                style={styles.headerSection}>
                <View>
                    <Text>Turf Name:{item.name}</Text>
                    
                </View>
                <View style={styles.inside}>
                    <Text>Timing:{item.timming}</Text>
                    <Text>Date:{item.date}</Text>
                    <Text>Price:{item.price}</Text>
                    <Text>Location:{item.location}</Text>
                </View>
                <View style={styles.cancelHeader} >
                    <TouchableOpacity style={styles.cancel}>
                        <Text style={styles.textStyles}>Cancel</Text>
                    </TouchableOpacity>
                </View>
              </View>
            )
        }}
     />
    </View>
  )
}

export default InCompleted

const styles = StyleSheet.create({
container:{
flex:1,
margin:10
},
headerSection:{
    borderColor:color.Primary,
    borderWidth:1,
    borderStyle:"dashed",
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius:20,
    marginBottom:15,
    marginTop:15,
},
inside:{
   
},
cancelHeader:{
    
    alignItems:'flex-end'
   
},
cancel:{
backgroundColor:"red",
justifyContent:'center',
alignItems:'center',
paddingVertical:10,
paddingHorizontal:10,
borderRadius:15,
width:'30%'
},
textStyles:{
    color:"white"
}

})