import { NativeWindStyleSheet } from 'nativewind'
import Homepage from './app/Homepage'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

// do routings and stuff here (multiple pages and views)
export default function App() {
  return (
    <GestureHandlerRootView>
      <Homepage />
    </GestureHandlerRootView>
  )
}

NativeWindStyleSheet.setOutput({
  default: 'native',
})
