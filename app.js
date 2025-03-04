// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
let listaAmigos = [];
let nombresMostrados = [];

//Función para manejar la tecla enter
     function manejarEnter(event){
          if(event.key === 'Enter'){
               agregarAmigo();
          }
     }

//Función para agregar un nombre al array
     function agregarAmigo(){
          const input = document.getElementById('amigo');
          const nombre = input.value.trim();

          if(nombre) {

               if (listaAmigos.includes(nombre)) {
                    alert('Este nombre ya está en la lista');
                    return;
               }

          listaAmigos.push(nombre);
          input.value = '';
          actualizarListaAmigos();
          } else {
               alert('Debes ingresar un nombre');
          }
     }

//Función para actualizar la lista de amigos en la página

     function actualizarListaAmigos(){
          const lista = document.getElementById('lista-amigos');
          lista.innerHTML = '';

          listaAmigos.forEach((nombre, index) => {
          const item = document.createElement('li');
          item.textContent = nombre;
          if (index === listaAmigos.length - 1) {
               item.classList.add('resaltado');
          }
          lista.appendChild(item);
          });

//Actualizar el contador de nombres mostrados
          const contador = document.getElementById('contadorNombres');
          contador.textContent = `Nombres agregados: ${listaAmigos.length}`;
     }

//Función para mostrar un nombre aleatorio
     function generarColorAleatorio() {
          return `rgb (${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
     
     }

     // Función para generar un color aleatorio
function generarColorAleatorio() {
     return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
 }

 // Función para deshabilitar o habilitar botones
function deshabilitarBotones(deshabilitar = true) {
     const botonMostrarNombres = document.getElementById("mostrarNombres");
     const botonReiniciar = document.getElementById("reiniciar");
 
     if (deshabilitar) {
         botonMostrarNombres.disabled = true;
         botonReiniciar.classList.add("resaltado"); // Resaltar el botón de reinicio
     } else {
         botonMostrarNombres.disabled = false;
         botonReiniciar.classList.remove("resaltado"); // Quitar el resaltado
     }
 }

 // Función para hacer parpadear un elemento
function parpadearElemento(elemento) {
     let contador = 0;
     const intervalo = setInterval(() => {
         elemento.style.visibility = (elemento.style.visibility === "hidden" ? "visible" : "hidden");
         contador++;
 
         if (contador === 6) { // Parpadear 3 veces (visible -> hidden -> visible -> hidden -> visible -> hidden -> visible)
             clearInterval(intervalo);
             elemento.style.visibility = "visible"; // Asegurarse de que el elemento esté visible al final
         }
     }, 300); // Cambiar la visibilidad cada 300 ms
 }