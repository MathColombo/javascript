var cont = 0

while(true) {
    console.log('Ok')
    cont += 1
    if(cont == 8) {
        break
    }
}

do {
    console.log('OK')
    cont += 1
    if(cont == 8) {
        break
    }
} while(true)

for(var cont = 0; cont != 8; cont++) {
    console.log('Ok')
}