// Variables
let total = 0; // Variable para almacenar el total de la compra

// Array de objetos que representan los libros disponibles
const libros = [
    { titulo: "El Quijote", precio: 20 },
    { titulo: "Cien Años de Soledad", precio: 25 },
    { titulo: "1984", precio: 15 }
];

// Constante para almacenar usuarios registrados
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Mostrar libros en la lista
function mostrarLibros() {
    const librosLista = document.getElementById("librosLista");
    libros.forEach(libro => {
        const li = document.createElement("li");
        li.textContent = `${libro.titulo} - $${libro.precio}`;
        const button = document.createElement("button");
        button.textContent = "Agregar al Carrito";
        button.addEventListener("click", () => seleccionarLibro(libro.titulo));
        li.appendChild(button);
        librosLista.appendChild(li);
    });
}

// Función para ingresar un cliente usando el formulario
document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario de manera predeterminada

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const contrasena = document.getElementById("contrasena").value;

    if (nombre && apellido && email && contrasena) {
        const usuario = { nombre, apellido, email, contrasena };
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios)); // Guardar en LocalStorage

        document.getElementById("resultado").innerText = `Usuario ${nombre} ${apellido} registrado correctamente.`;
        document.getElementById("registroForm").reset();
        console.log("Usuarios registrados:", usuarios);
    } else {
        document.getElementById("resultado").innerText = "Por favor, complete todos los campos.";
    }
});

// Función para seleccionar un libro y agregar su precio al total
function seleccionarLibro(titulo) {
    let libroEncontrado = false;

    libros.forEach(libro => {
        if (libro.titulo === titulo) {
            total += libro.precio;
            agregarAlCarrito(libro);
            libroEncontrado = true;
        }
    });

    if (!libroEncontrado) {
        console.log("El libro no está disponible.");
    }
}

// Función para agregar el libro al carrito
function agregarAlCarrito(libro) {
    const carritoLista = document.getElementById("carritoLista");
    const li = document.createElement("li");
    li.textContent = `${libro.titulo} - $${libro.precio}`;
    
    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.addEventListener("click", () => {
        total -= libro.precio;
        carritoLista.removeChild(li);
        mostrarTotal();
    });

    li.appendChild(eliminarBtn);
    carritoLista.appendChild(li);
    mostrarTotal();
}

// Función para mostrar el total de la compra
function mostrarTotal() {
    const totalCompra = document.getElementById("totalCompra");
    totalCompra.innerText = `Total a pagar: $${total}`;
}

// Función para manejar el pago
function manejarPago() {
    if (total > 0) {
        const resultadoPago = document.getElementById("resultadoPago");
        resultadoPago.innerText = `Gracias por su compra. El total a pagar es: $${total}`;
        
        // Limpiar el carrito después del pago
        total = 0;
        document.getElementById("carritoLista").innerHTML = '';
        mostrarTotal();
    } else {
        const resultadoPago = document.getElementById("resultadoPago");
        resultadoPago.innerText = "El carrito está vacío.";
    }
}

// Agregar el evento al botón de pagar
document.getElementById("pagarBtn").addEventListener("click", manejarPago);

// Mostrar libros al cargar la página
mostrarLibros();
