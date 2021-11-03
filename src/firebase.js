import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZEHUkPmWFDc1l1xZ45beYh1B2pe3CLC4",
  authDomain: "clone-netflix-92f95.firebaseapp.com",
  projectId: "clone-netflix-92f95",
  storageBucket: "clone-netflix-92f95.appspot.com",
  messagingSenderId: "336563509148",
  appId: "1:336563509148:web:cc119568a1c280394f1a59",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
