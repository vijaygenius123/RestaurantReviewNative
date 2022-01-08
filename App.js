/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/yoobi55/5d36f13e902a75225a39a8caa5556551/raw/cbd57cfdddbdfc009fd9ccdadf5fb7129af71c73/restaurant-data.json',
    )
      .then((resp) => resp.json())
      .then((data) => setRestaurants(data.restaurants));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={{ flex: 1 }}>
        <Text style={styles.header}>Restaurant Review</Text>
        {restaurants.map((restaurant, index) => (
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
              <Text>Info</Text>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#0066cc',
    fontSize: 30,
    fontWeight: '300',
  },
  row: {
    flexDirection: 'row',
  },
  edges: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameAndAddress: {
    flexDirection: 'column',
    flex: 8,
  },
  address: {
    color: 'gray',
  },
});

export default App;
