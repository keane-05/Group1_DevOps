// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, update } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAvadSRgPnfn2_surwtt980mt4tNPYoXEw",

  authDomain: "smartvend-1f9ae.firebaseapp.com",

  databaseURL: "https://smartvend-1f9ae-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "smartvend-1f9ae",

  storageBucket: "smartvend-1f9ae.firebasestorage.app",

  messagingSenderId: "493928878247",

  appId: "1:493928878247:web:45ea40220c338ec34f8b82"


};


// Initialize Firebase

 const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export {app, database}