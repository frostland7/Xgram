// Подключение Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Вставь сюда свой firebaseConfig
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...", // URL базы
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
