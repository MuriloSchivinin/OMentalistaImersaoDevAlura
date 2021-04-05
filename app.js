let valRandom = parseInt(Math.random() * 11)
console.log(valRandom);
let tentativas = 3
function consultNumber() {

    document.getElementById('result').innerHTML = ''
    tentativas = tentativas - 1

    let valInput = parseInt(document.getElementById('campo').value)

    if (valInput == valRandom) {
        document.getElementById('campo').value = ''
        document.getElementById('result').innerHTML = 'GANHOU!'
        document.location.reload(true)
        tentativas = 3
    } else if (valInput > valRandom) {
        document.getElementById('campo').value = ''
        alert('ERROU! O número inserido é maior que o valor procurado, escolha outro valor.')
    } else if (valInput < valRandom) {
        document.getElementById('campo').value = ''
        alert('ERROU! O número inserido é menor que o valor procurado, escolha outro valor.')
    }
    if (tentativas <= 0) {
        document.getElementById('campo').value = ''
        document.getElementById('result').innerHTML = 'PERDEU!'
        document.location.reload(true)
    }
}