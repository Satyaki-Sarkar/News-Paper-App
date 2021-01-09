import firebase from 'firebase';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC_SwmRzdmVJC5mxAmsIrHD25cX3xSTZ3Y",
    authDomain: "news-paper-app-58a18.firebaseapp.com",
    databaseURL: "https://news-paper-app-58a18-default-rtdb.firebaseio.com",
    projectId: "news-paper-app-58a18",
    storageBucket: "news-paper-app-58a18.appspot.com",
    messagingSenderId: "161751335385",
    appId: "1:161751335385:web:2e19c67658058b9fdc99c8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()