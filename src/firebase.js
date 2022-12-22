import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAQr3a3msfOrKDjFUo8G2E5sp1JOo1IVCY",
    authDomain: "chatmohammad.firebaseapp.com",
    projectId: "chatmohammad",
    storageBucket: "chatmohammad.appspot.com",
    messagingSenderId: "225757995350",
    appId: "1:225757995350:web:baf80745a930d9c9de76f7",
    measurementId: "G-97VK1NG3KB",
  })
  .auth();
