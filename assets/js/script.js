function calcular(){

    /* Obtengo Origen de datos*/
    inputCantidad = document.querySelector('#cantidad-texto')
    inputColor = document.querySelector('#color-texto')
    var spanPrecio = document.getElementById('precio')

    /* Donde debe quedar el resultado*/
    var spanTotal = document.getElementById('total')
    var spanCantidad = document.getElementById('cantidad')
    var spanColor = document.getElementById('color')

    /* Imprimo el resultado*/
    spanTotal.innerHTML = Number(spanPrecio.innerText) * Number(inputCantidad.value)
    spanCantidad.innerHTML = inputCantidad.value
    spanColor.style.backgroundColor = inputColor.value

    /* Log para ver variables*/
    console.log(inputColor.value)
    console.log(inputCantidad.value)
    console.log(spanPrecio.innerText)

}