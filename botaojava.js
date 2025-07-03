const botao = document.querySelector('button');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function () {
    mensagem.textContent = 'Curiosidade: Se você está lendo isto, é porque tive sucesso na minha primeira programação!';
});