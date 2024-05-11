import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View } from 'react-native'
import { useState } from 'react'
import Dash from './app/Components/Dash'
import Card from './app/Components/Card'
import Card2 from './app/Components/Card2'
import Button from './app/Components/Button'
import SearchBar from './app/Components/SearchBar'
import HorizontalStack from './app/Components/HorizontalStack'
import Navbar from './app/Components/Navbar'

export default function App() {
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

  return (
    // Main Viewing Container
    <View>
      <View className='py-4'></View>
      <SearchBar
        onPressIn={() => setActiveSearch(true)}
        onBlur={() => setActiveSearch(false)}
      />
      <Text className='mb-4 m-3 text-4xl font-extrabold tracking-tight text-gray-900 flex flex-col'>
        Good Afternoon{' '}
        <View className='bg-blue-500 rounded px-4'>
          <Text className=' text-white text-4xl'>Avi</Text>
        </View>
      </Text>
      {!ActiveSearch ? (
        <ScrollView className='overflow-scroll h-full'>
          <HorizontalStack data={data} />
          {/* <HorizontalStack />
          <HorizontalStack />
          <Navbar /> */}
          <Card2
            name='1/2 Chicken'
            group={['spicy', 'grilled', 'chicken', 'half']}
            price='29.00'
            image='https://foodiesterminal.com/wp-content/uploads/2019/08/just-like-nandos-peri-peri-chicken.jpg'
          />
        </ScrollView>
      ) : (
        <Text>search query</Text>
      )}
    </View>
  )
}
