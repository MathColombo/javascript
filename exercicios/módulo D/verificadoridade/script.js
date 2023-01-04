function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#nascimento')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')

    } else {

        var fsexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var sexo = ''
        res.style.textAlign = 'center'
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsexo[0].checked) {
            sexo = 'Homem'

            if(idade >= 0 && idade < 10) {
                //criança ou bebê
                img.setAttribute('src', 'bebe-m.png')
            } else if(idade < 22) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if(idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else
                //Idoso
                img.setAttribute('src', 'idoso-m.png')

        } else {
            sexo = 'Mulher'

            if(idade >= 0 && idade < 10) {
                //criança ou bebê
                img.setAttribute('src', 'bebe-f.png')
            } else if(idade < 22) {
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if(idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
            } else
                //Idoso
                img.setAttribute('src', 'idoso-f.png')
        }

        res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
        res.appendChild(img)
    }
}