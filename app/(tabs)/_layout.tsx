import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function Layout() {
  return (
    // for removing border 
    <Tabs screenOptions={{
       tabBarStyle: {
        backgroundColor: Colors.bgColor,
        borderTopWidth: 0,
        padding: 0
       },
       
       // removing text from the navabar and also adding color 
       tabBarShowLabel: false,
       tabBarActiveTintColor: Colors.black,
       tabBarInactiveTintColor: '#999'
    }}>

      // for adding icons and also setting navbar 
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{
              backgroundColor:Colors.primaryColor, 
              paddingHorizontal:16,
              paddingVertical:12,
              borderRadius: 10,
              height: 50,
              }}>
                 <Ionicons name="compass" size={28} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="space-dashboard" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmarks" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
