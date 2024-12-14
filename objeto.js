// Obtener el enlace con id "abrirPrompt"
let abrirPrompt = document.getElementById("abrirPrompt");

// Agregar un evento click al enlace "abrirPrompt"
abrirPrompt.addEventListener("click", function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
  let nombre = prompt("¿Cómo te llamas?"); // Mostrar un prompt para ingresar el nombre

  if (nombre) {
    alert(`Hola, ${nombre}`); // Mostrar un saludo con el nombre ingresado
  } else {
    alert("Anónimo"); // Mostrar "Anónimo" si no se ingresó un nombre
  }
});

// Obtener la lista con id "log"
let lista = document.getElementById("log");

// Función para crear un nuevo elemento de lista con el texto proporcionado
function registro(texto) {
  let item = document.createElement("li");
  item.innerText = texto;
  return item;
}

// Agregar un registro indicando que el DOM ha sido cargado
lista.insertBefore(registro("✅ DOM LOADED"), lista.firstChild);

// Iniciar un temporizador que agrega un registro después de 3 segundos
let timer = setTimeout(() => {
  lista.insertBefore(registro("⌛ Fin del timer (3s)"), lista.firstChild);
}, 3000);

// Iniciar un repetidor que agrega un registro cada 1.5 segundos
let repetidor = setInterval(() => {
  lista.insertBefore(registro("⏱ +1.5s"), lista.firstChild);
}, 1500);

// Obtener los botones con sus respectivos ids
let iniciarTimerBtn = document.getElementById("iniciarTimer");
let detenerIntervaloBtn = document.getElementById("detenerIntervalo");
let reanudarIntervaloBtn = document.getElementById("reanudarIntervalo");

// Agregar un evento click al botón "iniciarTimer"
iniciarTimerBtn.addEventListener("click", function () {
  lista.insertBefore(registro("🎉 Inicia timer..."), lista.firstChild);
  clearTimeout(timer); // Limpiar el temporizador existente
  timer = setTimeout(() => {
    lista.insertBefore(registro("⌛ Fin del timer (3s)"), lista.firstChild);
  }, 3000); // Iniciar un nuevo temporizador de 3 segundos
});

// Agregar un evento click al botón "detenerIntervalo"
detenerIntervaloBtn.addEventListener("click", function () {
  lista.insertBefore(registro("🛑 Se detuvo el repetidor..."), lista.firstChild);
  clearInterval(repetidor); // Detener el repetidor
});

// Agregar un evento click al botón "reanudarIntervalo"
reanudarIntervaloBtn.addEventListener("click", function () {
  lista.insertBefore(registro("🔄 Se reactivó el repetidor..."), lista.firstChild);
  clearInterval(repetidor); // Detener el repetidor existente
  repetidor = setInterval(() => {
    lista.insertBefore(registro("⏱ +1.5s"), lista.firstChild);
  }, 1500); // Iniciar un nuevo repetidor de 1.5 segundos
});

// Verificar si la conexión es segura (HTTPS)
let estadoSeguridad = document.getElementById("estado-seguridad");
if (location.protocol === "https:") {
  estadoSeguridad.innerText = "Conexión segura ✅";
} else {
  estadoSeguridad.innerText = "Conexión no segura ❌";
}

// Obtener la lista con id "registro-historial"
let historial = document.getElementById("registro-historial");

// Agregar un item a la lista indicando la cantidad de elementos en el historial
let historialNavegacion = history.length;
historial.appendChild(
  registro(`Hay ${historialNavegacion} elementos en el historial de navegación.`)
);

// Crear un enlace para volver a la página anterior
let linkAnterior = document.createElement("a");
linkAnterior.href = "javascript:history.back()";
linkAnterior.innerText = "Volver a la página anterior";

// Crear un nuevo elemento <li> y agregarlo a la lista "registro-historial"
let itemAnterior = document.createElement("li");
itemAnterior.appendChild(linkAnterior);
historial.appendChild(itemAnterior);

// Crear un enlace para ir a la página siguiente
let linkSiguiente = document.createElement("a");
linkSiguiente.href = "javascript:history.forward()";
linkSiguiente.innerText = "Ir a la página siguiente";

// Crear un nuevo elemento <li> y agregarlo a la lista "registro-historial"
let itemSiguiente = document.createElement("li");
itemSiguiente.appendChild(linkSiguiente);
historial.appendChild(itemSiguiente);
