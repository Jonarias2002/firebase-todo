import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyCKodC7-HvDLVbpIDeQIf6JDf-JeHvGvjY",
    authDomain: "fir-proyecto-6acee.firebaseapp.com",
    projectId: "fir-proyecto-6acee",
    storageBucket: "fir-proyecto-6acee.appspot.com",
    messagingSenderId: "369047442147",
    appId: "1:369047442147:web:7ee2c9df8cc58986766bd6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)