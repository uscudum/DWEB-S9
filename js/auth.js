import { auth } from "./firebase/config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const mensaje = document.querySelector("#mensaje");

function mostrarMensaje(texto, tipo = "danger") {
  mensaje.textContent = texto;
  mensaje.className = `alert alert-${tipo} mt-3`;
}

async function registrarUsuario(evento) {
  evento.preventDefault();
  const nombre = document.querySelector("#nombre").value.trim();
  const email = document.querySelector("#registroEmail").value.trim();
  const password = document.querySelector("#registroPassword").value;

  try {
    const resultado = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(resultado.user, { displayName: nombre });
    window.location.href = "panel.html";
  } catch (error) {
    mostrarMensaje("No fue posible crear la cuenta. Verificá el correo o probá con otro.");
  }
}

async function iniciarSesion(evento) {
  evento.preventDefault();
  const email = document.querySelector("#loginEmail").value.trim();
  const password = document.querySelector("#loginPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "panel.html";
  } catch (error) {
    mostrarMensaje("No fue posible iniciar sesión. Revisá el correo y la contraseña.");
  }
}

onAuthStateChanged(auth, (usuario) => {
  if (usuario) {
    window.location.href = "panel.html";
  }
});

document.querySelector("#registroForm").addEventListener("submit", registrarUsuario);
document.querySelector("#loginForm").addEventListener("submit", iniciarSesion);

document.querySelectorAll("[data-form]").forEach((boton) => {
  boton.addEventListener("click", () => {
    document.querySelectorAll("[data-form]").forEach((item) => item.classList.remove("active"));
    boton.classList.add("active");
    document.querySelector("#loginForm").classList.toggle("d-none", boton.dataset.form !== "login");
    document.querySelector("#registroForm").classList.toggle("d-none", boton.dataset.form !== "registro");
  });
});
