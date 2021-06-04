import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'xxx',
  authDomain: 'xxx',
  databaseURL: 'xxx',
  projectId: 'xxx',
  storageBucket: 'xxx',
  messagingSenderId: 'xxx',
  appId: 'xxx',
  measurementId: 'xxx',
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

firebase.firestore().settings({ timestampsInSnapshots: true })

const db = firebase.firestore()

export const auth = firebase.auth()
export const storage = firebase.storage()
export const imgCol = db.collection('images')

export default firebase
