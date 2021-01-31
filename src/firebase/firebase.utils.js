import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA8CE6cmO3e84VpfChKyM44KDe28bn5OMk",
    authDomain: "parangelmata.firebaseapp.com",
    databaseURL: "https://parangelmata.firebaseio.com",
    projectId: "parangelmata",
    storageBucket: "parangelmata.appspot.com",
    messagingSenderId: "824823048409",
    appId: "1:824823048409:web:4902e2715229ff2f3576c8",
    measurementId: "G-0QKH2090T4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;