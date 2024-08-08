import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Define the props type
interface CardProps {
  title: string;
  description: string;
  style?: ViewStyle; // Add optional style prop
}

// Functional component with typed props
const Card: React.FC<CardProps> = ({ title, description, style }) => {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12, // Slightly more rounded corners
    padding: 20, // Increased padding for better readability
    marginVertical: 12, // Increased vertical margin for spacing
    marginHorizontal: 16, // Margin for spacing between cards
    shadowColor: '#000',
    shadowOpacity: 0.2, // Slightly stronger shadow
    shadowOffset: { width: 0, height: 4 }, // Increased shadow offset
    shadowRadius: 10, // Slightly larger shadow radius
    elevation: 4, // Increased elevation for Android
    alignItems: 'flex-start', // Align content to the left
    width: '100%', // Adjusted width to be responsive
    maxWidth: 500, // Max width to prevent exceeding the screen width
    height: 'auto', // Height set to auto to fit content
    overflow: 'hidden', // Contain content within the card
  },
  title: {
    fontSize: 20, // Larger font size for the title
    fontWeight: 'bold',
    marginBottom: 8, // More space between title and description
    flexShrink: 1, // Allow title to shrink to prevent overflow
  } as TextStyle,
  description: {
    fontSize: 40, 
    fontWeight: 'bold',
    color: '#000',
    flexShrink: 1, 
  } as TextStyle,
});
