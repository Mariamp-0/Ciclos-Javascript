// //While - Ejemplo es de 0 hasta 99

// let numero = 0

// while (numero < 100) {
//     console.log("Iteración while número: " , numero)
//     numero += 1
// }

// // Do while --- permite que el código se ejecute al menos una vez, y luego verifica la condición

// let contador = 100

// do {
//     console.log("Iteración do while número: " , contador)
//     contador += 1
// } while (contador < 100)



// // For 

// for (let i = 0; i < 99; i ++) {
//     console.log("Iteración for número", i)
// }

// console.log(i)

// For of 

// let nombres = ["Carlos","Pepe","Ana","Luisa"]

// for (const nombre of nombres) {
//     console.log("Nombre: " + nombre)
// }

// console.log("Estoy fuera")


//For 

// let estudiantes = [20,19,21,39,12]

// let mayor = 0

// for(let i = 0; i < estudiantes.length; i++ ) {
//     if (estudiantes[i] > mayor) {
//         mayor = estudiantes[i]
//     }
//     console.log("El estudiante mayor es de edad hasta ahora es: " + mayor)
// }
//console.log("El estudiante de mayor edad tiene: " + mayor)

//Break

let estudiantes = [20,19,21,39,12]

let mayor = 0

for(let i = 0; i < estudiantes.length; i++ ) {
    if (estudiantes[i] == 19) {
        mayor = estudiantes[i]
    }
    console.log("El estudiante tiene: " + mayor)
}

console.log("El estudiante tiene: " + mayor)


