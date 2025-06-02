import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHUTU78O30N5SVrqgVquXTOuCE7u1n2kU",
  authDomain: "clone-87e46.firebaseapp.com",
  projectId: "clone-87e46",
  storageBucket: "clone-87e46.firebasestorage.app",
  messagingSenderId: "697168158403",
  appId: "1:697168158403:web:4d6b25c92a1fb34d770c76",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
