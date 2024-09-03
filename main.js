// Variables
let total = 0; 

// Array de objetos que representan los libros disponibles
const libros = [
  { titulo: "Harry Potter y La Piedra Filosofal", precio: 790 },
  { titulo: "Cien Años de Soledad", precio: 890 },
  { titulo: "Culpa Mia", precio: 400 }
];

// Constante para almacenar usuarios registrados
const usuarios = [];

// Función para ingresar un cliente
function ingresarCliente() {
  const nombre = prompt("Ingrese el nombre:");
  const apellido = prompt("Ingrese el apellido:");
  const email = prompt("Ingrese el correo electrónico:");
  const contrasena = prompt("Ingrese la contraseña:");
  
  // Validar que todos los campos estén llenos
  if (nombre && apellido && email && contrasena) {
    const usuario = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      contrasena: contrasena
    };
    usuarios.push(usuario); // Agregar el nuevo usuario al array de usuarios
    console.log("Cliente registrado:", usuario);
    alert ("Cliente registrado con éxito")
  } else {
    console.log("Por favor, complete todos los campos.");
    alert ("Error: Por favor, complete todos los campos")
  }
}

// Función para seleccionar un libro y agregar su precio al total 
function seleccionarLibro(titulo) {
  let libroEncontrado = false; 

  // Buscar el libro por título
  for (const libro of libros) {
    if (libro.titulo === titulo) {
      total = total + libro.precio; 
      console.log(titulo + " ha sido seleccionado. Precio: $" + libro.precio);
      libroEncontrado = true; 
      break;
    }
  }

  // Si no se encuentra el libro, mostrar mensaje
  if (!libroEncontrado) {
    console.log("El libro no está disponible.");
  }
}

// Función para calcular el total de la compra
function calcularTotal() {
  return total; 
}

// Función para mostrar el total de la compra
function mostrarTotal() {
    if (confirm("¿Desea ver el total de su compra?")) {
      const totalCompra = calcularTotal(); // Llamar a calcularTotal para obtener el total
      if (totalCompra === 0) {
        console.log("No has seleccionado ningún libro.");
        alert("No has seleccionado ningún libro.");
      } else {
        console.log("Total a pagar: $" + totalCompra);
        alert("Total a pagar: $" + totalCompra);
      }
    } else {
      console.log("Acción cancelada.");
      alert("Acción cancelada.");
    }
  }


// Ejemplo de uso para llamar las funciones
ingresarCliente(); 
seleccionarLibro("Harry Potter y La Piedra Filosofal"); 
seleccionarLibro("Culpa Mia");
seleccionarLibro("Rayuela");
mostrarTotal();
