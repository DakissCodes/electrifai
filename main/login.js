import { useNavigation } from '@react-navigation/native';
import Main from './mainscreen.js';
import { StatusBar} from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onPressHandler = () => {
        navigation.navigate('Main')
        
    }
   return (
    <View style={styles.container}>
           {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}
           <StatusBar style="auto" />
           <View style={[styles.inputView, styles.shadowProp]}>
               <TextInput
                   style={styles.TextInput}
                   placeholder="Email."
                   placeholderTextColor="#003f5c"
                   onChangeText={(email) => setEmail(email)}
               />
           </View>
           <View style={[styles.inputView, styles.shadowProp]}>
               <TextInput
                   style={styles.TextInput}
                   placeholder="Password."
                   placeholderTextColor="#003f5c"
                   secureTextEntry={true}
                   onChangeText={(password) => setPassword(password)}
               />
           </View>
           <TouchableOpacity>
               <Text style={styles.forgot_button}>Forgot Password?</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={onPressHandler} style={styles.loginBtn}>
               <Text style={[styles.loginText, styles.shadowProp]}>LOGIN</Text>
           </TouchableOpacity>

    </View>
   ) 
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9F9F9",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        backgroundColor: "white",
        borderRadius: 7,
        width: "70%",
        height: 50,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 70,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    forgot_button: {
        height: 30,
        marginTop: 10,
        marginBottom: 10,
    },
    loginBtn: {
        width: 180,
        borderRadius: 7,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        
        backgroundColor: "orange",
    },

    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
    },

    loginText: {
        fontWeight: "bold",
        color: "white",
    },
});