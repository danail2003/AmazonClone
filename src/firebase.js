import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyAlofJoUCU9kqn1LJzVvuzAh5Xj2We5VO8",
    authDomain: "clone-44378.firebaseapp.com",
    projectId: "clone-44378",
    storageBucket: "clone-44378.appspot.com",
    messagingSenderId: "673798071762",
    appId: "1:673798071762:web:940dc3426883362fa2d40b"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };