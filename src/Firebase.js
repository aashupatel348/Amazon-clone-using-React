// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8M9xVRMXVa77nuv-zDo8x-aPRyB2SM_8",
  authDomain: "clone-d6728.firebaseapp.com",
  databaseURL: "https://clone-d6728-default-rtdb.firebaseio.com",
  projectId: "clone-d6728",
  storageBucket: "clone-d6728.appspot.com",
  messagingSenderId: "1076318503890",
  appId: "1:1076318503890:web:c553be528c96a1fbd0be0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
