var valor1 = Number(prompt("Digite um valor monetário: "))
var valor2 = Number(prompt("Digite outro valor monetário: "))
var valor3 = Number(prompt("Digite mais um valor monetário: "))

var media = (valor1 + valor2 + valor3) / 3

alert(`A média desses valores é ` + media.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
}
))