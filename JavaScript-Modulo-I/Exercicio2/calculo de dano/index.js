const atacante = prompt("Digite o nome do atacante:");
const poderDeAtaque = prompt("Digite o poder de ataque do atacante:");

const defensor = prompt("Digite o nome do defensor:");
let pontosDeVida = prompt("Digite os pontos de vida do defensor:");
const poderDeDefesar = prompt("Digite os poder de defesa do defensor:");
const possuiEscudo = prompt("O defensoir possui um escudor? (sim/nao)");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesar && possuiEscudo === "nao") {
  danoCausado = poderDeAtaque - poderDeDefesar;
} else if (poderDeAtaque > poderDeDefesar && possuiEscudo === "sim") {
  danoCausado = (poderDeAtaque - poderDeDefesar) / 2;
}

alert("O dano causado foi de: " + danoCausado);
alert(
  `${atacante}\nPoder de ataque: ${poderDeAtaque}\n\n${defensor}\nPontos de vida: ${
    pontosDeVida - danoCausado
  }\nPoder de defesa: ${poderDeDefesar}\nPossui escudo: ${possuiEscudo}`
);
