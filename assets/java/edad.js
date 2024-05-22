function calcularEdadMascota() {
    var edadHumana = parseInt(document.getElementById('edadHumana').value);
    var edadMascota = 0;
    if (edadHumana <= 2) {
        edadMascota = edadHumana * 10.5;
    } else {
        edadMascota = 21 + ((edadHumana - 2) * 4);
    }
    document.getElementById('resultadoEdadMascota').innerHTML = "La edad de tu mascota es aproximadamente: " + edadMascota;
}