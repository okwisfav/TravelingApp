// Import GestureHandlerRootView and TextInput
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, TouchableOpacity, Image, View, Text, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useHeaderHeight } from '@react-navigation/elements';
import { SearchBar } from 'react-native-screens';
import CategoryButtons from '@/components/CategoryButtons';
import category from './category';
import Listings from '@/components/Listings';
import listingData from '@/data/destinations.json'
import GroupListings from '@/components/GroupListings';
import groupData from  '@/data/groups.json';


const Index = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState('All')

  const  onCatChanged = (category: string) =>{
    // console.log("Category:", category);
    setCategory(category);

  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>   
              <Image
                source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=female" }}
                style={{ width: 40, height: 40, borderRadius: 20 }} 
              />
            </TouchableOpacity>
          ),
          // Setting right icon
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={[styles.container, { paddingTop: headerHeight }]}>
         <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>Explore The Beautiful World</Text>

          <View style={styles.searchSectionWrapper}>       
            <View style={styles.searchBar}>
              <Ionicons name='search' size={18} 
              style={{marginRight:5}} 
               color={Colors.black}
               />
              <TextInput placeholder='Search.....'/>
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.filterBtn} >
                <Ionicons name="options" size={28} color={Colors.white} />
            </TouchableOpacity>
          </View>

          <CategoryButtons onCategoryChanged={onCatChanged} />

          <Listings listings={listingData} category={category}/>
          <GroupListings  listings={groupData}/>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',  
    color: Colors.black,  
    marginTop: 10,
  },
  searchSectionWrapper:{
    flexDirection: 'row',
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
  },

  filterBtn:{
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  }
});
