// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBZY_JVXIgviCl9ZoK6HWm1WBGx10Ry2vk",
  authDomain: "todoist-tut-4ff5c.firebaseapp.com",
  databaseURL: "https://todoist-tut-4ff5c-default-rtdb.firebaseio.com",
  projectId: "todoist-tut-4ff5c",
  storageBucket: "todoist-tut-4ff5c.appspot.com",
  messagingSenderId: "750138385444",
  appId: "1:750138385444:web:4f590cc70699945f2a64b1",
  measurementId: "G-NBYGXSE124"
});
export { firebaseConfig as firebase };
