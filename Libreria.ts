interface Libro{
    titulo:string
    ano:number
    autor:string
}

const libreria: Libro[] = [{titulo:"El Quijote", ano:1605, autor:"Miguel de Cervantes"},
                           {titulo:"Cien Años de Soledad", ano:1967, autor:"Gabriel García Márquez"},
                           {titulo:"1984", ano:1949, autor:"George Orwell"},
                           {titulo:"La Sombra del Viento", ano:2001, autor:"Carlos Ruiz Zafón"}
]


function encuentraLibros(autor:string,libros:Libro[]){
    const librosAnadidos:Libro[]=[]
    for(const libro of libros){
        if(libro.autor==autor){
            librosAnadidos.push(libro)
        }
    }
    return librosAnadidos
}

console.log(encuentraLibros("Miguel de Cervantes",libreria))