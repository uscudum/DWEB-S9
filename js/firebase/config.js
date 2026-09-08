import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// PASO 1: Copiá aquí el objeto firebaseConfig de tu propio proyecto Firebase.
const firebaseConfig = {
  apiKey: "REEMPLAZAR",
  authDomain: "REEMPLAZAR",
  projectId: "REEMPLAZAR",
  storageBucket: "REEMPLAZAR",
  messagingSenderId: "REEMPLAZAR",
  appId: "REEMPLAZAR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
