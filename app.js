function calcularMedia() {
  var nomeAluno = document.getElementById("nome").value;
  var notaPrimeiro = parseFloat(document.getElementById("nota1").value);
  var notaSegundo = parseFloat(document.getElementById("nota2").value);
  var notaTerceiro = parseFloat(document.getElementById("nota3").value);
  var notaQuarto = parseFloat(document.getElementById("nota4").value);
  var mediaFinal = (notaPrimeiro + notaSegundo + notaTerceiro + notaQuarto) / 4;
  var notaFixada = mediaFinal.toFixed(1);

  var aprovacao = document.getElementById("aprovacao").value;

  if (isNaN(notaFixada) == false) {
    if (notaFixada >= aprovacao) {
      media.innerHTML =
        "<p>Olá " +
        nomeAluno +
        ", sua média final é " +
        notaFixada +
        ". Parabéns! Você foi aprovado!</p>";
    } else {
      media.innerHTML =
        "<p>Olá " +
        nomeAluno +
        ", sua média final é " +
        notaFixada +
        ". Você não foi aprovado. Continue se esforçando.</p>";
    }
  } else {
    var erroPag =
      "Algum dos números que você digitou está incorreto! Tente novamente.";
    media.innerHTML = erroPag;
  }
}
