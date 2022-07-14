// Declara a função mostraOla
function mostrarOla() {
    // obtém o conteudo do campo (com id=) nome
    var nome = document.getElementById("nome").value;
    //exibe no paragrafo (resposta): "Olá" e o nome informado 
    document.getElementById("resposta").textContent = "Olá" + nome;

    //cria uma referencia ao button (com id=) mostrar
    var mostrar = document.getElementById("mostrar");

    // registra para o button "mostrar" um evento listener para o evento click, que ao ser clicado irá chamar a função mostrarOla
    mostrar.addEventListener("click", mostrarOla);

}