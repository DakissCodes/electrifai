import React, { useState } from 'react';
import { StyleSheet, Dimensions, FlatList, ViewStyle, TextStyle, Text, View, TouchableOpacity } from 'react-native';
import { useSession } from '../../ctx';
import Card from '@/components/Card'; // Import the Card component
import { BarChart } from 'react-native-chart-kit'; // Import the chart component
import Svg, { Rect } from 'react-native-svg';

const { width } = Dimensions.get('window');

interface CardData {
  id: string; // Unique ID for each item
  title: string;
  description: string;
}

const data: CardData[] = [
  { id: '1', title: 'Average Daily Consumption', description: '5.67 kWh' },
  { id: '2', title: 'Average Daily Consumption', description: '50.67 kWh' },
  { id: '3', title: 'Average Daily Consumption', description: '500.67 kWh' },
];

const monthlyConsumptionData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [120, 140, 110, 150, 170, 200, 220, 190, 210, 180, 160, 175],
      color: (opacity = 1) => `rgba(255, 179, 21, ${opacity})`, // Modern color inspired by #FFB315
      strokeWidth: 2 // Optional: customize stroke width
    }
  ]
};

export default function HomeScreen() {
  const { session } = useSession();

  const [tooltip, setTooltip] = useState<{ x: number; y: number; value: number } | null>(null);

  const handleBarPress = (event: any) => {
    const { x, y } = event.nativeEvent;
    // Find the index of the bar that was pressed
    const index = Math.floor(x / (width - 32) / 12);
    if (index >= 0 && index < monthlyConsumptionData.datasets[0].data.length) {
      setTooltip({
        x,
        y,
        value: monthlyConsumptionData.datasets[0].data[index],
      });
    }
  };

  const renderTooltip = () => {
    if (!tooltip) return null;
    return (
      <View style={[styles.tooltip, { left: tooltip.x, top: tooltip.y }]}>
        <Text style={styles.tooltipText}>{`${tooltip.value} kWh`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, {session}!</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }: { item: CardData }) => (
          <Card style={styles.card} title={item.title} description={item.description} />
        )}
        keyExtractor={(item) => item.id} // Use unique id as the key
        showsHorizontalScrollIndicator={false} // Hide the scroll indicator for a cleaner look
        snapToInterval={350} // Adjust based on card width
        decelerationRate="fast"
        contentContainerStyle={styles.flatListContent} // Add content container style for spacing
      />
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Monthly Consumption</Text>
        <TouchableOpacity style={styles.chartWrapper} onPress={handleBarPress}>
          <BarChart
            data={monthlyConsumptionData}
            width={width - 32} // Adjust width based on padding and container
            height={220}
            yAxisLabel="" // Optional: Customize y-axis label prefix
            yAxisSuffix="kWh" // Add the suffix for the y-axis labels
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 179, 21, ${opacity})`, // Bar color
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
              style: {
                borderRadius: 16,
                borderColor: '#FFB315', // Border color for modern look
                borderWidth: 2, // Border width
                paddingRight: 0,
              },
              propsForLabels: {
                fontSize: 12,
              },
            }}
            verticalLabelRotation={30} // Optional: Rotate labels for better fit
          />
          {renderTooltip()}
        </TouchableOpacity>
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
    backgroundColor: "#FFB315",
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
  chartWrapper: {
    position: 'relative',
  } as ViewStyle,
  tooltip: {
    position: 'absolute',
    backgroundColor: '#FFB315',
    padding: 8,
    borderRadius: 4,
    elevation: 3,
  } as ViewStyle,
  tooltipText: {
    color: '#fff',
    fontSize: 12,
  } as TextStyle,
});
