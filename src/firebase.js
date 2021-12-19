import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// initialize firebaseApp with firebase-config values
const firebaseConfig = {
  apiKey: "AIzaSyD6ZPx8KUtqavNzNOnzfD1km6f67DOa75w",

  authDomain: "linkedin-b5c4c.firebaseapp.com",

  projectId: "linkedin-b5c4c",

  storageBucket: "linkedin-b5c4c.appspot.com",

  messagingSenderId: "828401721262",

  appId: "1:828401721262:web:73edbde32bb93b9d46323f"

};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// firebase - Data-Base
const db = app.firestore();

// firebase - Storage
const storage = firebase.storage();

// firebase - Auth
const auth = firebase.auth();

// firebase -Auth Provider (Google)
const provider = new firebase.auth.GoogleAuthProvider();

export { storage, auth, provider };

export default db;
