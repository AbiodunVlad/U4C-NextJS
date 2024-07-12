import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjc5ZGDl32whZV7x8aza0XqL0TmeJZrJ0",
  authDomain: "under40ceos-15762.firebaseapp.com",
  projectId: "under40ceos-15762",
  storageBucket: "under40ceos-15762.appspot.com",
  messagingSenderId: "942761645849",
  appId: "1:942761645849:web:8c2a0e5011702d08761788",
  measurementId: "G-LVG953LT56",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
