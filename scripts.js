"use strict"
// EJERCICIO 1

// const nombreUsuario = prompt("Ingrese su nombre de usuario")

// switch (nombreUsuario) {
//     case nombreUsuario:
//         console.log("Hola " + nombreUsuario);
//         break;

//     default:
//         console.log("Hola");
//         break;
// }

// EJERCICIO 2

// let numero1 = prompt("Ingrese un número");
// let numero2 = prompt("Ingrese otro número");

// let resultado = numero1 + numero2;
// numero1 = parseInt(numero1);
// numero2 = parseInt(numero2);
// resultado = numero1 + numero2;
// console.log(resultado);

// EJERCICIO 3

// Hacer un programa que reciba 2 numeros del usuario y los sume

// const numero1 = Number(prompt("Ingrese un número"));
// const numero2 = Number(prompt("Ingrese un número"));
// document.write(`La suma de ${numero1} y ${numero2} es ${numero1 + numero2}`); 

// EJERCICIO 4

// const numero = Number(prompt("Ingrese un número"));

// const numero = Number(prompt("Ingrese un número"));
// console.log(numero);

// if (numero < 0) {
//     document.write("El número es menor a cero");
// }

// else if (numero > 0) {
//     document.write("El número es mayor a cero");
// }

// else if (numero == 0) {
//     document.write("El número es 0");
// }

// else ("")
// document.write("Por favor ingrese un valor numérico");

// EJERCICIO 5

const numero1 = Number(prompt("Ingrese un número"));
const numero2 = Number(prompt("Ingrese un número"));

if (numero1 > numero2) {
    document.write(`${numero1} es mayor que ${numero2}`);
}

else if (numero1 < numero2) {
    document.write(`${numero1} es menor que ${numero2}`);
}

else if (numero1 == numero2) {
    document.write("Los números son iguales");
}
