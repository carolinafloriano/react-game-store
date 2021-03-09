import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBI4MGb5PEOr_RLgdQMMbqC07P4kFmnlIg",
    authDomain: "ecommerce-games-e804d.firebaseapp.com",
    projectId: "ecommerce-games-e804d",
    storageBucket: "ecommerce-games-e804d.appspot.com",
    messagingSenderId: "1017282006566",
    appId: "1:1017282006566:web:a254c5efffd6e5754e20e7"
});

const db = firebaseApp.firestore();

export {db};
