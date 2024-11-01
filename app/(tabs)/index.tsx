import {StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const index = () => {
  return (
      <Stack.Screen options={{
         headerTransparent:true, 
         headerTitle: "",
         headerLeft: () => (
          <Image
          source={{
            uri: "https://xsgames.co/randomusers/avatar.php?g=female",
          }}
          style={{ width: 40, height: 40, borderRadius: 10 }}
        />
          </TouchableOpacity>
         )
      }} />
  )
}

export default index

const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    }
})