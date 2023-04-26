// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVMkDC7deoiRB5gY4e1cWlGUPHNpS9POQ",
  authDomain: "anir-project.firebaseapp.com",
  projectId: "anir-project",
  storageBucket: "anir-project.appspot.com",
  messagingSenderId: "523971239470",
  appId: "1:523971239470:web:e0820184c770d8119609bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}