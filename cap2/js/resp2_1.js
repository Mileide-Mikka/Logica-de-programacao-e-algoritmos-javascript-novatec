function calcularDesconto() {

    //Cria referencia a elementos da pagina
    var inMedicamento = document.getElementById("inMedicamento");

    var inPreco = document.getElementById("inPreco");

    var outValorPromocao = document.getElementById("outValorPromocao");

    // Obtem conteudo dos campos de entrada

    var medicamento = inMedicamento.value;

    var preco = Number(inPreco.value);
    
    // calcula o preço da promoção
    var promocao = Math.floor(preco * 2);

    // Exibe as respostas
    outNomeMedicamento.textContent = "Promoção de " + medicamento;

    outValorPromocao.textContent = "Promoção leve 2 por " + promocao.toFixed(2);

}

// Cria referencia ao elemento btPromocao (button)
var btPromocao = document.getElementById("btPromocao");

// Registra um evento associado ao button, para carregar uma função
btPromocao.addEventListener("click", calcularDesconto);