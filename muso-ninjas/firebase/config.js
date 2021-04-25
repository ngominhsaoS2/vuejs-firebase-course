import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAYN2zPbz4LHPqOc9Dt9XKsNwcN7zEviNI",
    authDomain: "muso-ninjas-6527d.firebaseapp.com",
    projectId: "muso-ninjas-6527d",
    storageBucket: "muso-ninjas-6527d.appspot.com",
    messagingSenderId: "746270750004",
    appId: "1:746270750004:web:87a975b1cfdcc95fc32161"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
