function load() {

    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora < 12) {
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#D7BB97'
    } else if (hora < 18) {
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#CA3400'
    } else {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#022147'
    }

}
