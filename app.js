// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 
// Array para almacenar los nombres
 let amigos = [];

 // Función para agregar nombres a la lista
 function agregarNombre() {
   const nombreInput = document.getElementById('nombre');
   const nombre = nombreInput.value.trim();

   // Validar si el campo está vacío
   if (nombre === "") {
     alert("Por favor, ingresa un nombre válido.");
     return;
   }

   // Agregar el nombre al array y limpiar el campo
   amigos.push(nombre);
   nombreInput.value = "";

   // Actualizar la lista en la página
   actualizarLista();
 }

 // Función para actualizar la lista de nombres en la página
 function actualizarLista() {
   const listaAmigos = document.getElementById('lista-amigos');
   listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

   amigos.forEach((amigo) => {
     const li = document.createElement('li');
     li.textContent = amigo;
     listaAmigos.appendChild(li);
   });
 }

 // Función para sortear un amigo secreto
 function sortearAmigo() {
   if (amigos.length === 0) {
     alert("No hay nombres en la lista. Agrega algunos amigos primero.");
     return;
   }

   // Seleccionar un nombre aleatorio
   const indiceAleatorio = Math.floor(Math.random() * amigos.length);
   const amigoSecreto = amigos[indiceAleatorio];

   // Mostrar el resultado
   const resultado = document.getElementById('resultado');
   resultado.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
 }
