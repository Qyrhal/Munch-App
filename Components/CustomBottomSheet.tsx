import {
  Pressable,
  StyleSheet,
  Text,
  Image,
  View,
  useWindowDimensions,
  TextInput,
} from 'react-native'

import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import React, { useCallback, forwardRef } from 'react'
import { useQuanityStore } from './Context/ItemState'
import QuanitySelect from './QuanitySelect'
export type Ref = BottomSheet

interface Props {
  title: string
  image: string
  price: number
}

const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const snapPoints = ['30%', '50%', '75%', '100%']
  const bottomSheetRef = React.useRef<BottomSheet>(null)

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(2)
  }

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      ></BottomSheetBackdrop>
    ),
    []
  )
  const { width } = useWindowDimensions()

  const { Quanity } = useQuanityStore()

  return (
    <BottomSheet
      index={1}
      ref={ref}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backgroundStyle={{ backgroundColor: '#ffe7cf' }}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: props.image }}
            style={[styles.image, { width: width * 0.9 }]}
          />
        </View>
        <Text style={styles.title}>{props.title}</Text>
        <View className='pb-5'>
          <Text style={styles.text}>${props.price * Quanity}</Text>
        </View>
        {/* Input Number */}
        <QuanitySelect />
        {/* End Input Number */}
        <Pressable onPress={() => console.log('PRESS')}>
          <View style={[styles.button, { width: width * 0.9 }]}>
            <Text style={styles.textButton}>Add to Cart</Text>
          </View>
        </Pressable>
      </View>
    </BottomSheet>
  )
})

export default CustomBottomSheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#ffe7cf',
  },
  imageContainer: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    height: undefined,
    aspectRatio: 16 / 9,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 16,
    color: 'black',
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginHorizontal: 28,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#df7007',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 32,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
