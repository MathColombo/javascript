function contar() {

    var inicio = document.querySelector('input#inicio')
    var final = document.querySelector('input#final')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')

    while(inicio <= final) {
        res.innerHTML = inicio
        inicio += passo
    }

}