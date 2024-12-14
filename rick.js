// URL de la API
const API_URL = "https://rickandmortyapi.com/api/character";

// Elementos del DOM
const characterList = document.getElementById("character-list");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

// Fetch y render de los personajes
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderCharacters(data.results)) // La API devuelve un campo `results` con los personajes
  .catch((error) => console.error("Error al obtener datos:", error));

// Renderizar personajes en tarjetas
function renderCharacters(characters) {
  characters.forEach((character) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Crear el contenido de la tarjeta
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
    `;

    // Agregar evento para abrir el modal con detalles
    card.addEventListener("click", () => openModal(character));
    characterList.appendChild(card);
  });
}

// Abrir modal y mostrar detalles del personaje
function openModal(character) {
  // Configuración del contenido del modal
  modalImg.src = character.image || "https://placehold.co/600x400";
  modalImg.style.width = "150px"; // Ajusta el tamaño de la imagen
  modalName.textContent = character.name;
  modalDescription.innerHTML = `
    <p><strong>Estado:</strong> ${character.status || 'Desconocido'}</p>
    <p><strong>Especie:</strong> ${character.species || 'Desconocida'}</p>
    <p><strong>Género:</strong> ${character.gender || 'Desconocido'}</p>
    <p><strong>Origen:</strong> ${character.origin?.name || 'Desconocido'}</p>
    <p><strong>Ubicación Actual:</strong> ${character.location?.name || 'Desconocida'}</p>
  `;

  // Crear efecto de portal
  const portal = document.createElement("div");
  portal.classList.add("portal-effect");

  // Insertar el portal antes del contenido
  modal.appendChild(portal);

  // Mostrar el modal con la animación
  modal.classList.remove("hidden");

  // Quitar el portal después de la animación (1 segundo)
  setTimeout(() => {
    portal.remove();
  }, 1000);
}

// Cerrar el modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Cerrar modal al hacer clic fuera de él
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

  