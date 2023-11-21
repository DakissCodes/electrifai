// import { firebase } from './config.js';

// export const Fetch = () => {
//     const [measurement, updateMeasure] = useState([])
//     // users var name, setUsers manipulate state
//     const powerUsage = firebase.firestore().collections('power-usage')
//     // grab collections from firebase "power-usage"

//     useEffect(async () => {
//         // runs every update
//         powerUsage
//             .onSnapshot(
//                 // when new data arrives
//                 querySnapshot => {
//                     // grab data
//                     const measurement = []
//                     // array
//                     querySnapshot.forEach((doc) => {
//                         // for each object in collection
//                         const { power, timestamp } = doc.data()
//                         // set values from doc into power , timestamp
//                         measurement.push({
//                             // push to array doc id, power and timestamp
//                             id: doc.id,
//                             power,
//                             timestamp
//                         })
//                     })
//                     // update the state
//                     updateMeasure(measurement)
//                 }
//             )
//     })
// }


