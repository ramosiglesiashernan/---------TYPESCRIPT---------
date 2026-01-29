/*Ejercicio 7: El Perfil de Usuario (Propiedades opcionales ?)
No todos los usuarios llenan todos los datos en un formulario.
Crea una interface Perfil con: username (string), email (string) y biografia (opcional).
Para hacer una propiedad opcional en TS se usa el signo de interrogación: biografia?: string.
Crea una función que reciba ese objeto y devuelva un string para mostrar en la web.
Lógica: Si tiene biografía, devuélvela. Si no, devuelve "Este usuario no ha escrito nada aún".*/

interface Perfil{
    username:string
    email:string
    biografia?:string
}

function mostrarPerfil(usuario:Perfil[]){
    for(const user of usuario){
        if(user.biografia){
            console.log(`Usuario: ${user.username}\nEmail: ${user.email}\nBiografía: ${user.biografia}\n`)
        }
        else{
            console.log(`Usuario: ${user.username}\nEmail: ${user.email}\nBiografía: Este usuario no ha escrito nada aún\n`)
        }
    }
}

const nuevoUsuario:Perfil[]=[{username:"herni",email:"ramos@gmail.es",biografia:"Me gusta aprender TypeScript"},
                             {username:"luis",email:"luis@gmail.com"}]
mostrarPerfil(nuevoUsuario)