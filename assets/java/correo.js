function generarCorreo () {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;

    var correo = nombre.toLowerCase() + "." + apellido.toLowerCase() + fechaNacimiento.toLowerCase() + "@example.com";

    alert("Correo electrónico generado: " + correo);
}