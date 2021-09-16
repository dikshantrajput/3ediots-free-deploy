import firebase from 'firebase/app';
import fireStore from 'firebase/firestore';
import storage from 'firebase/storage';
import auth from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBjad1mbq2n78rBe4fX9pjkzgkZ7iQuXo0",
    authDomain: "merasehar-263fd.firebaseapp.com",
    databaseURL: "https://merasehar-263fd.firebaseio.com",
    projectId: "merasehar-263fd",
    storageBucket: "merasehar-263fd.appspot.com",
    messagingSenderId: "570059250161",
    appId: "1:570059250161:web:e64760cbee956ef6418c50",
    measurementId: "G-1YGRZKRGSP"
};

const fire = firebase.initializeApp(firebaseConfig);

const db = fire.firestore()

const bucket = firebase.storage()

const authentication = firebase.auth();

export { db , bucket , authentication , firebase }