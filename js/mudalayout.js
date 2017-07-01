(function(){
  'use strict'
  document.querySelector('#mudaLayout').addEventListener('click', function mudaLayout(){

          var mural = document.querySelector('.mural');

          mural.classList.toggle('mural--linhas');

          if(mural.classList.contains('mural--linhas')){
              this.textContent = 'Colunas';
          } else {
              this.textContent = 'Linhas';
          }
      }
  )

  window.mudaLayout = mudaLayout;
})();
