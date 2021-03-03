import firebase from 'firebase/app';
import 'firebase/firestore';





// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbGVMWu9S7hU21jTqfx6A4wHoqXf9s-uE",
    authDomain: "bookmark-app-9f9ef.firebaseapp.com",
    databaseURL: "https://bookmark-app-9f9ef-default-rtdb.firebaseio.com",
    projectId: "bookmark-app-9f9ef",
    storageBucket: "bookmark-app-9f9ef.appspot.com",
    messagingSenderId: "16802955051",
    appId: "1:16802955051:web:c17bf34b73e6cd3cb88f6e",
    measurementId: "G-XSXZ1TPB45"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase