function calcularQuize() {
    // cria referência ao form e ao elemento h3 (onde será exibida a resposta)
    var inQuinze = document.getElementById("inQuinze");

    var inTempo = document.getElementById("inTempo");

    var outValorTotal = document.getElementById("outValorTotal");

    // obtém conteúdo (e converte em número)
    var quinze = Number(inQuinze.value);
    var tempo = Number(inTempo.value);

    // calcula valor a pagar (arredonda para cima)
    var pagar = Math.ceil(tempo / 15) * quinze;

    //Exibe o valor a pagar

    outValorTotal.textContent = "Valor a Pagar R$: " + pagar.toFixed(2);

}

    // Cria referencia ao elemento btPromocao (button)
    var btPagar = document.getElementById("btPagar");
    // Adiciona um evento listen para o button
    btPagar.addEventListener("click", calcularQuize);