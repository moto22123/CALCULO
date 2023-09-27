var formulario = document.forms.formulario_vractual
var resultado = document.getElementById("for-vr-actual")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV
formulario.capitalizaciones.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let j = parseFloat((formulario.interes.value)/100)
    let total = ((1-(1+j)**(-n))/j)*r

    resultado.innerHTML = total.toFixed(2)
}