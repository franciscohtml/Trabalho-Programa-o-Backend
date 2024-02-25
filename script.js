document.getElementById('botao').addEventListener('click', function() {
  document.getElementById('mensagem').innerText = 'Compra Efetuada!';
});

window.onload = function() {
  var audio = document.getElementById("efeitoAudio");
  audio.play();
};