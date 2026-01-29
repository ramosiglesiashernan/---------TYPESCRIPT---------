
interface Productos {
    nombre:string
    precio:number
    stock:number
}

function actualizarStock(productos:Productos[], nombreProductos:string, cantidadNueva:number){
    for(const producto of productos){
        if(producto.nombre == nombreProductos){
            producto.stock += cantidadNueva
            return producto
        }
        else{
            console.error("El producto no existe")
        }
    }
}

const mixProductos:Productos[] =[{nombre:"Peras",precio:10,stock:5}]
console.log(actualizarStock(mixProductos,"Peras",10))