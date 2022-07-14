// Lê o valor sem desconto
var valorProduto = Number(prompt("Valor do produto: "));

//informações de pagemento parcelado
var parcelado = valorProduto / 3;

// valor quando aplicado ao desconto
var descontoAVista = 0.1; // valor do desconto 10% em cima do valor do produto
var precoAVista = valorProduto - (valorProduto * descontoAVista); // conta para aplicar o desconto

alert("Perço R$: " + valorProduto.toFixed(2) + "\nPagamento à Vista R$: " + precoAVista.toFixed(2) + "\nOu 3x de R$: " + parcelado.toFixed(2))