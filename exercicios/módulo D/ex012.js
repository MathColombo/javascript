var agora = new Date()
var hr = agora.getHours()
console.log(`Agora são ${hr} horas`)
if(hr < 12) {
    console.log('Período: MANHÃ')

} else if(hr < 18) {
    console.log('Período: TARDE')

} else {
    console.log('Período: NOITE')
}