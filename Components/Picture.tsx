import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
// import { ImageSource } from 'react-native/Libraries/Image/ImageSource'

interface props {
  url: any
}

const Picture = ({ url }: props) => {
  return (
    <View>
      <Image
        className='rounded-lg rounded-bl-none rounded-br-none mb-2 w-full h-40'
        source={{ uri: url }}
      />
    </View>
  )
}

export default Picture
