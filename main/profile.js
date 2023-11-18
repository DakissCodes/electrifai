import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import {
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    Pressable,
    View,
    Image,
    Touchable,
} from 'react-native';

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Login from './login.js';
const Stack = createStackNavigator();

export default function ProfileScreen() {
    const navigation = useNavigation();
    const onPressHandler = () => {
        navigation.navigate('Login')

        
    }

    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Image source={require("./assets/skies.jpg")}
                        style={styles.coverImg}
                ></Image>
                <Image source={require("./assets/id.jpeg")}
                style={styles.idImg} 
                ></Image>

                <View style={styles.userInfoCont}>
                    <Text style={styles.name}>Giannis Antetokounmpo</Text>
                    <View style={{justifyContent:"center", flexDirection:"row", columnGap: 5}}>
                        <Ionicons name={"pin-outline"} size={20} color={"white"}></Ionicons>
                        <Text style={styles.loc}>Manila, Philippines</Text>
                    </View>
                    
                </View>
            </View>
            <View style={{flex: 1, backgroundColor: 'white', padding: 30, rowGap: 20}}>
                <TouchableOpacity style={{columnGap: 40,flexDirection:"row"}}>
                    <Ionicons name={"call-outline"} size={40} color={"#d16a1d"}></Ionicons>
                        <View style={{}}>
                            <Text style={{fontSize: 20, color: "black", fontWeight: 600}}>+63 915 413 7270</Text>
                            <Text style={{color: "black"}}>Meralco Hotline</Text>
                            
                        </View>
                </TouchableOpacity>
                <TouchableOpacity style={{columnGap: 40,flexDirection:"row"}}>
                    <Ionicons name={"mail-outline"} size={40} color={"#d16a1d"}></Ionicons>
                        <View style={{}}>
                            <Text style={{fontSize: 20, color: "black", fontWeight: 600}}>meralcoassist@gmail.com</Text>
                            <Text style={{color: "black"}}>Meralco Email Address</Text>
                        </View>
                </TouchableOpacity>
                <View style={{flexDirection:"row", rowGap:40, justifyContent:"space-around", alignItems:"center", marginTop: 10,}}>
                    <TouchableOpacity style={[styles.profileBtn, styles.shadowProp]}>
                        <Ionicons name={"settings-outline"} size={30} color={"#d16a1d"}></Ionicons>
                        <Text style={{fontSize:14, fontWeight: "bold"}}>Settings</Text>
                    </TouchableOpacity>
            
                    <TouchableOpacity style={[styles.profileBtn, styles.shadowProp]} onPress={onPressHandler}>
                        <Ionicons name={"log-out-outline"} size={30} color={"#d16a1d"}></Ionicons>
                        <Text style={{fontSize:14, fontWeight: "bold"}}>Log out</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10
    },
    coverImg: {
        position: "absolute",
        height: 350,
        objectFit: "contain",
         
    },
    idImg: {
        height: 200,
        width: 200,
        borderRadius: 100,
        position: "absolute",
        borderWidth: 5,
        borderColor: "white",
        left: "50%",
        marginLeft: -100,
        top: 50,
        
    },
    header: {
        height: 350,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
        
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    loc: {
        fontSize: 18,
        color: "white",
        textAlign: "center"
    },
    userInfoCont: {
        marginBottom: 30,
        rowGap: 2,

    },
    profileBtn: {
        height: 75, 
        width: 150,
        backgroundColor: "white",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
    }
})