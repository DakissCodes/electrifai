import React, { useState } from 'react';
import { StyleSheet, 
  Dimensions,
  FlatList,
  ViewStyle,
  TextStyle,
  Text, 
  View, 
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useSession } from '../../ctx';
import Card from '@/components/Card'; // Import the Card component
import { BarChart } from 'react-native-chart-kit'; // Import the chart component
import Svg, { Rect } from 'react-native-svg';
import ModalThemed from "@/components/ModalThemed"
import { isNewWebImplementationEnabled } from 'react-native-gesture-handler/lib/typescript/EnableNewWebImplementation';

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
  const [isVisible, setIsVisible] = useState(false)
  // visible hook for modal

  const handleModalPress =  () => {
    setIsVisible(!isVisible)
  }

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
    <View style={styles.homeMainContainer}>
    {/* added scrollview */}
      <ScrollView>
        <Text style={[styles.greeting, styles.paddingSmall]}>Hello, {session}!</Text>

          <FlatList

            horizontal
            ItemSeparatorComponent={() => <View style={{ width:15 }} />}
            // Use this for adding separation between Flatlist items instead
            data={data}
            renderItem={({ item }: { item: CardData }) => (
              <TouchableOpacity style={{elevation:1}}
              onPress={handleModalPress}
              >
                <Card style={styles.card} title={item.title} description={item.description} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id} // Use unique id as the key
            showsHorizontalScrollIndicator={false} // Hide the scroll indicator for a cleaner look
            
            snapToOffsets={[width,width - 15, width]}
            snapToEnd={true}
            // different snapping intervals for each page
            snapToAlignment='center'
            pagingEnabled
            decelerationRate="fast"
            contentContainerStyle={styles.flatListContent} // Add content container style for spacing
          />


        <View style={[styles.chartContainer, styles.paddingSmall]}>
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


      </ScrollView>
      
        <ModalThemed
        isVisible = {isVisible}
        handleModalPress = {handleModalPress}
        avgDailyConsumption={5.67}
        currentTime={"5.40 PM"}
        // handle back clicks
        ></ModalThemed>
    {/* seperated a main container to facilitate home screen padding */}

    </View>
  );
}

const styles = StyleSheet.create({
  paddingSmall: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  homeMainContainer: {
    flex: 1, 
    // padding: 15,
    alignItems: 'center', // Center align items horizontally
    justifyContent: 'flex-start', // Align items to the top
  } as ViewStyle,
  greeting: {
    fontSize: 22, 
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'left', // Align text to the left
  } as unknown as TextStyle,
  card: {
    width: width-30, // card size == width of device - extra padding (30)
    // height: 200, // Consistent height for cards
    // marginHorizontal: 8, // Space between items
    backgroundColor: "#FFB315",
  } as ViewStyle,
  flatListContent: {
    
    // backgroundColor: "red",

    // elevation: 2,
    paddingHorizontal: 15, // No extra horizontal padding
  } as ViewStyle,
  tContainer: {
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
