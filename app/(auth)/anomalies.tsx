import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import StatsCard from '../../components/AnomalyCard';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnomalyCard from '@/components/AnomalyCard';

const Anomalies = () => {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.headerContainer}>
      <Ionicons name="warning" size={50} color="red" />
      <View style={styles.headerContent}>
        <Text style={styles.headerTitle}>Warning</Text>
        <Text style={styles.headerText}>
          There is an unusual increase in your electrical consumption over the past few weeks
        </Text>
      </View>
    </View>
    <Text style={styles.mainTitle}>Anomalies</Text>
    <AnomalyCard
      iconSource={require('../../assets/icons/subtract.png')}
      title="Anomaly Detection"
      mainText="+12 kWh"
      subText="+21.01% ↗"
      description="Detects increase in electrical consumption compared to average usage."
      chartSource={require('../../assets/icons/line-chart-blue.png')}
      onPressPath='/consumption-chart'
    />
    <AnomalyCard
      iconSource={require('../../assets/icons/vector.png')}
      title="Power Leak Detection"
      mainText="-9 kWh"
      subText="-7.69%"
      description="Spikes in electrical usage may hint a possible power leak."
      chartSource={require('../../assets/icons/line-chart-red.png')}
      onPressPath='/consumption-chart'
    />
      {/* Footer */}
      <View style={styles.footer}>
        <Image 
          source={require('../../assets/icons/check-fill.png')} style={{ width: 30, height: 30 }} 
          resizeMode='contain' />
        <Text style={styles.text}>All sensors are functioning.</Text>
      </View>
    </ScrollView>
  );
};

export default Anomalies;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#FFAC4A',
    padding: 20,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fef5f5",
    gap: 15,
    padding: 20,
    width: '80%',
    alignSelf: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerContent: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  headerText: {
    fontSize: 14,
    color: "black",
  },
  mainTitle: {
    fontSize: 17,
    marginBottom: 10,
    color: 'white',
  }, 
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
});
