// CurrentConsumptionCard.tsx
import React from 'react';
import { StyleSheet, View, Text, ViewStyle, TextStyle } from 'react-native';

interface CurrentConsumptionCardProps {
  consumption: string; // The current consumption value
}

const CurrentConsumptionCard: React.FC<CurrentConsumptionCardProps> = ({ consumption }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Current Consumption</Text>
      <Text style={styles.value}>{consumption} kWh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%', // Full width
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  } as ViewStyle,
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  } as TextStyle,
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  } as TextStyle,
});

export default CurrentConsumptionCard;
