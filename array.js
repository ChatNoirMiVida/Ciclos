//IN MUESTRA LAS POSICIONES 
/* let cuenta=[5,7,3,4];
document.write(cuenta[2]); 

for (let i in cuenta ){
    document.write(i)
} */

//CONTENIDO DE CADA POSICION 
/* let cuenta=[5,7,3,4];
document.write(cuenta[2]); 

for (let i of cuenta ){
    document.write(i)
} */

//ARRAY

/* let compras = ['casa', 'mesa'];
console.log(compras);
compras [0] = 'tahini'
console.log(compras);  */

// EJERCICIO.- Pedir 3 palabras, crear un arrreglo de 10 palabras, en las posiciones 2,5 y 7

/* let palabra1 = prompt("Dame tu primera palabra")
let palabra2 = prompt("Dame tu segunda palabra")
let palabra3 = prompt("Dame tu tercera palabra")

let palabras = ['ojo', 'oruga', 'celular', 'manzana', 'dinero', 'sopa', 'pastilla', 'jabon', 'maquina', 'camaron'];
palabras[2] = palabra1
palabras[5] = palabra2
palabras[7] = palabra3
document.write(palabras); */

//EJERCICIO.- HACER UN ARRAY DE 5 DATOS Y QUE EL USUARIO DECIDA LA POSION QUE QUIERE VER//

let palabra1 = prompt("Dame tu primera palabra")
let palabra2 = prompt("Dame tu segunda palabra")
let palabra3 = prompt("Dame tu tercera palabra")
let palabra4 = prompt("Dame tu cuarta palabra")
let palabra5 = prompt("Dame tu quinta palabra")

let datos = [palabra1, palabra2, palabra3, palabra4, palabra5]

datos[0] = palabra1
datos[1] = palabra2
datos[2] = palabra3
datos[3] = palabra4
datos[4] = palabra5

let pregunta = prompt("¿Qué posicion quieres ver?")
document.write(datos[pregunta])
 

//
let array=['dato', 'dato1']
array.push('dato3')
document.write(array)

