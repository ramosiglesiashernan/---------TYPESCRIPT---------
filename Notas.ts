/*Ejercicio 8: Sistema de Notas (Cálculos de Array)
Crea una función llamada calcularPromedio que reciba un array de números.
La función debe devolver el promedio (media aritmética).
Reto de Ingeniero: Si el array está vacío, la función debe devolver 0 (para evitar el error matemático de dividir por cero).*/


function calcularPromedio(notas:number[]){
    if(notas.length==0){
        console.error("El array está vacío, el promedio es 0")
        return 0
    }
    let suma:number=0
    for(const num of notas){
        suma+=num
    }
    return suma/notas.length
}


console.log(calcularPromedio([8.2,9.3,7.0,8.1,7.8,7.1,8.7,8.0]))
console.log(calcularPromedio([8.25,8.75,8.75,9.0,9.0,9.0,8.75,9.0]))
