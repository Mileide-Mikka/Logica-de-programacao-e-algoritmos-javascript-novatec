function calcularDesconto() {

    //Cria referencia a elementos da pagina
    var inDescricao = document.getElementById("inDescricao");

    var inPreco = document.getElementById("inPreco");

    var outTotal = document.getElementById("outTotal");

    // Obtem conteudo dos campos de entrada

    var descricao = inDescricao.value;

    var preco = Number(inPreco.value);
    
    // calcula o preço da promoção
    var desconto = preco / 2;
    var total = (preco * 2) + desconto;
    

    // Exibe as respostas
    outTotal.textContent = "Valor do " + descricao +  " é R$" + total.toFixed(2);

    outDesconto.textContent = "O 3º produto custa apenas R$:" + desconto.toFixed(2);

}

// Cria referencia ao elemento btPromocao (button)
var btPromocao = document.getElementById("btPromocao");

// Registra um evento associado ao button, para carregar uma função
btPromocao.addEventListener("click", calcularDesconto);