import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../lib/Header/Header'

const MyTeam = () => {
  return (
   <>
   <Header 
   titile="My Team"
   iconName="arrow-left"/>
   <View>
    <View>
        <TouchableOpacity>
            <Text>Team Name</Text>
        </TouchableOpacity>
    </View>
    <View>
        <TouchableOpacity>
            <Text>Add Player</Text>
        </TouchableOpacity>
    </View>
   </View>
   </>
  )
}

export default MyTeam

const styles = StyleSheet.create({})