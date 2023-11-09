const spanValor = document.getElementById('valor');
const diminuirValor = document.getElementById('diminuir');
const aumentarValor = document.getElementById('aumentar');
const quantValor = document.getElementById('quantidade');
const adicionarValor = document.getElementById('adicionar');
const qtdUni = document.getElementById('valor_uni');

let valor = 0;
let dataValorClicado = 0;
const modal = document.querySelector('.modal');

const atualizarValor = () => {
  const resultado = valor * dataValorClicado;
  const resultadoFormato = resultado.toFixed(2);
  spanValor.textContent = valor;
  quantValor.textContent = 'R$' + resultadoFormato.replace('.', ',');
};

aumentarValor.addEventListener('click', () => {
  valor++;
  atualizarValor();
});

diminuirValor.addEventListener('click', () => {
  if (valor > 0) {
    valor--;
    atualizarValor();
  }
});

// Adicionando evento de clique a todos os elementos com a classe 'conteudo-pai'
document.querySelectorAll('.conteudo-pai').forEach((divClick) => {
  divClick.addEventListener('click', () => {
    // Encontrar a modal correspondente ao elemento clicado
    if (modal) {
      const nomeProduto = divClick.querySelector('h3');
      const fotoProduto = divClick.querySelector('.fotos-produto');

      // Obter o valor do atributo data-valor do elemento clicado
      dataValorClicado = parseFloat(divClick.getAttribute('data-valor').replace(',', '.'));

      // Reiniciar a quantidade para 0 quando clicar em outro item
      valor = 0;

      // Atualizar os elementos dentro da modal
      const fotoModal = modal.querySelector('.foto-modal');
      const nomeModal = modal.querySelector('.fonte-modal');
      const valorUniModal = modal.querySelector('#valor_uni');

      fotoModal.src = fotoProduto.src;
      nomeModal.textContent = nomeProduto.textContent;
      valorUniModal.textContent = `R$ ${divClick.getAttribute('data-valor')}`;

      // Exibir o modal
      modal.style.display = 'block';
    }
  });
});

// Adicionando eventos de fechar a todas as modais
document.querySelectorAll('.fechar-modal').forEach((closeModal) => {
  closeModal.addEventListener('click', () => {
    // Encontrar a modal correspondente ao botão de fechar clicado
    const modal = closeModal.closest('.modal');
    if (modal) {
      modal.style.display = 'none';
      valor = 0;
      dataValorClicado = 0;
      atualizarValor(); // Adicionando isso para garantir que a interface seja atualizada
    }
  });
});

window.addEventListener('click', (event) => {
  // Fechar todas as modais se clicar fora delas
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
    valor = 0;
    dataValorClicado = 0;
    atualizarValor(); // Adicionando isso para garantir que a interface seja atualizada
  }
});

function obterValorProduto(divClick) {
  const valorProduto = divClick.getAttribute('data-valor');
  return valorProduto || 'Valor não disponível';
}
