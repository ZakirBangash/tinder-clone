import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDCD57b3vZIba70bD6w-r6tOz-jRzmcQRo",
    authDomain: "tinder-clone-ba308.firebaseapp.com",
    databaseURL: "https://tinder-clone-ba308.firebaseio.com",
    projectId: "tinder-clone-ba308",
    storageBucket: "tinder-clone-ba308.appspot.com",
    messagingSenderId: "933220283297",
    appId: "1:933220283297:web:18b1d8d3aabc01810a91e0",
    measurementId: "G-PGP70KBH8J"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();

  export default database;
  