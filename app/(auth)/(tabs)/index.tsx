import React from 'react';
import { StyleSheet, Dimensions, FlatList, ViewStyle, TextStyle, Text, View } from 'react-native';
import { useSession } from '../../ctx';
import Card from '@/components/Card'; // Import the Card component
import CurrentConsumptionCard from '@/components/CurrentConsumptionCard'; // Import the CurrentConsumptionCard component
import { LineChart } from 'react-native-chart-kit'; // Import the chart component

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

const monthlyConsumptionData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [120, 140, 110, 150, 170, 200, 220, 190, 210, 180, 160, 175] // Sample data for kWh consumption
    }
  ]
};

export default function HomeScreen() {
  const { session } = useSession();

  // Dummy current consumption value for demonstration
  const currentConsumption = '75.32';

  const renderItem = ({ item }: { item: CardData }) => (
    <Card style={styles.card} title={item.title} description={item.description} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, {session}!</Text>
      <CurrentConsumptionCard consumption={currentConsumption} /> {/* Add the CurrentConsumptionCard here */}
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} // Use unique id as the key
        showsHorizontalScrollIndicator={false} // Hide the scroll indicator for a cleaner look
        snapToInterval={350} // Adjust based on card width
        decelerationRate="fast"
        contentContainerStyle={styles.flatListContent} // Add content container style for spacing
      />
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Monthly Consumption</Text>
        <LineChart
          data={monthlyConsumptionData}
          width={width - 32} // Adjust width based on padding and container
          height={220}
          yAxisLabel="kWh"
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Center align items horizontally
    justifyContent: 'flex-start', // Align items to the top
    padding: 16,
  } as ViewStyle,
  greeting: {
    fontSize: 22, 
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'left', // Align text to the left
  } as unknown as TextStyle,
  card: {
    width: width - 32, // Adjusted width to fit mobile screen better
    height: 200, // Consistent height for cards
    marginHorizontal: 8, // Space between items
  } as ViewStyle,
  flatListContent: {
    paddingHorizontal: 0, // No extra horizontal padding
  } as ViewStyle,
  chartContainer: {
    marginTop: 24,
    width: '100%',
    alignItems: 'center',
  } as ViewStyle,
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  } as TextStyle,
});
