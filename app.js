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
