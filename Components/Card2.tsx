import React from 'react'
import Picture from './Picture'
import Button from './Button'
import { View, Text, Pressable } from 'react-native'
import Tag from './Tag'
import { useDishStore } from './Context/ItemState'

interface Props {
  name: string
  group: Array<string> //limit group size to 4
  price: number
  image: string
  onPressHandle: (props: Props) => void
}

const Card2 = (props: Props) => {
  const { onPressHandle } = props
  return (
    <Pressable onPress={() => onPressHandle(props)}>
      <View className='m-3 rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800'>
        <Picture url={props.image} />
        <View className='p-5'>
          <Text className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {props.name}
          </Text>
          <View className='flex flex-row space-x-2'>
            <Text className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              {props.group.map((item: string, i) => (
                <Tag text={item} key={i} />
              ))}
            </Text>
            <Text>•</Text>
            <Text>${props.price}</Text>
          </View>
          <Button title='Order' onPress={() => console.log(`Order ${name}`)} />
        </View>
      </View>
    </Pressable>
  )
}

export default Card2
