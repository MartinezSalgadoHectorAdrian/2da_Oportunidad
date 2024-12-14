let titulo =
document.getElementById("titulo");
console.log(titulo.innerText);
titulo.style.color = "red";

let parrafos = 
document.getElementsByTagName("p");
Array.from(parrafos).forEach((el, idx) => {
el.innerText = "Texto " + (idx + 1);
 });
console.log(parrafos);

let parrafos2 = 
document.getElementsByClassName("parrafo");
console.log(parrafos2[1].textContent);
parrafos2[1].style.backgroundColor = "greenyellow";
parrafos2[1].innerHTML = "<strong>Nuevo Parrafo</strong>";

 
let parrafo_nuevo = document.createElement("p");
console.log(parrafo_nuevo.textContent);
parrafo_nuevo.className = "nuevo-parrafo";

 parrafo_nuevo = document.createElement("p");
parrafo_nuevo.innerText = "Este parrafo tiene un emoji 🎉"
document.body.appendChild(parrafo_nuevo);
console.log(parrafo_nuevo);



let h1 = document.createElement("h1");
h1.innerText = "Titulo dinamico";
let hr = document.createElement("hr");

parrafo_nuevo.prepend(h1);
parrafo_nuevo.append(hr);

let padre_parrafo = parrafo_nuevo.parentElement;
console.log(padre_parrafo);

let lista = document.createElement("ol");
for (let i = 1; i <= 5; i++){
    let item = document.createElement("li");
    item.innerText = `Elemento ${i}`;
    lista.appendChild(item);
}
padre_parrafo.appendChild(lista);
