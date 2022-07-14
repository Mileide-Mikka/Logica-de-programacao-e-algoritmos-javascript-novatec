// Lê o valor de um jantar
var jantar = Number(prompt("Qual o valor do jantar R$: "));

// calcula o dados
var garcom = jantar * 0.10; // 0.10 se refere aos 10% do garçom
var total = jantar + garcom;

// exibe o resultado
alert("Taxa do Garçom R$: " + garcom.toFixed(2) + "\nTotal R$: " + total.toFixed(2));
// \n gera a quebra de linha dentro do alert
// o .toFixed é para determinar o numero de casas decimais 