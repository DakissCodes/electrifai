import { mayInitWithUrlAsync } from "expo-web-browser";
import {
    Modal,
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions
} from "react-native"
import {PieChart} from "react-native-chart-kit";


const ProgressBar = ({percentage, progressColor}) => {
    // this function renders a progress bar
    // percentage: int where n > 1
    // progress color: color of progress bar
    return (
        <View style={styles.progressBarWrapper}>
            
            <Text style={{fontWeight: 'bold'}}>{percentage * 100}%</Text>
            <View style={[styles.progressBarContainer, ]}>
                <View style={{backgroundColor: progressColor, flex: percentage, borderRadius: 10}}></View>
            </View>
        </View>
    )
}


const data = [
    // mock data for visualization
    {
        name: "Morning",
        consumption: 1.28,
        color: "#EB5353",
        legendFontColor: "#7F7F7F",
        legendFontSize: 12,
    },
    {
        name: "Afternoon",
        consumption: 2.2,
        color: "#F9D923",
        legendFontColor: "#7F7F7F",
        legendFontSize: 12,
    },
    {
        name: "Evening",
        consumption: 0.88,
        color: "#36AE7C",
        legendFontColor: "#7F7F7F",
        legendFontSize: 12,
    },
    {
        name: "Night",
        consumption: 3.5,
        color: "#187498",
        legendFontColor: "#7F7F7F",
        legendFontSize: 12,
    },
];

const { width } = Dimensions.get('window');

const chartConfig = {
    // mock config
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 0.5) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};


export default function ({isVisible, handleModalPress, avgDailyConsumption, currentTime}) {
    // includes props
    // handleModalPress: function that handles hook for setting visibility of modal
    // avgDailyConsumption: int
    // currentTime: int
    // isVisible: bool (sets whether modal is shown)
    return (
        <Modal
            // modal props
            onRequestClose={handleModalPress}
            transparent={false}
            visible={isVisible}
            statusBarTranslucent={true}
            animationType="slide"
            >
            <View style={styles.mainContainer}>
                <View style={styles.mainCardContainer}>

                        <View style={styles.headerTextWrapper}>
                        {/* wrapper for the header texts of card */}
                            <Text style={styles.mainTitle}>Avg. Daily Consumption</Text>
                            <Text style={[styles.textBig, styles.consumptionText]}>{avgDailyConsumption} kWh</Text>
                            <Text>As of {currentTime}</Text>
                        </View>


                        <View style={styles.chartWrapper}>
                            {/* chart here! */}
                            <PieChart
                                data={data}
                                width={width-80}
                                height={width-200}
                                chartConfig={chartConfig}
                                accessor={"consumption"}
                                backgroundColor={"transparent"}
                                paddingLeft={""}
                                center={[5,0]}
                                absolute
                            />
                        </View>



                        <View style={styles.chartInfoWrapper}>

                            <View style={styles.textWrapper}>
                                <Text style={[styles.sectionTitle]}>Throughout the day</Text>
                                <Text>You're consumption peaks during the night, and lowest in the evening.</Text>
                            </View>
                            
                    
                            <View style={{rowGap: 8}}>
                            {/* progress bars */}
                                <ProgressBar
                                percentage={0.2}
                                progressColor={"#EB5353"}
                                ></ProgressBar>
                                <ProgressBar
                                percentage={0.5}
                                progressColor={"#F9D923"}
                                ></ProgressBar>
                                <ProgressBar
                                percentage={0.1}
                                progressColor={"#36AE7C"}
                                ></ProgressBar>
                                <ProgressBar
                                progressColor={"#187498"}
                                percentage={0.2}
                                ></ProgressBar>
                            </View>

                            <View style={styles.textWrapper}>
                                <Text style={styles.sectionTitle}>Did you know?</Text>
                            <Text>You are <Text style={{ fontWeight: "bold", color: "#EB5353"}}>above average</Text> on daily consumption in Manila, Philippines.</Text>

                            </View>

                        </View>
                </View>
            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'transparent', 
        paddingTop: StatusBar.currentHeight + 10, // for responsive resizing of card
        paddingBottom: StatusBar.currentHeight,
        paddingHorizontal: 10,
    },
    mainCardContainer:{
        // main card that contains all info (chart, headertexts, chatinfo)
        rowGap: 15,
        paddingHorizontal: 25,
        paddingVertical: 30,
        alignItems: "flex-start",
        // occupy all of maincontainer
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        flex: 1,
        borderRadius: 12,
        elevation: 3,
    },
    mainTitle: {
        fontWeight: "bold",
        fontSize: 16,
    },
    textBig: {
        fontSize: 32,
    },
    sectionTitle: { 
        color: "#FFA500",
        fontWeight: "bold", 
        fontSize: 14,
    },
    headerTextWrapper: {
        rowGap: 5,
    },
    chartInfoWrapper: {

        rowGap: 20,
        backgroundColor: 'rgba(255, 165, 0,0.2)',
        width: "100%",
        padding: 20,
        borderRadius: 12, 
    },
    chartWrapper: {
        marginVertical: 15,
        justifyContent: "center",
        alignItems: 'center',
    },
    progressBarWrapper: {
        flexDirection: 'row',
        justifyContent: "center",
        columnGap: 5,
    },
    progressBarContainer: {
        // container for progress bar, fills all of height max of 25
        borderRadius: 10,
        flex: 1,
        backgroundColor: 'white',
        height: "100%",
        maxHeight: 25,
        flexDirection: 'row',
    },
    textWrapper: {
        rowGap: 5,
    },
    consumptionText: {
        
    }
})