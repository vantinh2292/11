import * as firebase from 'firebase';
// import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDZF1-ipAZ81EENp2NtdxRlrq6V7FmWX4s",
    authDomain: "fir-1-81fde.firebaseapp.com",
    databaseURL: "https://fir-1-81fde.firebaseio.com",
    projectId: "fir-1-81fde",
    storageBucket: "fir-1-81fde.appspot.com",
    messagingSenderId: "445926783318"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
export const firebaseConnection = firebase;
// firebase.initializeApp(config);
// export const firebaseCloud=firebase.firestore().settings({ timestampsInSnapshots: true });
