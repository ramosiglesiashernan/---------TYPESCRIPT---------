interface Usuario{
    email:string
    pass:string
}

interface Producto {
    nombre: string;
    precio: number;
}

const usuarios:Usuario[] = [{email:"a",pass:"1234"},
                            {email:"b",pass:"1234"}
]

const inputEmail = document.getElementById('email') as HTMLInputElement
const inputPass = document.getElementById('password') as HTMLInputElement
const boton = document.getElementById('btnLogin') as HTMLButtonElement
const texto = document.getElementById('mensaje') as HTMLParagraphElement
const dashboard = document.getElementById('dashboard') as HTMLDivElement
const loginCard = document.getElementById('login-card') as HTMLDivElement
const btSalir = document.getElementById('btnLogOut') as HTMLButtonElement

function cambiarPantalla(login:boolean){
    if(login){
        mostrarMensaje("Login correcto, Bienvenido","green")
        dashboard.style.display = "block";
        loginCard.style.display = "none";
    } else {
        dashboard.style.display = "none";
        loginCard.style.display = "block";
    }
}

function login():boolean{
    const email = inputEmail.value
    const pass = inputPass.value

    console.log("Intentando login con:", { email, pass });
    console.log("Usuarios disponibles:", usuarios);

    const usuarioEncontrado = usuarios.find(e=>e.email==email)
    if(!usuarioEncontrado){
        mostrarMensaje("El usuario no existe","red")
        return false
    }
    else{
        if(usuarioEncontrado.pass==pass){
            mostrarMensaje("Bienvenido","green")
            return true
        }
        else{
            mostrarMensaje("Contraseña incorrecta","red")
            return false
        }
    }
}

const memoria = localStorage.getItem("sesionActiva")
if(memoria=="si"){
    cambiarPantalla(true);
}

function mostrarMensaje(cadena:string,color:string){
    texto.innerHTML = cadena
    texto.style.color = color
}

boton.addEventListener('click',()=>{
    const resultado = login()
    if (resultado) {
        cambiarPantalla(true)
        localStorage.setItem("sesionActiva", "si")
    }
})

btSalir.addEventListener('click',()=>{
    localStorage.removeItem("sesionActiva")
    location.reload()
})

class Inventario {
    private lista: Producto[] = [];

    public agregar(n: string, p: number) {
        if (n === "" || p <= 0) return; // Validación básica
        this.lista.push({ nombre: n, precio: p });
        this.dibujar();
    }

    public dibujar() {
        const contenedor = document.getElementById('listaProductos') as HTMLUListElement;
        contenedor.innerHTML = ""; // Limpiamos para no duplicar
        
        this.lista.forEach(prod => {
            const li = document.createElement('li');
            li.innerHTML = `📦 <b>${prod.nombre}</b> - ${prod.precio}€`;
            contenedor.appendChild(li);
        });
    }
}

const miInventario = new Inventario();

// CONECTAR EL BOTÓN DE AÑADIR
const btnAnadir = document.getElementById('btnAnadir') as HTMLButtonElement;
const inputNombreProd = document.getElementById('nombreProd') as HTMLInputElement;
const inputPrecioProd = document.getElementById('precioProd') as HTMLInputElement;

btnAnadir.addEventListener('click', () => {
    const nombre = inputNombreProd.value;
    const precio = Number(inputPrecioProd.value);
    
    miInventario.agregar(nombre, precio);
    
    // Limpiamos los inputs para la siguiente entrada
    inputNombreProd.value = "";
    inputPrecioProd.value = "";
});