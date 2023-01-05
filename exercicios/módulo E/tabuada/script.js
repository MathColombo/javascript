function contar() {

    let fnum = document.querySelector('input#num')
    let tab = document.querySelector('select#seltab')
    let res = document.querySelector('div#res')

    if(fnum.value.length == 0) {

        alert('Por favor, insira o dado pedido')

    } else {

        tab.innerHTML = ''
        
        for(let c = 1; c != 11; c++) {
            
            let num = Number(fnum.value)
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)


        }
    }
}