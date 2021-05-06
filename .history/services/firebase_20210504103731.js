/* eslint-disable no-unused-vars */
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAhZJcxwQ_3bwIvJC5jlhwcf-NdLsgh_aI',
  authDomain: 'stephen-jelly.firebaseapp.com',
  databaseURL: 'https://stephen-jelly.firebaseio.com',
  projectId: 'stephen-jelly',
  storageBucket: 'stephen-jelly.appspot.com',
  messagingSenderId: '51119085046',
  appId: '1:51119085046:web:883659cc5cb660fedce3d7',
  measurementId: 'G-7NV6HKP26M',
}

// Initialize Firebase
let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()

export const auth = firebase.auth()
export const storage = firebase.storage()
export const imgCol = db.collection('images')
export const circuitImgCol = db.collection('circuit_images')
export const partnerImgCol = db.collection('partner_images')
export const postsCol = db.collection('posts')
export const postPg = db.collection('post_page')
export const headlineCol = db.collection('headline')
export const circuitCol = db.collection('circuits')
export const aboutCol = db.collection('about')
export const carCol = db.collection('car')
export const shopCol = db.collection('shop')
export const partnerCol = db.collection('partners')
export const partnerPg = db.collection('partner_page')
export const calendarCol = db.collection('calendar')
export const testCol = db.collection('test')
export default firebase
