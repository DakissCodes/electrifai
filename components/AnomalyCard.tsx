import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { Href, router } from 'expo-router';

interface StatsCardProps {
  iconSource: ImageSourcePropType;
  title: string;
  mainText: string;
  subText: string;
  description: string;
  chartSource: ImageSourcePropType;
  onPressPath: Href<string | object>;
}

const AnomalyCard = ({ iconSource, title, mainText, subText, description, chartSource, onPressPath }: StatsCardProps) => {
  return (
    <TouchableOpacity onPress={() => router.replace(onPressPath)}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={iconSource} style={styles.icon} resizeMode='contain' />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.statistic}>Statistic</Text>
          </View>
        </View>
        <Text style={styles.mainText}>{mainText}</Text>
        <Text style={styles.subText}>{subText}</Text>
        <Text style={styles.description}>{description}</Text>
        <Image source={chartSource} style={styles.chartImage} resizeMode='contain' />
      </View>
    </TouchableOpacity>
  );
};

export default AnomalyCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statistic: {
    fontSize: 13,
    color: 'gray',
  },
  mainText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: '#FF4500',
    marginLeft: 6,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  chartImage: {
    position: 'absolute',
    right: 20,
    top: 20,
    height: 120,
    width: 120,
  },
});
