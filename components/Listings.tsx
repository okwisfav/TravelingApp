import { View, Text, ListRenderItem, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native';
import { ListingType } from '@/types/listingType';
import Colors from '@/constants/Colors';


type Props = {
    listings: any[]
}

const Listings = ({listings}: Props) => {

    const renderItems:ListRenderItem<ListingType> =({ item }) =>{
        return(
            <TouchableOpacity>
                  <View style={styles.item}>
                      <Image 
                       source={{uri: item.image}}
                        style={{styles.image}}
                         />
                  </View>
            </TouchableOpacity>
        )
    }
  return (
    <View>
        <FlatList data={listings} 
        renderItem={renderItems} 
        horizontal showsHorizontalScrollIndicator={false}/>
    </View>
  )
}

export default Listings

const styles = StyleSheet.create({
    item:{
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        width: 220,
    },
    image: {
        width:200,
        height: 200,
        borderRadius: 10,
    }
})

 