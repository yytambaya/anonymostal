import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUJlhGc9q8kugEfU_zWawA1brdBXOFDFI",
    authDomain: "anonymost-5271b.firebaseapp.com",
    projectId: "anonymost-5271b",
    storageBucket: "anonymost-5271b.appspot.com",
    messagingSenderId: "410413166264",
    appId: "1:410413166264:web:30f3be2cd1e1257f538e4d",
    measurementId: "G-1J5NFKY04J"
};

let firebaseApp;

if (firebase.apps.length === 0) {
	firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };