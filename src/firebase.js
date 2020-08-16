import firebase from "firebase"

firebase.initializeApp({
  apiKey: "AIzaSyA3lfp3q1sPyhJe5n7n7ARUk15s0KvNsKY",
  authDomain: "clone-186ce.firebaseapp.com",
  databaseURL: "https://clone-186ce.firebaseio.com",
  projectId: "clone-186ce",
  storageBucket: "clone-186ce.appspot.com",
  messagingSenderId: "235620706807",
  appId: "1:235620706807:web:3bc65390db431ea9ab66f2",
  measurementId: "G-CR2RCCMWKJ",
})

const auth = firebase.auth()

export { auth }
