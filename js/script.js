// Selecionando elementos HTML com a classe especificada e armazenando-os em variáveis
const sonic = document.querySelector('.sonic');
const vilao = document.querySelector('.vilao');
const arvores = document.querySelector('.arvores');
const stepsCounter = document.querySelector('.steps');
var inicio = document.querySelector(".modal-inicio");
let contador = false;

// Obtendo a pontuação recorde do jogador armazenada em localStorage ou definindo como 0 se não houver
let record = localStorage.getItem('record') || 0;

// Selecionando o elemento HTML com a classe 'record' e definindo seu conteúdo como a pontuação recorde
const recordCounter = document.querySelector('.record');
recordCounter.textContent = record;

// Função que faz o Sonic pular adicionando a classe 'jump' à lista de classes do elemento HTML correspondente
const jump = () => {
   sonic.classList.add('jump');

   // Removendo a classe 'jump' da lista de classes do elemento HTML correspondente após 500 milissegundos
   setTimeout(() => {
      sonic.classList.remove('jump')
   }, 500);
}

// Função para lidar com o pulo do Sonic
const handleJump = (event) => {

   // Verificando se o evento foi acionado pela tecla espaço ou pelo clique do botão esquerdo do mouse
   if (event.code === 'Space' || event.type === 'click') {
      
      inicio.style.display = "none";
      jump();
      // Selecionando todos os elementos HTML com as classes 'nuvens', 'arvores', 'sonic' e 'vilao' e colocando a animação em execução novamente
      var elements = document.querySelectorAll('.nuvens, .arvores, .sonic, .vilao');
      for (var i = 0; i < elements.length; i++) {
         elements[i].style.animationPlayState = 'running';
      }
      contador = true

   }
};

// Adicionando um event listener para o evento 'keydown' do objeto document
document.addEventListener('keydown', handleJump);

// Adicionando um event listener para o evento 'click' do objeto document
document.addEventListener('click', handleJump); // chamando a função jump se a barra de espaço foi pressionada ou se houve um clique

// Definindo uma função anônima para ser executada a cada 100 milissegundos por meio da função setInterval
const loop = setInterval(() => {
   // Obtendo a posição horizontal dos elementos HTML correspondentes em relação à borda esquerda da janela de visualização
   const vilaoPosition = vilao.offsetLeft;
   const arvoresPosition = arvores.offsetLeft;
   const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

   // código a ser executado se a largura da tela for maior ou igual que 768 pixels

   // Verificando se o Sonic colidiu com o vilão
   if (vilaoPosition < 100 && vilaoPosition > -28 && sonicPosition < 55) {
      // Selecionando o elemento HTML do modal e o botão "jogar novamente"
      const modal = document.querySelector('.modal');
      const restartBtn = document.querySelector('.restart-btn');

      // Função que exibe o modal e pausa o jogo
      const showGameOver = () => {

         // Pausando as animações dos elementos HTML
         vilao.style.animationPlayState = 'paused';
         arvores.style.animationPlayState = 'paused';
         sonic.style.animationPlayState = 'paused';

         // Exibindo o modal com a mensagem de "game over" e a pontuação do jogador
         const steps = +stepsCounter.textContent;
         const message = modal.querySelector('.message');
         message.querySelector('.steps').textContent = steps;
         modal.classList.add('show');
      }

      // Adicionando um event listener para o botão "jogar novamente"
      restartBtn.addEventListener('click', () => {
         // Recarregando a página para reiniciar o jogo
         location.reload();
      });

      // Verificando se o Sonic colidiu com o vilão
      if (vilaoPosition < 100 && vilaoPosition > -28 && sonicPosition < 55) {

         // Exibindo o modal de "game over" em vez do alert
         showGameOver();
      }


      // Pausando as animações dos elementos HTML após a colisão
      vilao.style.animation = 'none';
      vilao.style.left = vilaoPosition + "px";

      sonic.style.animation = 'none';
      sonic.style.bottom = sonicPosition + "px";

      arvores.style.animation = 'none';
      arvores.style.left = arvoresPosition + "px";

      // Trocando as imagens dos elementos HTML para imagens estáticas de "parada"
      vilao.src = 'img/vilao_parado.png';
      sonic.style.width = '90px';
      sonic.style.marinleft = '90px';

      sonic.src = 'img/sonic_dead.png';
      sonic.style.width = '90px';
      sonic.style.marinleft = '90px';

      // Parando a execução da função setInterval
      clearInterval(loop);

      // Obtendo a pontuação atual do jogador
      const steps = +stepsCounter.textContent;

      // Verificando se a pontuação atual é maior do que a pontuação recorde
      if (steps > record) {
         // Armazenando a nova pontuação recorde em localStorage
         localStorage.setItem('record', steps);

         // Atualizando a variável 'record' e o elemento HTML correspondente
         record = steps;
         recordCounter.textContent = record;
      }

   }



   if (vilaoPosition < 80 && vilaoPosition > -28 && sonicPosition < 40) {
      // Selecionando o elemento HTML do modal e o botão "jogar novamente"
      const modal = document.querySelector('.modal');
      const restartBtn = document.querySelector('.restart-btn');

      // Função que exibe o modal e pausa o jogo
      const showGameOver = () => {
         // Pausando as animações dos elementos HTML
         vilao.style.animationPlayState = 'paused';
         arvores.style.animationPlayState = 'paused';
         sonic.style.animationPlayState = 'paused';

         // Exibindo o modal com a mensagem de "game over" e a pontuação do jogador
         const steps = +stepsCounter.textContent;
         const message = modal.querySelector('.message');
         message.querySelector('.steps').textContent = steps;
         modal.classList.add('show');
      }

      // Adicionando um event listener para o botão "jogar novamente"
      restartBtn.addEventListener('click', () => {
         // Recarregando a página para reiniciar o jogo
         location.reload();
      });

      // Verificando se o Sonic colidiu com o vilão
      if (vilaoPosition < 100 && vilaoPosition > -28 && sonicPosition < 55) {

         // Exibindo o modal de "game over" em vez do alert
         showGameOver();
      }


      // Pausando as animações dos elementos HTML após a colisão
      vilao.style.animation = 'none';
      vilao.style.left = vilaoPosition + "px";

      sonic.style.animation = 'none';
      sonic.style.bottom = sonicPosition + "px";

      arvores.style.animation = 'none';
      arvores.style.left = arvoresPosition + "px";

      // Trocando as imagens dos elementos HTML para imagens estáticas de "parada"
      vilao.src = 'img/vilao_parado.png';
      sonic.style.width = '90px';
      sonic.style.marinleft = '90px';

      sonic.src = 'img/sonic_dead.png';
      sonic.style.width = '90px';
      sonic.style.marinleft = '90px';

      // Parando a execução da função setInterval
      clearInterval(loop);

      // Obtendo a pontuação atual do jogador
      const steps = +stepsCounter.textContent;

      // Verificando se a pontuação atual é maior do que a pontuação recorde
      if (steps > record) {
         // Armazenando a nova pontuação recorde em localStorage
         localStorage.setItem('record', steps);

         // Atualizando a variável 'record' e o elemento HTML correspondente
         record = steps;
         recordCounter.textContent = record;
      }
   }

   // Iniciando a contagem do tempo quando a animação do Sonic começar
   if (contador == true) {
      stepsCounter.textContent = +stepsCounter.textContent + 1;
   }
}, 100);


// arummar o tamnho dos personagens conforme a tela 
if (window.innerWidth < 767) {
   sonic.classList.add('small');
   vilao.classList.add('small');
   vilao.style.animationPlayState = 'paused';
}