//Actividad 1

// let numero = 1

// while (numero <= 100) {
//     console.log("Iteración número: ", numero)
//     numero += 1
// }

//----Do while----

// let numero = 1

// do {
//     console.log("Iteración número: " , numero) // Sí va a imprimir el número 100 cumpla o no la condición
//     numero += 1
// } while(numero <=100)



//Actividad 2

// let contador = 10

// while (contador != 1) {
//     contador -=1
//     console.log(contador)

//     if (contador == 1) {
//         console.log("Terminé")
//     }
// }

//-----Do While ----

// let contador = 10

// do {
//     contador -= 1
//     console.log(contador)

//     if (contador == 1) {
//         console.log("Terminé")
//     }
// } while (contador != 1)



//Actividad 3 ---For

// let numeros = [,1,2,3,4,5,6,7,8,9,10]

// for(let i = 0; i < 10; i++) {
//     console.log("Tabla de múltiplicar del número: ", numeros)
//     console.log(numeros[i] * 1)
//     console.log(numeros[i] * 2)
//     console.log(numeros[i] * 3)
//     console.log(numeros[i] * 4)
//     console.log(numeros[i] * 5)
//     console.log(numeros[i] * 6)
//     console.log(numeros[i] * 7)
//     console.log(numeros[i] * 8)
//     console.log(numeros[i] * 9)
// }


// //-------Otra opción

// for (let i =0; i < 9; i++) {
//     console.log("Tabla de múltiplicar del número: ", numeros)
//     for (let k = 0; k < 9; k++) {
//         console.log(numeros[i] * numeros[k])
//     }
        
// }


//Actividad 4 

// let sumaNotas = 0
// let nota 

// for (let i=0; i < 5; i++) {
//     nota = parseInt(prompt("Ingrese la nota"))
//     sumaNotas += nota
// } 

// let promedio = sumaNotas/5
// console.log("El promedio de notas es: " , promedio)


//Actividad 5 ---- For of

// let palabras = ["Hola","Adios"]

// for (const palabra of palabras){
//     console.log("Palabra: " + palabra)
//     let longitud = palabra.length
//     console.log("Longitud: " + longitud)
// }

// console.log("Estoy fuera")
    

//Actividad 6 ---- For of

// let texto = "¡Hola, mundo cruel!"
// for (const caracter of texto) {
//     console.log ("Caracter: " + caracter)
// }

// console.log("Estoy fuera")

//Actividad 7 --- While

// suma = 0
// let i = 1
// while (i <= 100) {
//     suma = suma + i
//     console.log("Iteración suma: " + suma)
//     i++
// }
// console.log("La suma es de: " + suma)


//Actividad 8 ----- While

// let sumaEdades = 0
// let cantidadEdades = 0

// let negativo = false

// while(negativo != true) {
//     let edadUsuario = parseInt(prompt("Ingrese la edad de uno des sus amigos, ponga un negativo en caso de que quiera terminar"))

//     if (edadUsuario < 0) {
//         negativo = true
//     }

//     sumaEdades += edadUsuario
//     cantidadEdades += 1
// }

// let promedio = sumaEdades/cantidadEdades

// console.log(promedio)


//Actividad 9 

// let digitos = prompt("Ingrese el número al que desee contar sus digitos")

// let listaDigitos = digitos.split("") //Separar en una lista

// console.log(listaDigitos)

// let contador = 0


// while (contador != listaDigitos.length) {
//     contador += 1
// }

// console.log("Digitos:", contador)

//Actividad 10 --- Do While

// let deseaSalir

// do { 
//     let monto = prompt("Ingrese el monto de la moneda")
//     console.log("El monto de la moneda es: " , monto)

//     let deseaSalir = prompt("¿Desea Salir? Ingrese 'Sí'")

// } while (desea == "No")


// Actividad 11

// let numero = parseInt(prompt("Ingrese la cantidad de números que quiere ver de la secuencia"))

// let Fibonacci = [0,1]

// for (let i = 2; i < numero; i++) {
//     Fibonacci[i] = Fibonacci[i-1] + Fibonacci [i - 2]

// }

// console.log("Los primeros " + numero + " números son: " + Fibonacci.slice(0,numero))