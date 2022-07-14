function calcularMedia(){
    // Cria referencia aos elementos da pagina
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");

    var outSituacao = document.getElementById("outSituacao");
    var outMedia = document.getElementById("outMedia");

    // obtem os conteudos dos campos de edição da pagina
    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);

    // calcula a media das notas
    var media = (nota1 + nota2)/2;

    //apresenta a media (altera o conteudo do elemento outMedia)
    outMedia.textContent = "Media das Notas: " + media.toFixed(1);

    // cria a condição
    if(media >= 7){
        //altera o texto e estilo da cor do elemento outSituacao
        outSituacao.textContent = "Parabéns " + nome + "! Você foi aprovada(o)";
        outSituacao.style.color = "blue";
    }else if(media >= 4) {
        outSituacao.textContent = "Atenção " + nome + ", Você está em exame!"
        outSituacao.style.color = "yellow";
    }else {
        outSituacao.textContent = "Ops " + nome + "... Você foi reprovada(o)";
        outSituacao.style.color = "red";
    }
}

//cria uma referencia ao elemento btResultado
var btResultado = document.getElementById("btResultado");

// registra um evento associado ao button, para carregar uma função
btResultado.addEventListener("click", calcularMedia);