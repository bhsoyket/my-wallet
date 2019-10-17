import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArvM26fs3y_4ooSA5tWy1Y5B0Io7B43tM",
  authDomain: "mywallet-5cdf9.firebaseapp.com",
  databaseURL: "https://mywallet-5cdf9.firebaseio.com",
  projectId: "mywallet-5cdf9",
  storageBucket: "mywallet-5cdf9.appspot.com",
  messagingSenderId: "800058945139",
  appId: "1:800058945139:web:e80efa350bdbf1c2f4c406",
  measurementId: "G-YVLXWD3QKZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
