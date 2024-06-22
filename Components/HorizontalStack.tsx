import React from 'react'
import { ScrollView, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Card from './Card'

interface Props {
  data: Array<any>
}

const HorizontalStack = ({ data }: Props) => {
  return (
    <ScrollView horizontal={true}>
      <View className='flex-1 flex-row items-center justify-center bg-white'>
        {data.map((item: string) => (
          <Card
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}

        <StatusBar style='auto' />
      </View>
    </ScrollView>
  )
}

export default HorizontalStack
