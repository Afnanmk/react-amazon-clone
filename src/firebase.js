import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAgWpTAvOVIvDdlJBZwnENwRv1KvzdZ2rA",
  authDomain: "clone-173c1.firebaseapp.com",
  databaseURL: "https://clone-173c1.firebaseio.com",
  projectId: "clone-173c1",
  storageBucket: "clone-173c1.appspot.com",
  messagingSenderId: "270254389893",
  appId: "1:270254389893:web:0299e985d7ee990a5dc7ec",
  measurementId: "G-PRMSJQLCWE"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
