// función para eliminar los cursos
const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask)
    return i;
  }
  
  const deleteTask = (event) => {
      //se elimina la etiqueta padre que contiene el icono eliminar
      const parent = event.target.parentElement;
      parent.remove();
  }

  export default deleteIcon;