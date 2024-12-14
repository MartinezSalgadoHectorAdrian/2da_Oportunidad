const form = document.getElementById("search-form");
const nombreTxt = document.getElementById("pokemon-name");
const typesList = document.getElementById("pokemon-types");
const image = document.getElementById("pokemon-image");
const additionalInfo = document.getElementById("pokemon-additional-info");
const audioPokemon = document.getElementById("audio-pokemon"); 

function clearResults() {
    nombreTxt.innerText = "";
    typesList.innerHTML = "";
    image.setAttribute("src", "");
    additionalInfo.innerHTML = "";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const pokemonName = document.getElementById("pokemon-name-input").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => {
            if (!response.ok) throw new Error("Pokémon no encontrado");
            return response.json();
        })
        .then((pokemon) => {
            clearResults();
            
            // Mostrar nombre del Pokémon
            nombreTxt.innerText = pokemon.name;

            // Mostrar tipos del Pokémon
            const lista = document.createElement("ul");
            pokemon.types.forEach((tipo) => {
                const item = document.createElement("li");
                item.innerText = tipo.type.name;
                item.classList.add(`type-${tipo.type.name}`);
                lista.appendChild(item);
            });
            typesList.appendChild(lista);

            // Mostrar imagen del Pokémon
            image.setAttribute("src", pokemon.sprites.front_shiny);

            // Mostrar datos adicionales
            additionalInfo.innerHTML = `
                <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
                <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
                <p><strong>Habilidades:</strong> ${pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
                <p><strong>Estadísticas base:</strong></p>
            `;
            audioPokemon.setAttribute("src", pokemon.cries.latest); //AGREMAMOS LA FUENTE DEL SONIDO AL ELEMENTO audio = audioPokemon
            audioPokemon.volume = 0.1; //SETEAMOS EL VOLUMEN A 0.1 PARA QUE NO ESTE AL MAXIMO
       
            const statsList = document.createElement("ul");
            pokemon.stats.forEach((stat) => {
                const item = document.createElement("li");
                item.innerText = `${stat.stat.name}: ${stat.base_stat}`;
                statsList.appendChild(item);
            });
            additionalInfo.appendChild(statsList);
        })
        .catch((error) => {
            clearResults();
            nombreTxt.innerText = "Error: " + error.message;
            console.error(error);
        });
});
