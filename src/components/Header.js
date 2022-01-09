import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <Text style={styles.header}>Restaurant Review</Text>
  )
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#0066cc',
    fontSize: 30,
    fontWeight: '300',
  },
})

export default Header
