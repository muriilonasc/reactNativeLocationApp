import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDZFvaBLUJmmc3EmN3XSDN3bKBGUE1rDmE",
    authDomain: "micro-saas-d613c.firebaseapp.com",
    databaseURL: "https://micro-saas-d613c-default-rtdb.firebaseio.com",
    projectId: "micro-saas-d613c",
    storageBucket: "micro-saas-d613c.appspot.com",
    messagingSenderId: "381729271246",
    appId: "1:381729271246:web:f2bc185773e50d906a4f9f"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);