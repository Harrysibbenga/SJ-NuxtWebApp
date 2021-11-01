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
export const calendarCol = db.collection('calender')
export const carCol = db.collection('car')
export const circuitCol = db.collection('circuits')
export const headlineCol = db.collection('headline')
export const partnerCol = db.collection('partners')
export const partnerPg = db.collection('partner_page')
export const postsCol = db.collection('posts')
export const postPg = db.collection('post_page')
export const shopCol = db.collection('shop')

export default firebase
