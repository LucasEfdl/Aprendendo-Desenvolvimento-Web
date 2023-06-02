let opcao = "";
do {
  opcao = prompt(
    "Escolha uma das 5 opções:\n\n" +
      "1- Opção 1\n" +
      "2- Opção 2\n" +
      "3- Opção 3\n" +
      "4- Opção 4\n" +
      "5- Encerrar"
  );
  switch (opcao) {
    case "1":
      alert("Você escolheou a opção 1");
      break;
    case "2":
      alert("Você escolheou a opção 2");
      break;
    case "3":
      alert("Você escolheou a opção 3");
      break;
    case "4":
      alert("Você escolheou a opção 4");
      break;
    case "5":
      alert("Encerrando...");
      break;
    default:
      alert("Opção invalida!");
  }
} while (opcao !== "5");
