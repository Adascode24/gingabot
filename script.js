// Função do temporizador de 20 minutos
var deadline = new Date().getTime() + 20 * 60 * 1000; // 20 minutos a partir do momento atual

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = deadline - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = "Oferta válida por: " + minutes + "m " + seconds + "s";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Oferta Expirada!";
  }
}, 1000);