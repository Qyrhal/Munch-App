import React, { useCallback } from 'react'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View, Pressable } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import CustomBottomSheet from '../Components/CustomBottomSheet'
import { useDishStore } from '../Components/Context/ItemState'
import {
  Card,
  Card2,
  Dash,
  SearchBar,
  Button,
  HorizontalStack,
  Navbar,
} from '../Components'

const Homepage = () => {
  const { Dish, setDish } = useDishStore()
  const [ActiveSearch, setActiveSearch] = useState(false)

  const data = [
    {
      name: 'KFC Zinger Box',
      price: '8.99',
      description: 'chicken',
      image:
        'https://tb-static.uber.com/prod/image-proc/processed_images/8fe82646a8a3f13b36e996a83752c618/97e6648b3593c29cb4a6335f976e6d84.jpeg',
    },
    {
      name: 'Potential',
      price: '8.99',
      description: 'subway',
      image:
        'https://media.cnn.com/api/v1/images/stellar/prod/230630103357-subway-beast-sandwich.jpg?c=original',
    },
    {
      name: 'KFC Zinger Box',
      price: '8.99',
      description: 'chicken',
      image:
        'https://tb-static.uber.com/prod/image-proc/processed_images/8fe82646a8a3f13b36e996a83752c618/97e6648b3593c29cb4a6335f976e6d84.jpeg',
    },
  ]

  // bottom sheet

  const bottomSheetRef = React.useRef<BottomSheet>(null)

  const openBottomSheet = (props: any) => {
    const { name, price, group, image } = props
    setDish(props)
    bottomSheetRef.current?.snapToIndex(2)
  }

  return (
    // Main Viewing Container
    <View className='h-full'>
      <View className='py-4'></View>
      <SearchBar
        onPressIn={() => setActiveSearch(true)}
        onBlur={() => setActiveSearch(false)}
      />

      {!ActiveSearch ? (
        <ScrollView className='overflow-scroll h-full'>
          <Text className='mb-4 m-3 text-4xl font-extrabold tracking-tight text-gray-900 flex flex-col'>
            Good Afternoon{' '}
            <View className='bg-blue-500 rounded px-4'>
              <Text className=' text-white text-4xl'>Midhun</Text>
            </View>
          </Text>
          <HorizontalStack data={data} />
          {/* <HorizontalStack />
            <HorizontalStack />
            <Navbar /> */}

          <Card2
            name='1/2 Chicken'
            onPressHandle={openBottomSheet}
            group={['spicy', 'grilled', 'chicken', 'half']}
            price={29.99}
            image='https://foodiesterminal.com/wp-content/uploads/2019/08/just-like-nandos-peri-peri-chicken.jpg'
          />
          <Card2
            name='Potentially Wings'
            onPressHandle={openBottomSheet}
            group={['chicken', 'wings']}
            price={15.99}
            image='https://images.eatthismuch.com/img/174344_Venomfit681_aa763474-afa8-4954-9dbf-29884b2b0076.jpg'
          />
        </ScrollView>
      ) : (
        <Text>search query</Text>
      )}
      {Dish ? (
        <CustomBottomSheet
          ref={bottomSheetRef}
          title={Dish.name}
          image={Dish.image}
          price={Dish.price}
        />
      ) : null}
    </View>
  )
}

export default Homepage
