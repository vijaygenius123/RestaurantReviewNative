import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, TextInput, FlatList } from 'react-native';
import Header from 'components/Header';
import RestaurantRow from './src/components/RestaurantRow';

const App = () => {
  const [search, setSearch] = useState('');
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
        <Header />
        <TextInput
          style={styles.input}
          placeholder={'Search'}
          onChangeText={text => setSearch(text)}
        />
        <FlatList
          data={restaurants.filter(place => {
            return !search || place.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
          })}
          renderItem={({ item, index }) => <RestaurantRow restaurant={item} index={index} />}
          keyExtractor={item => item.name}
          initialNumToRender={5}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  input: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
});

export default App;
