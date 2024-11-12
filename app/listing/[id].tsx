import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const ListingDetails = () => {
    // Use object destructuring to access the id parameter
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>ListingDetails</Text>
        </View>
    );
};

export default ListingDetails;
