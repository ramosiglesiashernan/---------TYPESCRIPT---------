/* Ejercicio 10: Buscador de Precios (Rangos)
Usa tu array de Producto del ejercicio 6.
Crea una función buscarPorRangoDePrecio que reciba el array, un precioMinimo y un precioMaximo.
Debe devolver todos los productos que estén en ese rango (inclusive).*/

interface Producto {
    nombre:string
    precio:number
}

function buscarPorRangoDePrecio(productos: Producto[], precioMin:number, precioMax:number){
    for(const item of productos){
        if(item.precio >= precioMin && item.precio <= precioMax){
            console.log(item)
        }
    }
}

const productos: Producto[] =[{
    nombre: "Producto A",
    precio: 50
},{
    nombre: "Producto B",
    precio: 150
},{
    nombre: "Producto C",
    precio: 250
}]

console.log("Productos entre 100 y 200:")
buscarPorRangoDePrecio(productos, 100, 200)