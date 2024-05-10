import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    // Main Viewing Container

    <View className='flex-1 items-center justify-center bg-white'>
      <Text>Hello Worlds</Text>
      <StatusBar style='auto' />
    </View>
  )
}
