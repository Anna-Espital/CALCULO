var formulario = document.forms.formulario_periodo
var resultado = document.getElementById("res-Periodo")

formulario.monto.oninput = calcularAV
formulario.Renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let v = parseFloat(formulario.monto.value)
    let r= parseFloat(formulario.Renta.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = ((Math.log10(r))-(Math.log10(r-(i*v))))/(Math.log10(1+i))

    



    resultado.innerHTML = total.toFixed(2)
}           