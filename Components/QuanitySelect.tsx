import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useQuanityStore } from './Context/ItemState'

const QuanitySelect = () => {
  const { Quanity, setQuanity } = useQuanityStore()

  const onAdd = () => {
    setQuanity(Quanity + 1)
  }

  const onSubtract = () => {
    setQuanity(Quanity - 1)
  }

  return (
    <View className='py-2 px-3  bg-white rounded-md flex-row'>
      <Pressable onPress={onSubtract}>
        <View className='items-center  basis-1/7' style={{}}>
          <Text style={styles.text}>-</Text>
        </View>
      </Pressable>
      <View className='items-center  basis-1/3' style={{}}>
        <Text style={styles.text}>{Quanity}</Text>
      </View>
      <Pressable onPress={onAdd}>
        <View className='items-center  basis-1/7' style={{}}>
          <Text style={styles.text}>+</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default QuanitySelect

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },

  text: {
    fontSize: 30,
  },
})
