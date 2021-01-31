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
    appId: "1:824823048409:web:3e241472d3babc2c3576c8",
    measurementId: "G-09Q8GHTRFZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;