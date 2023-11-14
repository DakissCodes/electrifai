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

export default function TrackingScreen({ navigation }) {
    const onPressHandler = () => {
        navigation.replace('Screen_A')

    }
    return (
        <View style={styles.body}>
            <Text sktyle={styles.text}>
                Screen B
            </Text>
            <Pressable onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? 'green' : 'blue' })}>
                <Text>
                    Screen A
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