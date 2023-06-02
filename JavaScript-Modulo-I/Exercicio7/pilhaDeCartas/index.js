const baralho = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas no baralho: " +
      baralho.length +
      "\n1. Adicionar um carta\n2. Puxar uma carta\n3. sair"
  );
  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é a carta?");
      baralho.push(novaCarta);
      break;
    case "2":
      const cartaPuxada = baralho.pop();
      if (cartaPuxada) {
        alert("Você puxou um(a) " + cartaPuxada);
      } else {
        alert("Não há nenhuma carta no baralho");
      }
      break;
    case "3":
      alert("Encerrando o programa...");
      break;
    default:
      alert("Opção invalida!");
  }
} while (opcao !== "3");
