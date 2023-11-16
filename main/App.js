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
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Main from './mainscreen.js';
import Login from './login.js';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Login'
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
      
  )

}