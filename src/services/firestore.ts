// eslint-disable-next-line @typescript-eslint/no-var-requires
import firebase from 'firebase'
require('firebase/firestore')

const config = {
  apiKey: 'AIzaSyCmVcKSURWpSbVyP0WQ8_9I1CT_ImnYxUY',
  authDomain: 'start-page-51ab0.firebaseapp.com',
  databaseURL: 'https://start-page-51ab0.firebaseio.com',
  projectId: 'start-page-51ab0',
  storageBucket: 'start-page-51ab0.appspot.com',
  messagingSenderId: '39650571766',
  appId: '1:39650571766:web:74eb2ea8b37c789c6b03d7'
}

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId
})

export default firebase.firestore()
