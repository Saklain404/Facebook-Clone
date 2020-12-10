// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAVFZ25T4mVbhuPQLMl4urVk46vnnIz3X4",
    authDomain: "facebook-clone-96ee9.firebaseapp.com",
    databaseURL: "https://facebook-clone-96ee9.firebaseio.com",
    projectId: "facebook-clone-96ee9",
    storageBucket: "facebook-clone-96ee9.appspot.com",
    messagingSenderId: "514561319419",
    appId: "1:514561319419:web:e0abbf76da5602ca1d2b5e",
    measurementId: "G-V395K16CZX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;  