import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDZF1-ipAZ81EENp2NtdxRlrq6V7FmWX4s",
    authDomain: "fir-1-81fde.firebaseapp.com",
    databaseURL: "https://fir-1-81fde.firebaseio.com",
    projectId: "fir-1-81fde",
    storageBucket: "fir-1-81fde.appspot.com",
    messagingSenderId: "445926783318"
  };
export const firebaseConnection = firebase.initializeApp(config);

