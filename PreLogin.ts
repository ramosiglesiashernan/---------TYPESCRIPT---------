/*
Crea un array de UsuariosRegistrados (con email y password - en texto plano de momento, no te preocupes por el hash).
Crea una función intentarLogin(email, password).
Lógica:
Usa .find() para buscar si el email existe.
Si existe, comprueba si la contraseña coincide.
Devuelve un objeto: { success: true, message: "Bienvenido" } o { success: false, message: "Error..." }.
*/

interface Usuario{
    email:string
    password:string
}

function intentarLogin(usuarios:Usuario[],email:string,password:string){
    const usuarioEncontrado=usuarios.find(u=> u.email==email)
        if(!usuarioEncontrado){
            return "No existe el usuario"
        }
        if(usuarioEncontrado.password==password){
            return "Bienvenido"
        }else{
            return "Contraseña incorrecta"
        }
}


const usuarios:Usuario[]=[{email:"a@a.es",password:"1234"},{email:"b@b.es",password:"2345"},{email:"d@d.es",password:"3456"},{email:"c@c.es",password:"4567"}]

console.log(intentarLogin(usuarios,"a@a.es","1234"))
console.log(intentarLogin(usuarios,"a@a.es","0000"))
console.log(intentarLogin(usuarios,"ppp.es","2345"))