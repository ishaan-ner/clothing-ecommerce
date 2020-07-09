import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB3MCARzf9-eJu3Ei-3UBkfb6NWT8DodoI",
  authDomain: "clothing-ecommerce-2afc8.firebaseapp.com",
  databaseURL: "https://clothing-ecommerce-2afc8.firebaseio.com",
  projectId: "clothing-ecommerce-2afc8",
  storageBucket: "clothing-ecommerce-2afc8.appspot.com",
  messagingSenderId: "1008558031547",
  appId: "1:1008558031547:web:0b0706ba38e75b4ef05f9e",
  measurementId: "G-RHNZ32FXWG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
