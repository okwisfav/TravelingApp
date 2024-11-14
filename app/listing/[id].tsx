import { Image, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ListingType } from '@/types/listingType';
import listingData from '@/data/destinations.json';

const { width } = Dimensions.get('window'); // Example width, adjust as needed
const IMG_HEIGHT = 200; // Example height, adjust as needed

const ListingDetails = () => {
    // Use object destructuring to access the id parameter
    const { id } = useLocalSearchParams();
    const listing: ListingType | undefined = (listingData as ListingType[]).find(
        (item) => item.id === id
    );

    if (!listing) {
        return <Text>Listing not found</Text>;
    }

    return (
        <>
          <Stack.Screen options={{
             headerTransparent: true,
             headerTitle: "",
             headerLeft: () => (
                <TouchableOpacity onPress={() => {}}>
                    <Text style={{ padding: 10 }}>Back</Text>
                </TouchableOpacity>
             )
          }} />
          <View>
              <Image source={{ uri: listing.image }} style={styles.image} />
          </View>
        </>
    );
};

export default ListingDetails;

const styles = StyleSheet.create({
    image: {
        width: width,
        height: IMG_HEIGHT,
    },
});
