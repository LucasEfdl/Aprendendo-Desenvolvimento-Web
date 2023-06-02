const numero = prompt(
  "Ola, eu sou o robô da tabuada.\nInforme o número que você deseja ccalcular a tabuada:"
);
let resutado = "";

for (let i = 1; i <= 20; i++) {
  resutado += " -> " + numero + " * " + i + " = " + numero * i + "\n";
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resutado);
