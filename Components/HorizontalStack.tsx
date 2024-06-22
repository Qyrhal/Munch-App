import React from 'react'
import { ScrollView, View, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Card from './Card'
import CustomBottomSheet from '../Components/CustomBottomSheet'
import BottomSheet from '@gorhom/bottom-sheet'

interface Props {
  data: Array<any>
}

const HorizontalStack = ({ data }: Props) => {
  const bottomSheetRef = React.useRef<BottomSheet>(null)

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(2)
  }
  return (
    <ScrollView horizontal={true}>
      <View className='flex-1 flex-row items-center justify-center bg-white'>
        {data.map((item: any, i) => (
          <Pressable onPress={openBottomSheet} key={i}>
            <Card
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              key={i}
            />
          </Pressable>
        ))}

        <StatusBar style='auto' />
      </View>
    </ScrollView>
  )
}

export default HorizontalStack
