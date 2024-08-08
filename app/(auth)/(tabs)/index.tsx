import React from 'react';
import { StyleSheet, Dimensions, FlatList, ViewStyle, TextStyle, Text, View } from 'react-native';
import { useSession } from '../../ctx';
import Card from '@/components/Card'; // Import the Card component

const { width } = Dimensions.get('window');

interface CardData {
  id: string; // Unique ID for each item
  title: string;
  description: string;
}

const data: CardData[] = [
  { id: '1', title: 'Avg. Daily Consumption', description: '5.67 kWh' },
  { id: '2', title: 'Avg. Daily Consumption', description: '50.67 kWh' },
  { id: '3', title: 'Avg. Daily Consumption', description: '500.67 kWh' },
];

export default function HomeScreen() {
  const { session } = useSession();

  const renderItem = ({ item }: { item: CardData }) => (
    <Card style={styles.card} title={item.title} description={item.description} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hey there, {session}!</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} // Use unique id as the key
        showsHorizontalScrollIndicator={true} // Show the scroll indicator if needed
        snapToInterval={150} // Adjust based on card width
        decelerationRate="fast"
        contentContainerStyle={styles.flatListContent} // Add content container style for spacing
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start', // Align items to the left
    justifyContent: 'flex-start', // Align items to the top
    padding: 16,
  } as ViewStyle,
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'left', // Align text to the left
  } as TextStyle,
  card: {
    width: 350, // Adjusted width for smaller cards
    height: 150, // Adjusted height for smaller cards
    marginRight: 16, // Space between items
  } as ViewStyle,
  flatListContent: {
    paddingHorizontal: 0, // No extra horizontal padding
  } as ViewStyle,
});
