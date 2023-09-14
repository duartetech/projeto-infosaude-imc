function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso/(altura**2);
    document.getElementById("result").innerHTML = "Seu IMC é: " + parseInt(imc);
}