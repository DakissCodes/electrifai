import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import {
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    Pressable,
    View,
    ScrollView,
    Dimensions,
    
} from 'react-native';



import React, { useState , useEffect, forEach} from 'react';
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

import { getDatabase, ref, onValue } from "firebase/database";

const database = getDatabase()

const Stack = createStackNavigator();
const date = new Date();
let day = date.getDay();

export default function HomeScreen({ navigation }) {
    let dailyMeasure = []
    let avgConsumptionDay
    if (dailyMeasure.length == 48) {
        avgConsumptionDay = dailyMeasure.reduce((a,b) => {
            return a + b
        })
        dataFromIot[0].data[day] = avgConsumptionDay;
    }
    
    const [measurement, updateMeasure] = useState({})
    
    let volt
    let current
    let power

    useEffect(() => {
        // runs every update
        const powerUsageRef = ref(database, 'power-usage/' + 'reading/');
        let tempArray = [] 
        onValue(powerUsageRef, (snapshot) => {
            const directory = snapshot.val();
            
            let keys = Object.keys(directory)
            // all keys
            // console.log(keys)
            let lastKey = keys[keys.length - 1]
            // last key
            console.log(lastKey)

            let data = directory[lastKey];
            // grab object data
            
            updateMeasure(data)
            console.log(data)
        })
            
    },[])
    
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // This is the cleanup function to clear the interval when the component unmounts
    }, []);

    
    
    const width = Dimensions.get('window').width
    //     navigation.replace('Screen_B');
    // }
    let [fontsLoaded] = useFonts({
        'InterRegular': require('./assets/fonts/Inter-Regular.ttf'),
        'InterLight': require('./assets/fonts/Inter-Light.ttf'),
        'InterBold': require('./assets/fonts/Inter-Bold.ttf'),

    });
    let dataFromIot = [
        { 
            data: [
                12,
                10,
                11,
                14,
                15,
                12,
                18,
                
            ],
            labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"]
        }
    ]
    // Fetch()
    return (
        <ScrollView style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.topHeaderText}> Hey there, Justine!
                </Text>
                <TouchableOpacity style={[styles.headerCard, styles.shadowProp]}>
                    <Ionicons name={"flash-outline"} size={49} color={"green"} style={{marginTop: 14}}></Ionicons>
                                <View style={styles.headerTextCont}>
                                    <Text style={styles.cardTopText}>Real Time Consumption</Text>
                                    <Text style={styles.cardMiddleText}>{power = measurement.power ? measurement.power: '...'} Watts</Text>
                                    <Text style={styles.cardBotText}>As of {time.toLocaleString()}</Text>
                                </View>
                </TouchableOpacity>
                <View style={{flexDirection: "row", columnGap: 20}}>
                    <TouchableOpacity style={[{backgroundColor: "white", padding: 20, marginTop: 20, borderRadius: 12, flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}, styles.shadowProp]}>
                        <Ionicons name={"swap-vertical-outline"} size={24} color={"red  "} ></Ionicons>
                        <Text style={{ fontSize: 20, fontWeight: "bold"}}>{volt = measurement.volt ? measurement.volt: '...'} V</Text>
        
            
                    </TouchableOpacity>
                    <TouchableOpacity style={[{backgroundColor: "white", padding: 20, marginTop: 20, borderRadius: 12, flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}, styles.shadowProp]}>
                        <Ionicons name={"pulse-outline"} size={24} color={"blue"}></Ionicons>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>{current = measurement.current ? measurement.current: '...'} A</Text>
            
                    </TouchableOpacity>
                    
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
                    <TouchableOpacity style={[styles.graphCard, styles.shadowProp]}>
                            <View style={{flexDirection: "row", columnGap: 12}}>
                                <Ionicons name={"analytics-outline"} size={25} color={"rgb(105,105,105)"}></Ionicons>
                                <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10, color:"rgb(105,105,105)"}}>Data</Text>
        
                            </View> 
                        {dataFromIot[0].data.map((item,index)=> (
                            <View style={styles.textCont} key={index}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#d16a1d" }}>{dataFromIot[0].labels[index]}</Text>
                                <Text style={{ fontSize: 16, color: "rgb(105,105,105)" }}>{item.toFixed(2)} kWh</Text>
                            </View>
                        ))}

                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.billCard, styles.shadowProp]}>
                            <View style={{flexDirection: "row", columnGap: 12}}>
                            <Ionicons name={"calendar-outline"} size={25} color={"rgb(105,105,105)"}></Ionicons>
                            <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10, color:"rgb(105,105,105)"}}>Monthly Projection</Text>
        
                            </View> 
                            <View style={styles.textCont}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#d16a1d" }}>
                                    Current Rate (per kWh)
                                </Text>
                                 <Text style={{ fontSize: 16, color: "rgb(105,105,105)" }}>
                                    ₱ 11.91
                                </Text>
                                
                            </View>
                            <View style={styles.textCont}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#d16a1d" }}>
                                    Projected Bill
                                </Text>
                                 <Text style={{ fontSize: 16, color: "rgb(105,105,105)" }}>
                                    ₱ 4,893
                                </Text>
                                
                            </View>
                            <View style={styles.textCont}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#d16a1d" }}>
                                    Total Consumption
                                </Text>
                        <Text style={{ fontSize: 16, color: "rgb(105,105,105)" }}>
                                    123 kWh
                                </Text>
                                
                            </View>
                            <View style={styles.textCont}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#d16a1d" }}>
                                    Daily Ave. Consumption
                                </Text>
                        <Text style={{ fontSize: 16, color: "rgb(105,105,105)" }}>
                                    11.2 kWh
                                </Text>
                                
                            </View>
                    </TouchableOpacity>
                
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
        marginTop: 25, 
        fontWeight: "700",
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
    },
    measurementText: {
        fontSize: 16,
        color: "rgb(105,105,105)",
        

    }
})
