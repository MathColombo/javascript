let fnum = document.querySelector('input#num')
let tab = document.querySelector('select#selres')
let res = document.querySelector('div#res')
let numlist = []

function adicionar() {

    if(fnum.value < 1 || fnum.value > 100) {     
        alert('Por favor, digite um número entre 1 e 100')

    } else {

        if(numlist.indexOf(Number(fnum.value)) == -1) {

            numlist.push(Number(fnum.value))
            let item = document.createElement('option')
            item.text = `Valor ${fnum.value} adicionado!`
            tab.appendChild(item)
            res.innerHTML = ''
            
        } else {
            alert('Valor já digitado, por favor digite outro')

        }

        
    }

    fnum.value = ''
    fnum.focus()
}

function finalizar() {

    if(numlist.length == 0) {
        alert('Adicione um número antes de finalizar!!')
        fnum.focus()

    } else {

        let tot = numlist.length
        let max = numlist[0]
        let min = numlist[0]
        let som = 0

        for(let pos in numlist) {   

            som += numlist[pos]

            if(numlist[pos] > max) {
                max = numlist[pos]
            }

            if(numlist[pos] < min) {
                min = numlist[pos]
            }
        }
        
        let med = som / tot
        res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor cadastrado é ${max}</p>`
        res.innerHTML += `<p>O menor valor cadastrado é ${min}</p>`
        res.innerHTML += `<p>A soma dos valores cadastrados é ${som}`
        res.innerHTML += `<p>A média dos valores cadastrados é ${med}`

    }
    
}