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
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator();

export default function TrackingScreen({ navigation }) {
    const onPressHandler = () => {
        navigation.replace('Screen_A')

    }
    const anomaly = true
    const warningText = anomaly ? "There is an unusual increase in your \nelectrical consumption over the \npast few weeks." : "There is no unusual increase in your \nelectrical consumption over the \npast few weeks."
    const alertLogo = anomaly ? "warning-outline" : "checkmark-circle-outline"
    const alertHeader = anomaly? "Warning" : "You're safe!"
    const alertColor = anomaly ? "red" : "green"
    return (

        <View style={styles.body}>
            <View style={[styles.alertCard, styles.shadowProp]}>
                <Text style={styles.alertText}>{alertHeader}</Text>
                <View style={styles.textCont}>
                    <Ionicons name={alertLogo} size={60} color={alertColor}></Ionicons>
                    <Text>{warningText}</Text>
                </View>
        
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        rowGap: 20,
        backgroundColor: "#d16a1d",
        padding: 20,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10
    },
    alertCard: {
        backgroundColor: "white",
        padding: 30,
        rowGap: 10,
        marginTop: 20,

        height: 170,
        borderRadius: 12,
        
    },
    textCont: {
        fontSize: 16,
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        columnGap: 10,
    },
    alertText: {
        fontSize: 20,
        fontWeight: "bold",
        
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
    },
})