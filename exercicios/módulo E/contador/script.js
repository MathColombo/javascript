function contar() {

    let inicio = document.getElementById('inicio')
    let final = document.getElementById('final')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {

        // Testando se algum input ficou sem dados

        alert('[ERRO] Por favor, digite todos os dados')

    } else {
        res.innerHTML = 'Contando:'

        let ini = Number(inicio.value)
        let fin = Number(final.value)
        let pas = Number(passo.value)

        if(pas == 0) {
            alert('Passo inválido!!')

        } else {

            if(ini < fin) {

            // Contagem crescente

                for(let c = ini; c <= fin; c += pas) {
                    res.innerHTML += `${c} `

                    if(c < fin) {
                        res.innerHTML += ' - '

                    }
                }

            } else {

            // Contagem decrescente

                for(let c = ini; c >= fin; c -= pas) {
                    res.innerHTML += `${c} `

                    if(c > fin) {
                        res.innerHTML += ' - '

                    }
                }
            }
        }            
    }
}