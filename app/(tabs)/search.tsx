import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

const search = () => {
  return (
    <View style={style.container}>
      <Text>search</Text>
    </View>
  )
}

export default search

const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    }
})