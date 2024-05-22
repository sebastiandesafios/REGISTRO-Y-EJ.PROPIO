function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var imc = peso / (altura * altura);
    document.getElementById('resultadoIMC').innerHTML = "Tu IMC es: " + imc.toFixed(2);
}