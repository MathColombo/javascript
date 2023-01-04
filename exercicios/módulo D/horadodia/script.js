function carregar() {

    var msg = window.document.querySelectorAll('div#msg')
    var img = window.document.querySelectorAll('div#imagem')
    //var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora < 12) {
        //Bom dia
        img.src = 'manha.png'
    } else if (hora < 18) {
        //Boa tarde
        img.src = 'tarde.png'
    } else {
        //Boa noite
        img.src = 'noite.png'
    }

}
