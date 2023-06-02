let saldo = prompt("Qaul a qauntidade de dinheiro na sua conta?");
saldo = parseFloat(saldo);
let opcao = "";
do {
  opcao = prompt(
    "Sua conta possui um saldo de R$ " +
      saldo +
      "\n\nEscolha uma opção:\n" +
      "1 - Depositar dinheiro na conta\n" +
      "2 - Sacar dinheiro da conta\n" +
      "3 - Encerrar trasação."
  );
  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"));
      break;
    case "2":
      saldo -= parseFloat(prompt("Informe o valor a ser sacado:"));
      break;
    case "3":
      alert("Encerrando transação...");
      break;
  }
} while (opcao !== "3");
