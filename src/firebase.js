import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export  const auth = firebase.initializeApp({
    apiKey: "AIzaSyDN439IQOiLv_3_e490HRcwHa0eOtzDkzw",
    authDomain: "chat-fcc5e.firebaseapp.com",
    projectId: "chat-fcc5e",
    storageBucket: "chat-fcc5e.appspot.com",
    messagingSenderId: "483890828800",
    appId: "1:483890828800:web:3816ac831a24b09acbaae5"
  }).auth();