var valorBruto = Number(prompt("Digite um valor bruto para saber em moeda: "))
var formatoMoeda = valorBruto.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
}
)

alert(`Esse valor em real é = ${formatoMoeda}`)
