import { db } from './firebase.js';
import { ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Функция регистрации
window.registerUser = async function() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (!login || !password) { msg.innerText = "Введите логин и пароль!"; return; }

  const userRef = ref(db, 'users/' + login);
  const snapshot = await get(userRef);
  if (snapshot.exists()) {
    msg.innerText = "Такой пользователь уже есть!";
    return;
  }

  // Премиум-аккаунт cell
  let stars = login === "cell" ? 100000000 : 1000;
  let gifts = login === "cell" ? 100000 : 0;
  let status = login === "cell" ? "Legendary Owner" : "User";

  await set(userRef, { login, password, stars, gifts, status });
  msg.innerText = "Регистрация успешна! Войдите.";
}

// Функция входа
window.loginUser = async function() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (!login || !password) { msg.innerText = "Введите логин и пароль!"; return; }

  const userRef = ref(db, 'users/' + login);
  const snapshot = await get(userRef);
  if (!snapshot.exists() || snapshot.val().password !== password) {
    msg.innerText = "Неверный логин или пароль!";
    return;
  }

  localStorage.setItem("currentUser", login); // сохраняем текущего пользователя
  window.location.href = "index.html";
      }
