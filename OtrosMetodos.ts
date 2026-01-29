/*
Ejercicio 11: Transformación Masiva (.map)
Tienes un array de estudiantes con nombre y nota (0-10).
Usa .map() para crear un nuevo array de objetos que tenga: nombre y resultado (si la nota es >= 5 "Aprobado", si no "Suspenso").
El reto: No uses un bucle for, usa la sintaxis: const resultado = estudiantes.map(e => { ... }).

*/

interface estudiante{
    nombre:string
    nota:number
}
function transformarEstudiantes(estudiantes:estudiante[]){
    return estudiantes.map(e => {
        if(e.nota>=5){
            return {nombre: e.nombre, resultado: "Aprobado"}
        }else{
            return {nombre: e.nombre, resultado: "Suspenso"}
        }
    })
}

function transformarEstudiantesV2(estudiantes:estudiante[]){
    return estudiantes.map(e => ({
        nombre: e.nombre,
        resultado: e.nota >= 5 ? "Aprobado" : "Suspenso"
    }))
}

const estudiantes:estudiante[]=[
    {nombre: "Ana", nota: 7},
    {nombre: "Luis", nota: 4},
    {nombre: "Marta", nota: 9},
    {nombre: "Carlos", nota: 3}]

console.log(transformarEstudiantes(estudiantes))



/* ---------------------------------------------- */

/*Ejercicio 12: La Búsqueda Pro (.find y .filter)
Tienes una lista de Tareas con id, titulo y completada (boolean).
Crea una función para obtener solo las tareas pendientes (.filter).
Crea otra función para marcar una tarea como completada buscando por id (.find).
*/


interface Tarea{
    id:number
    titulo:string
    completada:boolean
}

function tareasPendientes(tareas:Tarea[]){
    return tareas.filter(tarea=>!tarea.completada)
}

function marcarTareaCompletada(tareas:Tarea[],id:number){
    const tarea = tareas.find(tarea=>tarea.id==id)
    if(tarea && !tarea.completada){
        tarea.completada=true
    }
    return tarea
}


const tareas:Tarea[]=[
    {id:1, titulo:"Comprar pan", completada:false},
    {id:2, titulo:"Lavar coche", completada:true},
    {id:3, titulo:"Estudiar TypeScript", completada:false}
]

console.log(tareasPendientes(tareas))
console.log(marcarTareaCompletada(tareas,1))
console.log(tareasPendientes(tareas))
