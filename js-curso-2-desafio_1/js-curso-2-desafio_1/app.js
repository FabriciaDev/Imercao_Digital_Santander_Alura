// Altera o conteúdo da tag <h1>
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Exibe mensagem no console ao clicar no botão "Console"
function exibirMensagemNoConsole() {
  console.log('O botão foi clicado');
}

// Exibe um alerta ao clicar no botão "Alert"
function exibirAlerta() {
  alert('Eu amo JS');
}

// Exibe um prompt e alerta ao clicar no botão "Prompt"
function exibirPrompt() {
  let cidade = prompt('Digite o nome de uma cidade do Brasil:');
  alert('Estive em ' + cidade + ' e lembrei de você');
}

// Soma dois números inteiros ao clicar no botão "Soma"
function somandoDoisNumeros() {
  let numero1 = parseInt(prompt('Digite o primeiro número:'));
  let numero2 = parseInt(prompt('Digite o segundo número:'));
  let resultado = numero1 + numero2;
  alert('O resultado da soma é: ' + resultado);
}
