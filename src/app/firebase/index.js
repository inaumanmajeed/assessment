import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGLj262AsV2P5dKcRnNvGgcI1ZXkWLxRw",
  authDomain: "thoughtsbook-idea.firebaseapp.com",
  projectId: "thoughtsbook-idea",
  storageBucket: "thoughtsbook-idea.appspot.com",
  messagingSenderId: "107129856490",
  appId: "1:107129856490:web:57f9a73968e09f91e7d293",
  measurementId: "G-PT9T6CZKSN",
};

let authLogin = null;

try {
  const firebaseApp = initializeApp(firebaseConfig);
  authLogin = getAuth(firebaseApp);
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

export { authLogin };
