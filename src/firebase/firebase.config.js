// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACaP_IOWDTuw_RG_bYvyFIX5LZKAwNDZ8",
  authDomain: "the-news-dragon-c75c9.firebaseapp.com",
  projectId: "the-news-dragon-c75c9",
  storageBucket: "the-news-dragon-c75c9.appspot.com",
  messagingSenderId: "482786625120",
  appId: "1:482786625120:web:634b898c640acc7cd46505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;