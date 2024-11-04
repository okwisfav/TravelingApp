import {StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { ScrollView } from 'react-native-gesture-handler'

const CategoryButtons = () => {
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView>
          
      </ScrollView>
    </View>
  )
}
export default CategoryButtons

const styles = StyleSheet.create({
    title: {
      fontSize: 22,
      fontWeight: '700',
      color: Colors.black
    },
  });