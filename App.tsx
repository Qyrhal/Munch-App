import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View } from 'react-native'
import Dash from './app/Components/Dash'
import Card from './app/Components/Card'
import Button from './app/Components/Button'

export default function App() {
  return (
    // Main Viewing Container
    <ScrollView horizontal={true}>
      <View className='flex-1 flex-row items-center justify-center bg-white'>
        <Card
          name='KFC Zinger Box'
          price='8.99'
          description='chicken'
          image='https://tb-static.uber.com/prod/image-proc/processed_images/8fe82646a8a3f13b36e996a83752c618/97e6648b3593c29cb4a6335f976e6d84.jpeg'
        />
        <Card
          name='KFC Zinger Box'
          price='8.99'
          description='chicken'
          image='https://tb-static.uber.com/prod/image-proc/processed_images/8fe82646a8a3f13b36e996a83752c618/97e6648b3593c29cb4a6335f976e6d84.jpeg'
        />
        <Card
          name='KFC Zinger Box'
          price='8.99'
          description='chicken'
          image='https://tb-static.uber.com/prod/image-proc/processed_images/8fe82646a8a3f13b36e996a83752c618/97e6648b3593c29cb4a6335f976e6d84.jpeg'
        />
        <Card
          name='KFC Zinger Box'
          price='8.99'
          description='chicken'
          image='https://tb-static.uber.com/prod/image-proc/processed_images/8fe82646a8a3f13b36e996a83752c618/97e6648b3593c29cb4a6335f976e6d84.jpeg'
        />
        <Card
          name='KFC Zinger Box'
          price='8.99'
          description='chicken'
          image='https://tb-static.uber.com/prod/image-proc/processed_images/8fe82646a8a3f13b36e996a83752c618/97e6648b3593c29cb4a6335f976e6d84.jpeg'
        />

        <StatusBar style='auto' />
      </View>
    </ScrollView>
  )
}
