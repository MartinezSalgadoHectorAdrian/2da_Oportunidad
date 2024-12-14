function suma(a, b){
    return a + b;
}
let resultado1 = suma(5, 3);
console.log(resultado1);
let resta = function(a, b){
    return a - b;
};
console.log(resta(5, 3));

let multiplicacion = (a, b) => a * b;
console.log(multiplicacion(5, 3));

let objeto = {
    nombre: "Silvestre",
    saludar: function () {
        setTimeout(() =>{
            console.log(`Hola, soy ${this.nombre}`);
        }, 1000);
    },
};
objeto.saludar();

let frutas = ["🍎","🍐","🍇","🍓"];
frutas.push("🍓");
frutas.unshift("🍌");
frutas.pop();
console.log(frutas);

let frutas2 = frutas.slice(1, 3);
console.log(frutas2.join("-"));
console.log(frutas.length);
console.log(frutas.indexOf("🍇"));

let frutas3 = frutas.map((fruta) => fruta + "🍉");
console.table(frutas3);


console.log("Hola desde el archivo demo");
let a = 5;
let b = 3;

let resultado2 = ((a + b - 2)*3)/2;
console.log(resultado2);
resultado2 +=1;

console.log(a > b);
console.log(a === b);
console.log(resultado2 % 3 ==0 ? "👍" : "👎");
let cadena = "hola, " + "mundo!";
console.log(cadena);

let a2 = 5;
let b2 = 3; 
let resultado = ((a + b - 2)*3)/2;
console.log(resultado);
resultado += 1;

console.log(a > b);
 console.log(a === b);
 console.log(resultado % 3 ==0 ? "👍" : "👎");
 let cadena2 = "hola, " + "mundo!";
 console.log(cadena);

     let edad = 18;
     if (edad >= 18){
         console.info("Eres mayor de edad"); 
     } else{
         console.warn("Eres menor de edad");
     }