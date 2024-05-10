import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
// import { ImageSource } from 'react-native/Libraries/Image/ImageSource'

const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 180,
    resizeMode: 'stretch',
  },
})

interface props {
  url: any
}

const Picture = ({ url }: props) => {
  return (
    <View>
      <Image
        className='rounded-lg mb-2'
        style={styles.stretch}
        source={{ uri: url }}
      />
    </View>
  )
}

export default Picture
