class Multiplicar {
  constructor(multiplicando, multiplicador) {
    this.multiplicando = multiplicando;
    this.multiplicador = multiplicador;
  }
}

function MultiplicarPorX(numero) {
  var multiplicar = new Multiplicar(
    document.getElementById("multiplicando").value,
    document.getElementById("multiplicador").value
  );

  let Resultado = multiplicar.multiplicando * multiplicar.multiplicador;

  if (!isNaN(Resultado)) {
    document.getElementById("text").innerHTML = "El Resultado Es  ";
    document.getElementById("answer").innerHTML = Resultado;
  }
}

$(function () {
  $(".cambiar").click(function () {
    $("#canvas-wrapper").toggleClass("dark-mode");
  });
});
