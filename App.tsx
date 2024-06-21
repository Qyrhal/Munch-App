import { NativeWindStyleSheet } from 'nativewind'

import Homepage from './app/Pages/Homepage'

// do routings and stuff here (multiple pages and views)
export default function App() {
  return <Homepage />
}

NativeWindStyleSheet.setOutput({
  default: 'native',
})
