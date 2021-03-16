import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkab73WHp-8nsPAd5XWCo6p3nWR3pTCJ8",
    authDomain: "bt3103-week-6-b7088.firebaseapp.com",
    projectId: "bt3103-week-6-b7088",
    storageBucket: "bt3103-week-6-b7088.appspot.com",
    messagingSenderId: "273822644734",
    appId: "1:273822644734:web:b03d2555a608ed58bd68af",
    measurementId: "G-38ZXJDN8BL"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;