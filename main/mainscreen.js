import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import {
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    Pressable,
    View
} from 'react-native';

import React, { useState, useEffect } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
// import js screen files
import HomeScreen from './home.js';
import TrackingScreen from './tracking.js';
import ProfileScreen from './profile.js';

// importing ionicons, available from expo already!
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';




const Tab = createMaterialBottomTabNavigator();

export default function Main() {
    let [fontsLoaded] = useFonts({
        'InterRegular': require('./assets/fonts/Inter-Regular.ttf'),
        'InterLight': require('./assets/fonts/Inter-Light.ttf'),
        'InterBold': require('./assets/fonts/Inter-Bold.ttf')
    });
    return (
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
                            iconName = 'bar-chart-outline';
                            size = focused ? 25 : 20;
                            color = focused ? '#d16a1d' : '#d16a1d'
                        } else if (route.name === 'Tracking') {
                            iconName = 'hardware-chip-outline';
                            size = focused ? 25 : 20;
                            color = focused ? '#d16a1d' : '#d16a1d'
                        } else if (route.name === 'Profile') {
                            iconName = 'person-outline';
                            size = focused ? 25 : 20;
                            color = focused ? '#d16a1d' : '#d16a1d'
                        }
                        return (
                            <Ionicons name={iconName} size={size} color={color}></Ionicons>
                        )
                    }
                }
                )}
                tabBarOptions={{
                    activeTintColor: '',
                    inactiveTintColor: 'white',
                    labelStyle: { fontSize: 16 }
                }}
                activeColor="#d16a1d"
                inactiveColor="#d16a1d"
                barStyle={{ 
                    backgroundColor: 'white',
                    borderRadius: 10,}}
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
                    name="Profile"
                    component={ProfileScreen}
                />
            </Tab.Navigator>
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