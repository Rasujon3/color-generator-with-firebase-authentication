import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_nxQPgmlRY-5b911iyN2TR00utbUiMgI",
  authDomain: "color-generator-with-fb-auth.firebaseapp.com",
  projectId: "color-generator-with-fb-auth",
  storageBucket: "color-generator-with-fb-auth.appspot.com",
  messagingSenderId: "2233912649",
  appId: "1:2233912649:web:e2320965c535172ae19e98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
