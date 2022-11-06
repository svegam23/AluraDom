/**
 * Función Normal
 * 
btn.addEventListener("click", function(evento){
    //lo que permite este evento es que no recargue la página o actualice
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    console.log(input.value)
})
 **
 * Arrow function o funciones anonimas,
 * Se identifican por llevar => en vez de "function"
 * se utlizan más que todo cuando la función es corta
 *
 btn.addEventListener("click", (evento) =>{
    //lo que permite este evento es que no recargue la página o actualice
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    console.log(input.value)
})
*/

/**
 * IIFE: Immediately Invoked Function Expression
 * Esto se hace para que las funciones sea de uso local y no pueda ser accesible de formal global
 */

import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]")

const createTask= (evento) =>{
    //lo que permite este evento es que no recargue la página o actualice
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li");
    //permite agregar la clase a la etiqueta <li> para que sirva el CSS
    task.classList.add('card');
    //permite poner el Input en blanco después de dar click en el botón
    input.value = "";
    
/**
 * se crea el esqueleto del li
 */
    //se crea el elemento <div> que contiene el <i>
    const taskContent = document.createElement('div');

    //Se crea el elemento <span>
    const  titleTask = document.createElement('span');
    //se agrega la clase al elemento
    titleTask.classList.add('task');
    //Se agrega el texto correspondiente del input
    titleTask.innerText = value;
    //Se agrega el <i>
    taskContent.appendChild(checkComplete());
    //se agrega titleTask a taskContent
    taskContent.appendChild(titleTask);

    //task.innerHTML = content;

    //se agrega todo el contenido al <li> desde el <div>
    task.appendChild(taskContent);
//se llama la función deleteIcon
    task.appendChild(deleteIcon());
    //Se agrega el hijo task(<li>) al padre list(<ul>)
    list.appendChild(task);
}

btn.addEventListener("click", createTask);

