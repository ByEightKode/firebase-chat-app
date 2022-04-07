import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANPLUDamBNSF1rpRR1Io9xS4r6ThLaRoE",
    authDomain: "chat-app-120ed.firebaseapp.com",
    projectId: "chat-app-120ed",
    storageBucket: "chat-app-120ed.appspot.com",
    messagingSenderId: "1044577530262",
    appId: "1:1044577530262:web:8f40bb8fcacdde0f8d6db7",
    measurementId: "G-8ZZ41MKMFB"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }