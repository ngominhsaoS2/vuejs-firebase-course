import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDqrwWBYVtMyVoVjzYPc9ex_KLrOuhLWGg",
    authDomain: "fir-db-test-8821a.firebaseapp.com",
    projectId: "fir-db-test-8821a",
    storageBucket: "fir-db-test-8821a.appspot.com",
    messagingSenderId: "683936388507",
    appId: "1:683936388507:web:b3c61033df672d7124bd3e"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }