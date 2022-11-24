import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBhc-5BwG_wbgqb1174Uq7WWE7YKg_DY20",
    authDomain: "to-do-app-20879.firebaseapp.com",
    projectId: "to-do-app-20879",
    storageBucket: "to-do-app-20879.appspot.com",
    messagingSenderId: "815635520393",
    appId: "1:815635520393:web:05e1ff15b327cddf0d5f58"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };