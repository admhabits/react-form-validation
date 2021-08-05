import firebase from 'firebase/app';
import database from 'firebase/database';
import storage from 'firebase/storage';
var config = {
    apiKey: "AIzaSyCyTpszvqZBX5Ze94M82C3l3-1kKfgfXeE",
    authDomain: "x-webgram.firebaseapp.com",
    // databaseURL: "https://x-webgram.firebaseio.com",
    databaseURL: "http://localhost:9000/?ns=x-webgram",
    projectId: "x-webgram",
    storageBucket: "x-webgram.appspot.com",
    messagingSenderId: "812455141893",
    appId: "1:812455141893:web:3d276cbf1e70be48d4b26c",
    measurementId: "G-RY0RQ85CFY"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
 

export const db = firebase.database().ref("/");
export const bucket = firebase.storage().ref("/");

export default firebase;