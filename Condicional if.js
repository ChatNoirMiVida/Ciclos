//EJERCICIO 1. Crear un programa que pida un numero y que diga si es positivo o negativo//
let numero0 = prompt("Hola! Dame tu primer número");
if (numero0 < 0) {
    alert("Negativo")
}
else {
    (numero0 > 0)
    alert("Positivo")
}







//EJERCICIO 2. Se trata de un script que te diga si un número es par o impar. 
//Nota; Todo número par dividido entre 2 da 0//

let numero1 = prompt("Hola! Dame un número");
if (numero1 % 2) {
    alert("impar")
}
else {
    (numero1 % 2)
    alert("par")
}

//EJERCICIO 3. Un usuario ingresará 2 números,debe de volver la diferencia entre el mayor y el menor.//
//Nota; El número menor resta al número mayor, el número mayor resta al número menor.//

let numero2 = prompt("Hola! Dame tu primer número");
let numero3 = prompt("Dame tu segundo número");

if (numero2 > numero3) {
    alert(numero3 - numero2)
}
else {
    (numero3 < numero2)
    alert(numero2 - numero3)
}






//EJERCICIO 4. Una tienda aplica un descuento del 15% para las compras que incluyan mas de 10 articulos iguales cuyo precio sea superior a 40$. Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el numero de articulos y el precio de cada uno.//

let articulos = prompt("¿Cuantos articulos compraste?");
let precio = prompt("¿Cuánto cuestan?");
let multi = articulos * precio;

if (multi >= 40) {
    alert(multi - (multi * 0.15))
}
else {
    alert(multi)
}

//EJERCICI0 5. Crea una condicion que te pida tu nombre, y si detecta que te llamas Maximiliano no te permita ingresar, caso contrario que te pida una contraseña, si la contraseña es correcta, te dira <bienvenido mas tu nombre> caso contrario te dira que es <incorrecta mas tu nombre> 

let nombre00 = prompt("¿Cómo te llamas?");

if (nombre00 == "Maximiliano") {
    alert("No puedes ingresar");
}

else {
    contraseña = prompt(nombre00 + " , Ingresa la contraseña")
    if (contraseña == "1111") {
        alert("Bienvenida," + nombre00)
    }

    else {
        alert("Contraseña incoreccta," + nombre00)
    }
}

