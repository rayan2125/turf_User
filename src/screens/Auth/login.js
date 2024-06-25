import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const Login = () => {
  return (
    <KeyboardAvoidingView

    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{flex:1}}
    >
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={{flex:1,justifyContent:'center',margin:10}}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>logo</Text>
        </View>
        <View style={{flex:1,}}>

      <TextInput
      mode='outlined'
      label='Email'
      placeholder='Enter Your Email'
      />
      <TextInput
      mode='outlined'
      label='Password'
      placeholder='Enter Your Password'
      />
      <View>

      <TouchableOpacity style={{backgroundColor:'red', 
      justifyContent:"center",alignItems:'center',
      paddingHorizontal:10,paddingVertical:10,borderRadius:20,marginTop:20}} >
        <Text style={{color:"white"}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'red', 
      justifyContent:"center",alignItems:'center',
      paddingHorizontal:10,paddingVertical:10,borderRadius:20,marginTop:20}} >
        <Text style={{color:"white"}}>Register</Text>
      </TouchableOpacity>
      </View>
        </View>
    </View>

</TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({})