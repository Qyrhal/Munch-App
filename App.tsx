import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { useState } from 'react';
import Dash from './app/Components/Dash';
import Card from './app/Components/Card';
import Card2 from './app/Components/Card2';
import Button from './app/Components/Button';
import SearchBar from './app/Components/SearchBar';
import HorizontalStack from './app/Components/HorizontalStack';
import Navbar from './app/Components/Navbar';
import 'tailwindcss/tailwind.css';

export default function App() {
  const [activeSearch, setActiveSearch] = useState(false);

  const data = [
    {
      name: 'KFC Zinger Box',
      price: '8.99',
      description: 'chicken',
      image:
        'https://tb-static.uber.com/prod/image-proc/processed_images/8fe82646a8a3f13b36e996a83752c618/97e6648b3593c29cb4a6335f976e6d84.jpeg',
    },
    {
      name: 'Potential',
      price: '8.99',
      description: 'subway',
      image:
        'https://media.cnn.com/api/v1/images/stellar/prod/230630103357-subway-beast-sandwich.jpg?c=original',
    },
    {
      name: 'KFC Zinger Box',
      price: '8.99',
      description: 'chicken',
      image:
        'https://tb-static.uber.com/prod/image-proc/processed_images/8fe82646a8a3f13b36e996a83752c618/97e6648b3593c29cb4a6335f976e6d84.jpeg',
    },
  ];

  return (
    // Main Viewing Container
    <View>
      <View style={{ paddingVertical: 16 }}></View>
      <SearchBar
        onPressIn={() => setActiveSearch(true)}
        onBlur={() => setActiveSearch(false)}
      />
      <Text style={{ marginBottom: 16, marginHorizontal: 12, fontSize: 24, fontWeight: 'bold', color: '#333' }}>
        Good Afternoon{' '}
        <View style={{ backgroundColor: '#3498db', borderRadius: 4, paddingHorizontal: 8 }}>
          <Text style={{ color: '#fff', fontSize: 24 }}>Avi</Text>
        </View>
      </Text>
      {!activeSearch ? (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <HorizontalStack data={data} />
          {/* <HorizontalStack />
          <HorizontalStack />
          <Navbar /> */}
          <Card2
            name='1/2 Chicken'
            group={['spicy', 'grilled', 'chicken', 'half']}
            price='29.00'
            image='https://foodiesterminal.com/wp-content/uploads/2019/08/just-like-nandos-peri-peri-chicken.jpg'
          />
        </ScrollView>
      ) : (
        <Text>search query</Text>
      )}
    </View>
  );
}
