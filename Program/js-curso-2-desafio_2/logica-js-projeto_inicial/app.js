function olaMundo() {
  console.log("Olá, mundo!");
}

function olaNome() {
  const nome = document.getElementById("nomeInput").value.trim();
  if (nome === "") {
    console.log("Por favor, digite um nome.");
  } else {
    console.log(`Olá, ${nome}!`);
  }
}

function mostrarDobro() {
  const numero = parseFloat(document.getElementById("dobroInput").value);
  if (isNaN(numero)) {
    console.log("Digite um número válido.");
  } else {
    console.log("Dobro:", numero * 2);
  }
}

function mostrarMedia() {
  const n1 = parseFloat(document.getElementById("media1").value);
  const n2 = parseFloat(document.getElementById("media2").value);
  const n3 = parseFloat(document.getElementById("media3").value);

  if ([n1, n2, n3].some(isNaN)) {
    console.log("Preencha todos os campos com números válidos.");
  } else {
    const media = (n1 + n2 + n3) / 3;
    console.log("Média:", media);
  }
}

function mostrarMaior() {
  const a = parseFloat(document.getElementById("maior1").value);
  const b = parseFloat(document.getElementById("maior2").value);

  if (isNaN(a) || isNaN(b)) {
    console.log("Digite dois números válidos.");
  } else {
    const maior = a > b ? a : b;
    console.log("Maior número:", maior);
  }
}

function mostrarQuadrado() {
  const numero = parseFloat(document.getElementById("quadradoInput").value);
  if (isNaN(numero)) {
    console.log("Digite um número válido.");
  } else {
    console.log("Quadrado:", numero * numero);
  }
}
