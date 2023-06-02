const vec1 = prompt("Informe o nome do primeiro veiculo: ");
const x1 = prompt("Informe a velocidade do primeiro veiculo: ");

const vec2 = prompt("Informe o nome do segundo veiculo: ");
const x2 = prompt("Informe a velocidade do segundo veiculo: ");

const v1 = parseFloat(x1);
const v2 = parseFloat(x2);

if (v1 > v2) {
  alert("O " + vec1 + " é mais veloz do que o " + vec2);
} else if (v2 > v1) {
  alert("O " + vec2 + " é mais veloz do que o " + vec1);
} else {
  alert("Ambos os veiculos estão na mesma velocidade");
}
