/**
 * Función para crear el elemento <i>
 */
 const checkComplete = () => {
    //se crea la etiqueta <i> 
    const i = document.createElement("i");
    //se le agregan las clases que pertenecen a la etiqueta <i>
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
}

//función que sirve para marcar el check cuando se da click
const completeTask = (event) => {
    const element =  event.target;
    //para agregar clases se utiliza 'add'
    //para eliminarlas 'remove'
    //para verificar si exiten o no se usa 'toggle' que a su vez sirve como: 'add' y 'remove'
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon")
    element.classList.toggle("far");
};

export default checkComplete;