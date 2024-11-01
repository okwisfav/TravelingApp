import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={style.container}>
      <Text> index</Text>
    </View>
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