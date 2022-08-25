import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyAqNA7-RTeWj-BW0ovdXmgeUPLsmkzTOR4",
    authDomain: "chatroom-771c6.firebaseapp.com",
    projectId: "chatroom-771c6",
    storageBucket: "chatroom-771c6.appspot.com",
    messagingSenderId: "97797925404",
    appId: "1:97797925404:web:14a7428f508f09b41b4dd9",
    measurementId: "G-F7QYRNKJ17"
})

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export{db, auth};