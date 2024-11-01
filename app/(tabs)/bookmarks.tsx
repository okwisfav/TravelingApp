import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={style.container}>
      <Text>bookmarks</Text>
    </View>
  )
}

export default Index

const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    }
})