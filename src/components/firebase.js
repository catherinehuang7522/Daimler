import app from 'firebase/app'
import React from 'react'
import "firebase/firestore";
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCflJCi6lH8CCj-HzqKLQDVgLs0GhQ4W1U",
  authDomain: "cabana-c5e6c.firebaseapp.com",
  databaseURL: "https://cabana-c5e6c.firebaseio.com",
  projectId: "cabana-c5e6c",
  storageBucket: "cabana-c5e6c.appspot.com",
  messagingSenderId: "1056731331269",
  appId: "1:1056731331269:web:3e2bcf854efc3e1d1aceac",
  measurementId: "G-7T0Y03LVW0"
};

class Firebase {
  constructor() {
    try {
      app.initializeApp(firebaseConfig);
      this.db = app.firestore()
      this.analytics = firebase.analytics(app)

    } catch (err) {
      //already exists, no need to reinitialize
    }

    Firebase.sharedInstance = this
  }
}
let sharedInstance = new Firebase()
export default Firebase
