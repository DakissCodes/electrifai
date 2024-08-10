import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Alert } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

const ConsumptionChart = () => {

  // Fetch data
  useEffect(() => {
    // fetch data for the chart
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.chartContainer}>
        <Text style={styles.title}>Lorem ipsum</Text>
        <LineChart
          data={{
            labels: ["July", "Aug", "Sep", "Oct", "Nov", "Dec"], // Months
            datasets: [
              {
                data: [20, 40, 13, 20, 30, 40], // Consumption
                color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // Blue
              },

            ],
          }}
          width={Dimensions.get("window").width + 60}
          height={300}
          yAxisSuffix=" kWh"
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            fillShadowGradientFrom: "#4050E7",
            fillShadowGradientFromOpacity: 0.7,
            fillShadowGradientTo: "white",
            fillShadowGradientToOpacity: 0.5,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "3",
              strokeWidth: "1",
              stroke: "blue",
            },
          }}
          bezier
          style={{
            marginVertical: 0,
            borderRadius: 16,
          }}
          xLabelsOffset={-10}
          onDataPointClick={({ value, index }) => {
            console.log(value, index);
          }}
          withShadow={true}
          
        />
      </View>

      <View style={styles.infoContainer}>

        <View style={styles.warningContainer}>
          <Ionicons name="warning" size={24} color="red" />
          <View style={styles.warningContent}>
            <Text style={styles.warningTitle}>Increase in Consumption</Text>
            <Text style={styles.warningText}>
              Your consumption has increased by 30% compared to last
            </Text>
          </View>
        </View>

        <View style={styles.possibleCausesContainer}>
          <Text style={styles.possibleCausesTitle}>Possible Causes</Text>
          <View style={styles.causeItem}>
            <Ionicons name="information-circle-outline" size={24} color="black" />
            <Text style={styles.causeText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </View>
          <View style={styles.causeItem}>
            <Ionicons name="information-circle-outline" size={24} color="black" />
            <Text style={styles.causeText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </View>
        </View>

      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30
  },
  chartContainer: {
    marginLeft: 20
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoContainer: {
    margin: 20,
    padding: 10,
    borderRadius: 10,
    // shadow effect for border
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }, 
  warningContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fef5f5",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 0,
  },
  warningContent: {
    flex: 1,
    flexDirection: "column",
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  warningText: {
    fontSize: 14,
    color: "black",
  },
  possibleCausesContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  possibleCausesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  causeItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  causeText: {
    marginLeft: 10,
    fontSize: 14,
    color: "black",
    flexShrink: 1,
  },
});

export default ConsumptionChart;
