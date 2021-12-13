// import firebase from "firebase";
import { async } from "@firebase/util";
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";


const config = {
    apiKey: "AIzaSyBphAOsW0tnfTxlyOFgzAvSX0NobUdGQyM",
    authDomain: "exreactbase.firebaseapp.com",
    databaseURL: "https://exreactbase-default-rtdb.firebaseio.com",
    projectId: "exreactbase",
    storageBucket: "exreactbase.appspot.com",
    messagingSenderId: "433463209425",
    appId: "1:433463209425:web:1cc4300ca175350e7e04f0"
};

// firebase.initializeApp(config);
const app = initializeApp(config);
const auth = getAuth(app);

export const signUp = async (email, pass) => 
    await createUserWithEmailAndPassword(auth, email, pass);
export const logIn = async (email, pass) => 
    await signInWithEmailAndPassword(auth, email, pass);
export const logOut = async () => await signOut(auth);
export const onChangeAuth = (callback) => onAuthStateChanged(auth, callback);
