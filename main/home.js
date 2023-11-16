import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import {
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    Pressable,
    View,
    ScrollView,
    Dimensions
} from 'react-native';

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useFonts} from 'expo-font';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";



const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {

    // const onPressHandler = () => {
    //     // navigate to screen B
    const width = Dimensions.get('window').width
    const height = 220
    //     navigation.replace('Screen_B');
    // }
    let [fontsLoaded] = useFonts({
        'InterRegular': require('./assets/fonts/Inter-Regular.ttf'),
        'InterLight': require('./assets/fonts/Inter-Light.ttf'),
        'InterBold': require('./assets/fonts/Inter-Bold.ttf'),
        'RobotoLight': require('./assets/fonts/Roboto-Light.ttf'),
        'RobotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
        'RobotoRegular': require('./assets/fonts/Roboto-Regular.ttf')
    });
    let dataFromIot = [
        {
            data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
            ]
        }
    ]
  
    return (
        <ScrollView style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.topHeaderText}> Hey there, Justine!
                </Text>
                <View style={[styles.headerCard, styles.shadowProp]}>
                    <Text style={styles.cardTopText}>Avg. Daily Consumption ></Text>
                    <Text style={styles.cardMiddleText}>5.676 kWh</Text>
                    <Text style={styles.cardBotText}>As of 12:00 PM</Text>

                </View>
            </View>
            <View style={styles.main}>
                <Text style={styles.topMainText}> Daily Consumption</Text>
                {/* <View style={[styles.mainCard,styles.shadowProp]}> */}
                    <View style={styles.chartContainer}>
                        <BarChart
                            data={{
                                labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"],
                                datasets: dataFromIot
                            }}
                            width={width-75} // from react-native
                            height={220}
                            yAxisLabel=""
                            yAxisSuffix="kWh"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundGradientFrom: "orange",
                                backgroundGradientTo: "orange",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6k",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                }
                            }}
                            bezier
                            style={[styles.chart]}
                        />
                    </View>
                    <View style={[styles.graphCard, styles.shadowProp]}>
                        
                        <View style={styles.textCont}>
                            <Text>Monday</Text>
                            <Text>Mon</Text>
                        </View>
                        <View style={styles.textCont}>
                            <Text>Tue</Text>
                            <Text>January</Text>
                        </View>
                        <View style={styles.textCont}>
                            <Text>Wed</Text>
                            <Text>January</Text>
                        </View>
                        <View style={styles.textCont}>
                            <Text>Thu</Text>
                            <Text>January</Text>
                        </View>
                        <View style={styles.textCont}>
                            <Text>Sat</Text>
                            <Text>January</Text>
                        </View>
                    </View>
                {/* </View> */}
                
            </View>
        

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "orange",
    },
    topHeaderText: {
        fontSize: 20,
        
        fontWeight: "700",
        marginTop: 10,
        color: "white",
        marginBottom: 10,
    },
    header:{
        backgroundColor: "orange",
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    headerCard: {
        backgroundColor: "white",
        borderRadius:12,
        
        padding: 25,
        display: "flex",
        flexDirection: "column",
        rowGap: 3,

    },
    cardTopText: {
        fontSize: 16,
        fontWeight: "500",

    },
    cardBotText: {
        fontSize: 12,
    }, 
    cardMiddleText: {
        fontSize: 30,
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
    },
    topMainText: {
        fontSize: 20,
        fontFamily: 'RobotoRegular',
        fontWeight: "700",
        color: "white",
        marginBottom:10,
       
    },
    main: {
        padding: 20,   
        
    },
    // mainCard: {
    //     backgroundColor: "white",
    //     padding: 20,
        
    //     borderRadius: 12,
    // },
    chart: {
        borderRadius: 12,
    },
    
    chartContainer: {
        
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    
    graphCard: {
        padding: 20,
        backgroundColor: "white",
        borderRadius: 12,
        flex: 1,
        rowGap: 5,
    },
    textCont: {
        fontSize:16,
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
    }
})
