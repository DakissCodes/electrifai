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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {

    // const onPressHandler = () => {
    //     // navigate to screen B
    //     navigation.replace('Screen_B');
    // }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Screen A
            </Text>
            <Pressable
                style={({ pressed }) => ({ backgroundColor: pressed ? 'green' : 'blue' })}>
                <Text>
                    Screen B
                </Text>

            </Pressable>



        </View>
    )
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
