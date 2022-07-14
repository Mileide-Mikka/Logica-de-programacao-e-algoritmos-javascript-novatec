function calcularPreco() {
    // Cria referencia aos elementos da pagina
    var inQuilo = document.getElementById("inQuilo");

    var inConsumo = document.getElementById("inConsumo");

    var outValor = document.getElementById("outValor");

    // Obtem conteudo dos campos de entrada
    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);

    // Calcula o valor a ser pago
    var valor = (quilo / 1000) * consumo;

    //Altera o conteudo da linha de resposta
    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}

// Cria referencia ao elemento btCalcular (button)
var btCalcular = document.getElementById("btCalcular");

// Registra um evento associado ao button, para carregar uma função
btCalcular.addEventListener("click", calcularPreco)