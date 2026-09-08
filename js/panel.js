import { auth } from "./firebase/config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const bienvenida = document.querySelector("#bienvenida");

// Paso 2: Comprobá la sesión con onAuthStateChanged().
// Si no hay usuario, redirigí a index.html.
// Si existe, mostrale: "Bienvenido/a, NOMBRE" en #bienvenida.
onAuthStateChanged(auth, (usuario) => {
});

// Paso 3: Cerrá la sesión con signOut(auth) y redirigí al inicio.
document.querySelector("#btnCerrarSesion").addEventListener("click", async () => {
});
