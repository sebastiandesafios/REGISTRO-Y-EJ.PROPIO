function agregarTarea() {
    var input = document.getElementById('nuevaTarea');
    var tarea = input.value;
    var lista = document.getElementById('listaTareas');

    if (tarea !== '') {
        var nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = tarea;
        nuevaTarea.onclick = function() {
            this.classList.toggle('completada');
        };
        lista.appendChild(nuevaTarea);
        input.value = '';
    }
}