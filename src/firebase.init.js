// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU7gRE9i2v7j5RVTUnk5tIet8M5fn8RdA",
  authDomain: "hotel-website-auth.firebaseapp.com",
  projectId: "hotel-website-auth",
  storageBucket: "hotel-website-auth.appspot.com",
  messagingSenderId: "227994316671",
  appId: "1:227994316671:web:28581f91f9c1bec0cf344a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;