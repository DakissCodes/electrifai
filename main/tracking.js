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

export default function TrackingScreen() {

    const anomaly = true
    const warningText = anomaly ? "There is an unusual increase in your electrical consumption over the past few weeks." : "There is no unusual increase in your electrical consumption over the past few weeks."
    const alertLogo = anomaly ? "warning-outline" : "checkmark-circle-outline"
    const alertHeader = anomaly? "Warning" : "You're safe!"
    const alertColor = anomaly ? "red" : "green"
    return (

        <View style={[styles.body, {justifyContent:"center"}]}>
            <TouchableOpacity style={[styles.alertCard, styles.shadowProp]}>
                <Text style={styles.alertText}>{alertHeader}</Text>
                <View style={styles.textCont}>
                    <Ionicons name={alertLogo} size={55} color={alertColor}></Ionicons>
                    <Text style={{flex: 1}}>{warningText}</Text>
                </View>

                <View style={{rowGap: 10, marginTop: 10}}>
                    <Text style={{fontWeight: "bold",}}>Possible Causes</Text>
                    <View style={{flexDirection:"row", columnGap: 20, alignItems:"center", display: "flex",}}>
                        <Ionicons name={"information-outline"} size={22} color={"rgb(105,105,105)"}></Ionicons>
                        <Text style={{ flex: 1, color: "rgb(105,105,105)" }}>Someone might be tapped on your power line.</Text>
                    </View>
                    <View style={{flexDirection:"row", columnGap: 20, alignItems:"center", display: "flex",}}>
                        <Ionicons name={"information-outline"} size={22} color={"rgb(105,105,105)"}></Ionicons>
                        <Text style={{ flex: 1, color: "rgb(105,105,105)" }}>Main line may have broken cables, faulty wirings and loose connections.</Text>
                    </View>
                    <View style={{flexDirection:"row", columnGap: 20, alignItems:"center", display: "flex",}}>
                        <Ionicons name={"information-outline"} size={22} color={"rgb(105,105,105)"}></Ionicons>
                        <Text style={{flex: 1, color: "rgb(105,105,105)"}}>It may be time to replace your old appliances.</Text>
                    </View>
                     
                    
                </View>


                
            </TouchableOpacity>
            <TouchableOpacity style={[styles.anomalyCard, styles.shadowProp]}>
                <View style={{ flexDirection: "row", columnGap: 12 }}>
                    <Ionicons name={"git-network-outline"} size={25} color={"rgb(105,105,105)"}></Ionicons>
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10, color: "rgb(105,105,105)" }}>Anomaly Detector</Text>
                </View> 
                <View style={{flexDirection:"row", columnGap: 20}}>
                    <View style={{justifyContent: "center"}}>
                        <Text style={{fontSize: 30, fontWeight: "bold"}}>
                            +12 Watts
                        </Text>
                        <Text style={{color: "red", fontWeight: "400"}}>
                        +11.09 %
                        </Text>    
                    </View>
                    <Ionicons name={"trending-up-outline"} size={100} color={"red"}></Ionicons>
                </View>
                <Text style={{ color: "rgb(105,105,105)" }}>Spikes in electrical usage may hint a possible power leak.</Text> 

            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        marginTop: 10,
        flex: 1,
        rowGap: 20,
        backgroundColor: "white",
        padding: 20,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
        color: "rgb(105,105,105)"
    },
    alertCard: {
        backgroundColor: "white",
        padding: 30,
        rowGap: 10,
        marginTop: 20,
        borderRadius: 12,
        display: "flex",
    },
    textCont: {
        
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
    anomalyCard: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 12,
    }
})