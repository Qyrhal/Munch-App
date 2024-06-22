import { View, Text } from 'react-native'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import React, { useCallback, forwardRef } from 'react'
export type Ref = BottomSheet

interface Props {
  title: string
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

  return (
    <BottomSheet
      index={1}
      ref={ref}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backgroundStyle={{ backgroundColor: 'rgba(230, 230, 230, 1)' }}
      backdropComponent={renderBackdrop}
    >
      <View>
        <Text>{props.title}</Text>
      </View>
    </BottomSheet>
  )
})

export default CustomBottomSheet
