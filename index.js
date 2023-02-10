/* Escriba un programa que permita imprimir en pantalla cada uno de los elementos del siguiente
arreglo: [0, 28, 30, 10, 4]. */

console.log("     EJERCICIO 1 \n");

function recorrerArreglo(numeros) {
  for (let i = 0; i < numeros.length; i++)
    console.log("El elemento en la posicion " + i + " es: " + numeros[i]);
}

var arregloNumEjercicio1 = [0, 28, 30, 10, 4];
recorrerArreglo(arregloNumEjercicio1);

/*Escriba un programa que permita imprimir al revés cada uno de los elementos del siguiente
arreglo: [0, 28, 30, 10, 4].*/

console.log("\n     EJERCICIO 2 \n");

function reversoArreglo(numeros) {
  console.log("El reverso del arreglo [" + numeros + "] es: " + numeros.reverse());
}

var arregloNumEjercicio2 = [0, 28, 30, 10, 4];
reversoArreglo(arregloNumEjercicio2);

/*Escriba un programa que permita calcular la suma de todos los elementos del siguiente arreglo:
[1, 3, 6, 82, 23].*/

console.log("\n     EJERCICIO 3 \n");

function sumaArreglo(numeros) {
  let suma = 0;
  for (i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  console.log("La suma de " + numeros.join(" + ") + " = " + suma);
}

var arregloNumEjercicio3 = [1, 3, 6, 82, 23];
sumaArreglo(arregloNumEjercicio3);

/*Escriba un programa que deduzca e imprima en pantalla el número menor en el siguiente
arreglo: [90, 1, 38, 0, 29, 4].*/

console.log("\n     EJERCICIO 4 \n");

function numMenorArreglo(numeros) {
  let menor = numeros[i];
  for (i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  console.log("El numero menor del arreglo [" + numeros + "] es: " + menor);
}

var arregloNumEjercicio4 = [90, 1, 38, 0, 29, 4];
numMenorArreglo(arregloNumEjercicio4);

/*Escriba un programa que permita calcular la suma y el producto entre pares de todos los
elementos de los siguientes arreglos: [0, 28, 30, 10, 4] y [1, 3, 6, 82, 23].*/

console.log("\n     EJERCICIO 5 \n");

function sumaPares(primerArreglo, segundoArreglo, sumaArreglo, productoArreglo) {

  let suma = 0;

  for (i = 0; i < primerArreglo.length; i++) {
    suma = primerArreglo[i] + segundoArreglo[i];
    sumaArreglo.push(suma);
    producto = primerArreglo[i] * segundoArreglo[i];
    productoArreglo.push(producto);
  }
}

var primerArregloNumEjercicio5 = [0, 28, 30, 10, 4];
var segundoArregloNumEjercicio5 = [1, 3, 6, 82, 23];
var sumaArreglo = [];
var productoArreglo = [];

sumaPares(primerArregloNumEjercicio5, segundoArregloNumEjercicio5, sumaArreglo, productoArreglo);

console.log("Los arreglos son: [" + primerArregloNumEjercicio5 + "] con [" + segundoArregloNumEjercicio5 + "]");
console.log("La suma entre ellos es: [" + sumaArreglo + "]");
console.log("El producto entre ellos es: [" + productoArreglo + "]");

/*Escriba un programa que lea un arreglo de seis elementos (ingresados por el usuario) e intercambie las posiciones de sus elementos, de tal forma que el primero pase a ser el último y el último el primero, el segundo el penúltimo, y así sucesivamente. Imprima en pantalla el arreglo resultante.*/

console.log("\n     EJERCICIO 6 \n");
/*
function pedirElemento(arreglo){
  let ingreso = null
  for (i = 0; i < 6; i++){
    ingreso = prompt("Ingrese elemento " + (i+1) + ":");
    arreglo.push(ingreso);
  }
  return arreglo;
}

function intercambio(arreglo, nuevoArreglo){
  for(i=0; i < 6; i++){
    nuevoArreglo.unshift(arreglo[i]);
  }
  return nuevoArreglo;
}

var arregloNumEjercicio6 = [];
var nuevoArreglo = [];

arreglo = pedirElemento(arregloNumEjercicio6);
arregloFinal = intercambio(arreglo, nuevoArreglo);

console.log("Los datos ingresados se guardaron de la siguiente forma: [" + arreglo + "]");
console.log("Han sido reordenados a: [" + arregloFinal + "]");
*/

/*Escriba un programa que solicite al usuario el número de alumnos de un curso y cree un arreglo que almacene las notas del control 1 del curso. Luego, imprima en pantalla el promedio de todas las notas y muestre cuáles notas resultaron estar sobre el promedio.*/

console.log("\n     EJERCICIO 7 \n");

function pedirAlumnCurso(){
  let numAlumn = parseInt(prompt("Ingrese cuantos alumnos hay en el curso: "));
  return numAlumn;
}

function pedirNotas(alumnCurso){
  let notasAlumn = []
  for (i = 0; i < alumnCurso; i++){
    nota = parseInt(prompt("Ingrese las notas del control 1 del alumno: "));
    notasAlumn.push(nota);
  }
  return notasAlumn;
}

var numAlumn = pedirAlumnCurso();
var notasAlumn = pedirNotas(numALumn);

console.log(notasALumn)