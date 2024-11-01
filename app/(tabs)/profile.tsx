import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View style={style.container}>
      <Text>Index</Text>
    </View>
  )
}

export default profile

const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    }
})