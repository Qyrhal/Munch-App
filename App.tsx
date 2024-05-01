import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // Main Viewing Container
    <View style={styles.container}> 
      <Text style={styles.header}>Yo Yo</Text>
      <Text>Avi is a babe</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: '#000',
    margin: 0, 
    position: 'relative',
    top: 0,
  },
});