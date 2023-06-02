// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyAUI2Bl51QaseIracejgpquQVk_hFZ6DoU',
  authDomain: 'mb-instagram-bot.firebaseapp.com',
  projectId: 'mb-instagram-bot',
  storageBucket: 'mb-instagram-bot.appspot.com',
  messagingSenderId: '666245301747',
  appId: '1:666245301747:web:dfbc713671ad0233d6fe86',
  measurementId: 'G-34MQF11L15'
}

export const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
