let listaGenerica = [];
let linguagensDeProgramacao = [];
let nomes = [];

function criarListaGenerica() {
  listaGenerica = [];
  document.getElementById("listaGenericaResultado").textContent =
    "Lista genérica criada: " + JSON.stringify(listaGenerica);
}

function criarListaLinguagens() {
  linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
  document.getElementById("linguagensResultado").textContent =
    "Linguagens iniciais: " + linguagensDeProgramacao.join(", ");
}

function adicionarLinguagens() {
  linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
  document.getElementById("linguagensResultado").textContent =
    "Linguagens atualizadas: " + linguagensDeProgramacao.join(", ");
}

function mostrarNomes() {
  const nome1 = document.getElementById("nome1").value;
  const nome2 = document.getElementById("nome2").value;
  const nome3 = document.getElementById("nome3").value;
  nomes = [nome1, nome2, nome3];

  const primeiro = nomes[0];
  const segundo = nomes[1];
  const ultimo = nomes[nomes.length - 1];

  console.log("Primeiro nome:", primeiro);
  console.log("Segundo nome:", segundo);
  console.log("Último nome:", ultimo);

  document.getElementById("nomesResultado").textContent =
    `Primeiro: ${primeiro} | Segundo: ${segundo} | Último: ${ultimo}`;
}
