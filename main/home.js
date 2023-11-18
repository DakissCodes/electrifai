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
import Ionicons from '@expo/vector-icons/Ionicons';

// firebase
import { firebase } from './config.js';


const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
    const Fetch = () => {
        const [measurement, updateMeasure] = useState([])
        // users var name, setUsers manipulate state
        const powerUsage = firebase.firestore().collections('power-usage')
        // grab collections from firebase "power-usage"

        useEffect(async () => {
            // runs every update
            powerUsage
                .onSnapshot(
                    // when new data arrives
                    querySnapshot => {
                        // grab data
                        const measurement = []
                        // array
                        querySnapshot.forEach((doc) => {
                            // for each object in collection
                            const { power, timestamp } = doc.data()
                            // set values from doc into power , timestamp
                            measurement.push({
                                // push to array doc id, power and timestamp
                                id: doc.id,
                                power,
                                timestamp
                            })
                        })
                        // update the state
                        updateMeasure(measurement)
                    }
                )
        })
   }



    // const onPressHandler = () => {
    //     // navigate to screen B
        //     
    const readings = Fetch;
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
                Math.random() * 100,
                Math.random() * 100
            ],
            labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat","Sun"]
        }
    ]
  
    return (
        <ScrollView style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.topHeaderText}> Hey there, Justine!
                </Text>
                <View style={[styles.headerCard, styles.shadowProp]}>
                    <Ionicons name={"flash-outline"} size={50} color={"green"} style={{marginTop: 12}}></Ionicons>
                    
                    <View style={styles.headerTextCont}>
                        <Text style={styles.cardTopText}>Avg. Daily Consumption</Text>
                        <Text style={styles.cardMiddleText}>5.676 kWh</Text>
                        <Text style={styles.cardBotText}>As of 12:00 PM</Text>
                    </View>
        


                </View>
            </View>
            <View style={styles.main}>
                <Text style={styles.topMainText}> Daily Consumption</Text>
                {/* <View style={[styles.mainCard,styles.shadowProp]}> */}
                    <View style={styles.chartContainer}>
                        <BarChart
                            data={{
                                labels: dataFromIot[0].labels,
                                datasets: dataFromIot
                            }}
                            width={width-50} // from react-native
                            height={220}
                            yAxisLabel=""
                            yAxisSuffix=" kWh"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundGradientFrom: "white",
                                backgroundGradientTo: "white",
                                decimalPlaces: 1, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgb(105,105,105) ${opacity})`,
                                labelColor: (opacity = 1) => `rgb(105,105,105)  ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                    fontWeight: "bold"
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "6",
                                    stroke: "black"
                                }
                            }}
                            bezier
                            style={[styles.chart]}
                        />
                    </View>
                    <View style={[styles.graphCard, styles.shadowProp]}>
                            <View style={{flexDirection: "row", columnGap: 12}}>
                                <Ionicons name={"analytics-outline"} size={25} color={"rgb(105,105,105)"}></Ionicons>
                                <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10, color:"rgb(105,105,105)"}}>Data</Text>
        
                            </View> 
                        {dataFromIot[0].data.map((item,index)=> (
                            <View style={styles.textCont}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#d16a1d" }}>{dataFromIot[0].labels[index]}</Text>
                                <Text style={{ fontSize: 16, color: "rgb(105,105,105)" }}key={index}>{item.toFixed(2)} kWh</Text>
                            </View>
                        ))}

                    </View>
                    <View style={[styles.billCard, styles.shadowProp]}>
                            <View style={{flexDirection: "row", columnGap: 12}}>
                            <Ionicons name={"calendar-outline"} size={25} color={"rgb(105,105,105)"}></Ionicons>
                            <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10, color:"rgb(105,105,105)"}}>Monthly Projection</Text>
        
                            </View> 
                            <View style={styles.textCont}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#d16a1d" }}>
                                    Projected Bill
                                </Text>
                                 <Text style={{ fontSize: 16, color: "rgb(105,105,105)" }}>
                                    P 15,000
                                </Text>
                                
                            </View>
                            <View style={styles.textCont}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#d16a1d" }}>
                                    Total Consumption
                                </Text>
                        <Text style={{ fontSize: 16, color: "rgb(105,105,105)" }}>
                                    699 kWh
                                </Text>
                                
                            </View>
                            <View style={styles.textCont}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#d16a1d" }}>
                                    Daily Ave. Consumption
                                </Text>
                        <Text style={{ fontSize: 16, color: "rgb(105,105,105)" }}>
                                    78 kWh
                                </Text>
                                
                            </View>
                    </View>
                
            </View>
        

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    body: {
        
        flex: 1,
    },
    topHeaderText: {
        fontSize: 20,
        
        fontWeight: "700",
        marginTop: 10,
        color: "white",
        marginBottom: 10,
    },
    header:{
        backgroundColor: "#d16a1d",
        padding: 20,
    },
    headerTextCont: {
        display: "flex",
        flexDirection: "column",
        rowGap: 3,
    },
    headerCard: {
        backgroundColor: "white",
        borderRadius:12,
        flexDirection: "row",
        columnGap: 15,
        padding: 25,

    },
    cardTopText: {
        fontSize: 16,
        fontWeight: "500",
        color: "rgb(105,105,105)"
    },
    cardBotText: {
        fontSize: 12,
        color: "rgb(105,105,105)"
    }, 
    cardMiddleText: {
        fontSize: 30,
        fontWeight: "600",
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
        color: "#d16a1d",
        marginBottom:10,
       
    },
    main: {
        padding: 20,   
        backgroundColor: "white",
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
    },
    billCard: {
        marginTop: 20,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 12,
        flex: 1,
        rowGap: 5,
    }
})
