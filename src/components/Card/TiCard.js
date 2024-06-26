import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"


const TiCard = ({title,navigation,color,txtColor}) => {
  
  return (
    <View>
        <TouchableOpacity 
        onPress={navigation}
        style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10, width: '100%' }}>

      <Text style={{ fontSize: 20, width: '80%', marginHorizontal: 10,color:txtColor }}>{title}</Text>
      <Icon name="greater-than" size={20} color={color} />
        </TouchableOpacity>
    </View>
  )
}

export default TiCard

const styles = StyleSheet.create({})