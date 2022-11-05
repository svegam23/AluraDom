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
 *
 btn.addEventListener("click", (evento) =>{
    //lo que permite este evento es que no recargue la página o actualice
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    console.log(input.value)
})
*/

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
    
    //backticks = ``
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;
    //Se agrega el hijo task(<li>) al padre list(<ul>)
    list.appendChild(task);
    console.log(content)
}

console.log(btn)
btn.addEventListener("click", createTask);




