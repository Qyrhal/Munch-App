import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BottomNavBar = () => {
  return (
    <View style={styles.navbar}>
      <Text>Home</Text>
      <Text>Profile</Text>
      <Text>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
})

export default BottomNavBar
