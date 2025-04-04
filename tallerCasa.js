// Actividad 1 Genere un número: Genera un número aleatorio entre 1 y 10 y utiliza
// un ciclo while para permitir que el usuario adivine el número, imprimiendo
// mensajes que indiquen si el intento es mayor o menor que el número generado.

// let number = 4

// let RandomNumber = parseInt(prompt("Ingrese un número entre 1 y 10"))

// while (RandomNumber != number) {
//     if (RandomNumber > number){
//         console.log("El intento es un número mayor que el número a adivinar")
//     } else {
//         console.log("El intento es un número menor que el número a adivinar")
//     }
     
//     RandomNumber = parseInt(prompt("Fallaste: Ingresa otro número"))
//     } 

// console.log("Lo adivinaste")


// Actividad 2 Suma de Dígitos: Crea un programa que pida al usuario un número
// positivo y calcule la suma de sus dígitos utilizando un ciclo while.

// let numero = parseInt(prompt("Ingrese un número positivo"))
// let digito
// let sumaDigitos = 0

// while (numero > 0) {
//     digito = numero % 10 // modulo de 10 da como resultado siempre el último dígito
//     sumaDigitos += digito
    
// }

// console.log("La suma es: " + sumaDigitos)



// Actividad 3 Vocales: Pide al usuario que ingrese una frase y cuenta cuántas
// vocales hay en esa frase usando un ciclo while.

// let frase = prompt("Ingrese una frase para contar sus vocales")


// let CantidadVocales = 0

// let i = 0

// while (i < frase.length) {
//     let letra = frase[i]
//     if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
//         CantidadVocales++
//     }
//     i++
// }

// console.log("La cantidad de vocales en la frase son: " + CantidadVocales)


// Actividad 4 Menú de Opciones: Implementa un menú que permite seleccionar
// una opción. Usa un ciclo do while para mostrar el menú hasta que el usuario
// decida salir.

// let respuesta

// do {
//     respuesta = prompt("Deseas continuar, escribe 'Si', de lo contrario escribe 'No'")
    
// } while (respuesta == "Si");

// console.log("Adios")



// Actividad 6 Contar Números Positivos: Crea un programa que pida números al
// usuario y cuente cuántos son positivos, deteniéndose cuando se ingresa un
// número negativo. Use do while.


// let numero
// let contador = 0

// do {
//     numero = parseInt(prompt("Ingresa un número, si es negativo saldrá del programa"))
//     if (numero >= 0) {
//         contador++
//     }
// } while (numero >= 0)

// console.log("Ingresó " + contador + "números positivos")



// Actividad 7 Imprimir Frutas: Crea un array con nombres de varias frutas y utiliza
// un ciclo for para imprimir cada fruta en una lista numerada.

// let frutas = ["Banano","Pera","Piña","Sandia"]

// let numeroFruta = 0


// for (let i = 0 ; i < frutas.length; i++) {
//     numeroFruta++
//     console.log(numeroFruta +". " + frutas[i])
// }


// Actividad 8 Factorial: Escribe un programa que calcule el factorial de un número
// ingresado por el usuario utilizando un ciclo for.

// let numero = parseInt(prompt("Ingrese un número para hallar su factorial"))

// let multiplicacion = 1

// for (let i = 1; i <= numero; i++) {
//     multiplicacion = multiplicacion * i
// }

// console.log("El factorial de " + numero + " es: " + multiplicacion)

// Actividad 9 Números Pares: Genera e imprime los primeros 20 números pares
// usando un ciclo for.

