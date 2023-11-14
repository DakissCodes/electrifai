import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  View
} from 'react-native';

import React, { useState } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import js screen files
import HomeScreen from './home.js';
import TrackingScreen from './tracking.js';
import ProfileScreen from './profile.js';

// importing ionicons, available from expo already!
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={({ route }) => ({
          // removes default header on top!
          // route refers to each screen
          // route.name is name=x in tab tag
          header: () => null,
          tabBarIcon: ({ focused, size, color }) => {
            // route is 
            let iconName;
            if (route.name === "Home") {
              // icon name from ionicons
              iconName = 'cloudy-outline';
              size = focused ? 25 : 20;
              color = focused ? 'white' : '#555'
            } else if (route.name === 'Tracking') {
              iconName = 'document-outline';
              size = focused ? 25 : 20;
              color = focused ? 'white' : '#555'
            } else if (route.name === 'Profile') {
              iconName = 'document-outline';
              size = focused ? 25 : 20;
              color = focused ? 'white' : '#555'
            }
            return (
              <Ionicons name={iconName} size={size} color={color}></Ionicons>
            )
          }
        }
        )}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: '#555',
          activeBackgroundColor: 'orange',
          inactiveBackgroundColor: 'white',
          labelStyle: { fontSize: 14 }

        }}
      >
        <Tab.Screen
          name="Home"
          // component refers to the file in which screen is located in 
          component={HomeScreen}
        />
        <Tab.Screen
          name="Tracking"
          component={TrackingScreen}
        />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  }
})