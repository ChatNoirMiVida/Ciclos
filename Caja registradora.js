//EJERCICIO 1.- Una caja inicialmente cuenta con un saldo de $200,000.00 y se debe procesar una venta de 20 productos mostrando al final al comprador el total a apagar y luego de recibir el pago mostrar el valor a devolver y el saldo actualizado de la caja.// 
//Nota: Datos de entrada, productos, saldo final, pago, cambio y costo de los productos.//

let saldo = 200000
let productos = 20

let precio = prompt("El precio de los productos es:");
let pago = prompt("¿Con cuanto pagarás?");

let precio2 = productos * precio;
document.write("El precio de los productos= " + precio2)
document.write("<br>")

document.write("El cliente pago con =" + pago)
document.write("<br>")

let precio3= pago - precio2;
document.write("Su cambio es de= " + precio3)
document.write("<br>")

let precio4= saldo + precio2;
document.write("Tu saldo en caja es= " + precio4)
document.write("<br>")


