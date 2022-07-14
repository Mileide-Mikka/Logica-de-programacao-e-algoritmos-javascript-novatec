// O calculo dessa função considera a entrada de 50%
function mostrarPromocao() {
// Criar referencia aos elementos manipulados pelo programa
var inVeiculo = document.getElementById("inVeiculo");

var inPreco = document.getElementById("inPreco");

var outVeiculo = document.getElementById("outVeiculo");

var outEntrada = document.getElementById("outEntrada");

var outParcela = document.getElementById("outParcela");

// Obtem conteudo digitados nos campos de form do HTML. 

var veiculo = inVeiculo.value;
var preco = Number(inPreco.value);

// Calcula valor da entrada e das parcelas a serem apresentados como resposta
var entrada = preco * 0.50; // 50%
var parcela = (preco * 0.50)/12;

// Altera o conteudo dos paragrafos de resposta
outVeiculo.textContent = "Pomoção: " + veiculo;

outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);

outParcela.textContent= "+ 12x de R$: " + parcela.toFixed(2);
// A propriedade textContent recebe os dados a serem exibidos
}

//Cria uma referencia ao elemento btVerPromoção (button)
var btVerPromocao = document.getElementById("btVerPromocao");

// registra um evento associado ao button, para carregar a função
btVerPromocao.addEventListener("click", mostrarPromocao);
