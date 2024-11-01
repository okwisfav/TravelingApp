import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

const category = () => {
  return (
    <View style={style.container}>
      <Text> category</Text>
    </View>
  )
}

export default category

const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    }
})