 import firebase from 'firebase/compat/app';
 import 'firebase/compat/auth';
 import 'firebase/compat/firestore'; 
    
    
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmGC1S_pYTrLfFvUtKT3nuM5ujExZBPsY",
    authDomain: "twitter-clone-6e121.firebaseapp.com",
    projectId: "twitter-clone-6e121",
    storageBucket: "twitter-clone-6e121.appspot.com",
    messagingSenderId: "722377064171",
    appId: "1:722377064171:web:ec14577815b2e3cee648ae",
    measurementId: "G-55ZLVXRRN4"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();

  export default db;