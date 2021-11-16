import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}

firebase.firestore().settings({ timestampsInSnapshots: true })

const db = firebase.firestore()

export const auth = firebase.auth()
export const storage = firebase.storage()
export const imgCol = db.collection('images')
export const aboutCol = db.collection('about')
export const calendarCol = db.collection('calendar')
export const carCol = db.collection('car')
export const partnerImgCol = db.collection('partner_images')
export const circuitImgCol = db.collection('circuit_images')
export const circuitCol = db.collection('circuits')
export const headlineCol = db.collection('headline')
export const partnerCol = db.collection('partners')
export const partnerPg = db.collection('partner_page')
export const postsCol = db.collection('posts')
export const postPg = db.collection('post_page')
export const shopCol = db.collection('shop')

export default firebase
