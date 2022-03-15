
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
export const initFire = firebase.initializeApp({
    apiKey: "AIzaSyBZlVFLNaM3WjwA-v6FpioYvKzpbAPjDXE",
    authDomain: "monkegram-a00ab.firebaseapp.com",
    projectId: "monkegram-a00ab",
    storageBucket: "monkegram-a00ab.appspot.com",
    messagingSenderId: "281620684228",
    appId: "1:281620684228:web:3ac17f8c84bc4b32d0d891",
    measurementId: "G-9W2ZPXVZBV"
});

export const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export const firestoreFieldValue = firebase.firestore.FieldValue;
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storageRef = firebase.storage().ref();
export const storage = firebase.storage();