function buscarUsuarioEnDB(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log("Buscando en la base de datos...");
        setTimeout(() => {
            if (id === 1) {
                resolve("Usuario: Alex");
            } else {
                reject("Error: Usuario no encontrado");
            }
        }, 2000);
    });
}

// TU RETO: Crea una función asíncrona 'ejecutarBusqueda'
// que use 'await' para llamar a buscarUsuarioEnDB(1)
// y envuelve la llamada en un bloque try/catch para capturar el error.

async function name() {
    try {
        const resultado = await(buscarUsuarioEnDB(0))
        console.log(resultado)
    } catch (error) {
        console.error(error)
    }
}

name()