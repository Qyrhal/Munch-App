import { Text, View } from 'react-native'
import Button from './Button'
import Picture from './Picture'

interface props {
  name: string
  price: string
  description: string
  image: string
}

const Card = ({ name, price, description, image }: props) => {
  return (
    <View className='max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800'>
      <View className='p-5'>
        <Picture url={image} />
        <Text className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {name}
        </Text>
        <View className='flex flex-row space-x-2'>
          <Text className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {description}
          </Text>
          <Text>•</Text>
          <Text>${price}</Text>
        </View>
        <Button title='Order' onPress={() => console.log(`Order ${name}`)} />
      </View>
    </View>
  )
}

export default Card
