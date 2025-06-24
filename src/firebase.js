// src/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Firebase 設定
const firebaseConfig = {
  apiKey: "AIzaSyBHcG7dcZeilx_xBoxpIAvwyVHczaHft6I",
  authDomain: "portfolio2025-msgboard.firebaseapp.com",
  projectId: "portfolio2025-msgboard",
  storageBucket: "portfolio2025-msgboard.firebasestorage.app",
  messagingSenderId: "934632424337",
  appId: "1:934632424337:web:9f5f8a7cfe35f3e7c85030",
  measurementId: "G-JSF2YF9SB4"
}

// 初始化 Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
