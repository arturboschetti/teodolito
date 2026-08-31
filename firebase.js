import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AiZaSyAAblqntZTEJYy_1Y_4Dya1f9EtKXDFeU",
  authDomain: "calculadorateodolito.firebaseapp.com",
  projectId: "calculadorateodolito",
  storageBucket: "calculadorateodolito.firebasestorage.app",
  messagingSenderId: "421079950782",
  appId: "1:421079950782:web:e08c2b7bd9cbac9b3445ef",
  measurementId: "G-WF8PVEGNQJ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
