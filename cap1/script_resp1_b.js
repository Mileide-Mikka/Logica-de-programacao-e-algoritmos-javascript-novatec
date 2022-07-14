// Lê valor
var conta = Number(prompt("Valor da conta: "));
var clientes = Number(prompt("Quantidade de clientes: "));

// Calcula a divisão da conta entre os clientes
var totalDivisao = conta / clientes;

// Exibe resultado
alert("A conta de R$: " + conta.toFixed(2) + "\nDividido entre " + clientes + " cada um pagará o valor de R$: " + totalDivisao.toFixed(2));