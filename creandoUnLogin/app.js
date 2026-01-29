var usuarios = [{ email: "a", pass: "1234" },
    { email: "b", pass: "1234" }
];
var inputEmail = document.getElementById('email');
var inputPass = document.getElementById('password');
var boton = document.getElementById('btnLogin');
var texto = document.getElementById('mensaje');
var dashboard = document.getElementById('dashboard');
var loginCard = document.getElementById('login-card');
var btSalir = document.getElementById('btnLogOut');
function cambiarPantalla(login) {
    if (login) {
        mostrarMensaje("Login correcto, Bienvenido", "green");
        dashboard.style.display = "block";
        loginCard.style.display = "none";
    }
    else {
        dashboard.style.display = "none";
        loginCard.style.display = "block";
    }
}
function login() {
    var email = inputEmail.value;
    var pass = inputPass.value;
    console.log("Intentando login con:", { email: email, pass: pass });
    console.log("Usuarios disponibles:", usuarios);
    var usuarioEncontrado = usuarios.find(function (e) { return e.email == email; });
    if (!usuarioEncontrado) {
        mostrarMensaje("El usuario no existe", "red");
        return false;
    }
    else {
        if (usuarioEncontrado.pass == pass) {
            mostrarMensaje("Bienvenido", "green");
            return true;
        }
        else {
            mostrarMensaje("Contraseña incorrecta", "red");
            return false;
        }
    }
}
var memoria = localStorage.getItem("sesionActiva");
if (memoria == "si") {
    cambiarPantalla(true);
}
function mostrarMensaje(cadena, color) {
    texto.innerHTML = cadena;
    texto.style.color = color;
}
boton.addEventListener('click', function () {
    var resultado = login();
    if (resultado) {
        cambiarPantalla(true);
        localStorage.setItem("sesionActiva", "si");
    }
});
btSalir.addEventListener('click', function () {
    localStorage.removeItem("sesionActiva");
    location.reload();
});
var Inventario = /** @class */ (function () {
    function Inventario() {
        this.lista = [];
    }
    Inventario.prototype.agregar = function (n, p) {
        if (n === "" || p <= 0)
            return; // Validación básica
        this.lista.push({ nombre: n, precio: p });
        this.dibujar();
    };
    Inventario.prototype.dibujar = function () {
        var contenedor = document.getElementById('listaProductos');
        contenedor.innerHTML = ""; // Limpiamos para no duplicar
        this.lista.forEach(function (prod) {
            var li = document.createElement('li');
            li.innerHTML = "\uD83D\uDCE6 <b>".concat(prod.nombre, "</b> - ").concat(prod.precio, "\u20AC");
            contenedor.appendChild(li);
        });
    };
    return Inventario;
}());
var miInventario = new Inventario();
// CONECTAR EL BOTÓN DE AÑADIR
var btnAnadir = document.getElementById('btnAnadir');
var inputNombreProd = document.getElementById('nombreProd');
var inputPrecioProd = document.getElementById('precioProd');
btnAnadir.addEventListener('click', function () {
    var nombre = inputNombreProd.value;
    var precio = Number(inputPrecioProd.value);
    miInventario.agregar(nombre, precio);
    // Limpiamos los inputs para la siguiente entrada
    inputNombreProd.value = "";
    inputPrecioProd.value = "";
});
