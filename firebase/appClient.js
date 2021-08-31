import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBmonvD00Olsi9xG7oix6IBchTMYR5stxM",
    authDomain: "instagram-clone-18724.firebaseapp.com",
    projectId: "instagram-clone-18724",
    storageBucket: "instagram-clone-18724.appspot.com",
    messagingSenderId: "487478663335",
    appId: "1:487478663335:web:6f8b5b8ddeefb5fb08e382"
};

const app = initializeApp(firebaseConfig)

export default app