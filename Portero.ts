/* Ejercicio 9: El Portero Automático (Validación Múltiple)
Crea una función puedeEntrar que reciba un objeto Persona con: edad (number), tieneEntrada (boolean) y estaBaneado (boolean).
La función debe devolver true solo si: es mayor de 18 Y tiene entrada Y NO está baneado.*/


function porteroJoker(edad:number,tieneEntrada:boolean,estaBaneado:boolean):boolean{
    if(edad>=18 && tieneEntrada && !estaBaneado){
        return true
    }
    else{
        return false
    }
}


//test
console.log("Puede pasar persona 1: ",porteroJoker(20,true,false)) //true
console.log("Puede pasar persona 2: ",porteroJoker(17,true,false)) //false
console.log("Puede pasar persona 3: ",porteroJoker(22,false,false)) //false
console.log("Puede pasar persona 4: ",porteroJoker(25,true,true)) //false
console.log("Puede pasar persona 5: ",porteroJoker(30,true,false)) //true