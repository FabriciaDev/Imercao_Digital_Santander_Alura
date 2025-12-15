function mostrarIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const imc = (peso / (altura * altura)).toFixed(2);
  document.getElementById("resultadoIMC").textContent = `IMC: ${imc}`;
}

function mostrarFatorial() {
  const n = parseInt(document.getElementById("numeroFatorial").value);
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  document.getElementById("resultadoFatorial").textContent = `Fatorial: ${resultado}`;
}

function converterParaReais() {
  const valor = parseFloat(document.getElementById("valorDolar").value);
  const reais = (valor * 4.80).toFixed(2);
  document.getElementById("resultadoDolar").textContent = `R$ ${reais}`;
}

function mostrarSalaRetangular() {
  const altura = parseFloat(document.getElementById("alturaRet").value);
  const largura = parseFloat(document.getElementById("larguraRet").value);
  const area = altura * largura;
  const perimetro = 2 * (altura + largura);
  document.getElementById("resultadoRetangular").textContent =
    `Área: ${area} m² | Perímetro: ${perimetro} m`;
}

function mostrarSalaCircular() {
  const raio = parseFloat(document.getElementById("raio").value);
  const pi = 3.14;
  const area = pi * raio * raio;
  const perimetro = 2 * pi * raio;
  document.getElementById("resultadoCircular").textContent =
    `Área: ${area.toFixed(2)} m² | Perímetro: ${perimetro.toFixed(2)} m`;
}

function mostrarTabuada() {
  const numero = parseInt(document.getElementById("numeroTabuada").value);
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }
  document.getElementById("resultadoTabuada").textContent = resultado;
}
