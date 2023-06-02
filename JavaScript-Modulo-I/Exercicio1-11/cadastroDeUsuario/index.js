const primeiroNome = prompt("Digite o primeiro nome do recruta:");
const sobrenome = prompt("Digite o sobrenome do recruta:");
const areaDeEstudo = prompt("Digite a area de estudo do recruta:");
const anoDeNascimento = prompt("Digite o ano em que o recruta nasceu:");

alert(
  "Recruta cadatrado com sucesso!\n" +
    "\nNome completo do recruta: " +
    primeiroNome +
    " " +
    sobrenome +
    "\nArea de atuação do recruta: " +
    areaDeEstudo +
    "\nIdade do recruta: " +
    (2022 - anoDeNascimento)
);
