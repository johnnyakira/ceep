var ctrlCartao = (function(){
	var contador = 0

	function adicionaCartao(conteudo, cor){
		contador++

              var buttonOpcoes = $('<button>').addClass('opcoesDoCartao-opcao')
                                              .addClass('opcoesDoCartao-remove')
                                              .attr('data-ref', contador)
                                              .text('Remover')
                                              .click(removeCartao)

              var divOpcoes = $('<div>').addClass('opcoesDoCartao')
                                        .append(buttonOpcoes)

              var cartaoConteudo = $('<p>').addClass('cartao-conteudo')
                                           .append(conteudo);

              var tipoCartao = decideTipoCartao(conteudo);

              var cartao = $('<div>').attr('id', 'cartao_'+ contador)
                                     .addClass('cartao')
                                     .addClass(tipoCartao)
                                     .append(divOpcoes)
                                     .append(cartaoConteudo)
                                     .prependTo('.mural')
                                     .css('background-color', cor)
                                     .prependTo('.mural');

              
	}

	function removeCartao(){

	   var cartao = document.querySelector('#cartao_'+ this.dataset.ref);


      cartao.classList.add('cartao--some');

      setTimeout(function(){
          cartao.remove();
      }, 400)

	}

	return {
		removeCartao: removeCartao,
		adicionaCartao: adicionaCartao
	}
})()