import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDJKRcQ9Mn8-kWGN6PXzYrfXEgel7MdXq0",
  authDomain: "pf-instagram-clone-react.firebaseapp.com",
  databaseURL: "https://pf-instagram-clone-react.firebaseio.com",
  projectId: "pf-instagram-clone-react",
  storageBucket: "pf-instagram-clone-react.appspot.com",
  messagingSenderId: "958478652552",
  appId: "1:958478652552:web:76cee9bfb3df00c7f4bb3d",
  measurementId: "G-1MH5GXE588"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
