import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const RestaurantRow = ({ restaurant, index }) => {
  const [showInfo, setShowInfo] = useState(false);
  const infoPressed = () => {
    setShowInfo((prev) => !prev);
  };

  return (
    <View>
      <View key={restaurant.id} style={styles.row}>
        <View style={styles.edges}>
          <Text>{index + 1}</Text>
        </View>
        <View style={styles.nameAndAddress}>
          <Text>{restaurant.name}</Text>
          <Text style={styles.address}>
            {restaurant.neighborhood} {restaurant.address}
          </Text>
        </View>
        <View style={styles.edges}>
          <TouchableOpacity
            onPress={infoPressed}
          >
            <Text>Info</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {showInfo &&
          <View>
            <Text>
              {restaurant.cuisine_type}
            </Text>
          </View>}
      </View>
    </View>
  )
    ;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  edges: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 50,
  },
  nameAndAddress: {
    flexDirection: 'column',
    flex: 8,
  },
  address: {
    color: 'gray',
  },
});

export default RestaurantRow;
