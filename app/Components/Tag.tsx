import React from 'react'
import { View, Text } from 'react-native'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <View className='bg-gray-300 rounded-lg mx-1 px-2.5 py-0.5'>
      <Text className=' text-gray-800 text-xs font-medium'>
        {text ? text : 'tag'}
      </Text>
    </View>
  )
}

export default Tag
