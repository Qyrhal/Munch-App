import React from 'react'
import Picture from './Picture'
import Button from './Button'
import { View, Text } from 'react-native'
import Tag from './Tag'

interface Props {
  name: string
  group: Array<string> //limit group size to 4
  price: string
  image: string
}

const Card2 = ({ name, group, price, image }: Props) => {
  return (
    <View className='m-3 rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800'>
      <Picture url={image} />
      <View className='p-5'>
        <Text className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {name}
        </Text>
        <View className='flex flex-row space-x-2'>
          <Text className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {group.map((item: string) => (
              <Tag text={item} />
            ))}
          </Text>
          <Text>•</Text>
          <Text>${price}</Text>
        </View>
        <Button title='Order' onPress={() => console.log(`Order ${name}`)} />
      </View>
    </View>
  )
}

export default Card2
