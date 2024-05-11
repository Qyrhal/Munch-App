import { Text, View, TextInput, StyleSheet } from 'react-native'

const SearchBar = () => {
  return (
    <View className='my-7 mx-3'>
      <View className='flex flex-row items-center'>
        <TextInput
          className='rounded-full flex-grow rounded-tr-none rounded-br-none border-2 border-black p-4'
          placeholder='Search'
        />
        <View className='border-black  border-t-2 border-r-2 border-b-2 rounded-full rounded-bl-none rounded-tl-none p-4'>
          <Text className=''>Search</Text>
        </View>
      </View>
    </View>
  )
}

export default SearchBar
