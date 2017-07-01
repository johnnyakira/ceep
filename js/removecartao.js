(function(){
  'use strict'
  
  var botoes = $('.opcoesDoCartao-remove')

  for(var i=0; i < botoes.length; i++ ){

      botoes[i].click(ctrlCartao.removeCartao())
  }

})();
