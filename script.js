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
    console.log(input.value)
}

console.log(btn)
btn.addEventListener("click", createTask);




