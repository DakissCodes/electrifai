


import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref, onValue} from 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyAcLNOSI_sPA40-qEH2bj0Kk-1rXSWdy7U",
    authDomain: "electrifai-b8cb6.firebaseapp.com",
    databaseURL: "https://electrifai-b8cb6-default-rtdb.firebaseio.com",
    projectId: "electrifai-b8cb6",
    storageBucket: "electrifai-b8cb6.appspot.com",
    messagingSenderId: "701015468302",
    appId: "1:701015468302:web:bf5fbd4ee1bc8c12f4cf5f"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
export { firebase };

