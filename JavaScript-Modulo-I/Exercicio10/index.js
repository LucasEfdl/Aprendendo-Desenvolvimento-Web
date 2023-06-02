const vagas = [];

let opcao;

function listVacancies() {
  vagas.forEach((item) => {
    alert("Vagas disponiveis: " + vagas.length);
    alert(item.nome + "\n\n " + item.descricao + "\n " + item.dataLimite);
  });
}

function vacancy() {
  const nome = prompt("Digite o nome da vaga: ");
  const descricao = prompt("Digite uma descrição para a vaga: ");
  const dataLimite = prompt("Digite a data limite para a inscrição na vaga: ");

  const newVacancy = {
    nome,
    descricao,
    dataLimite,
  };

  let confirmação = confirm("Deseja increver essa vaga?");
  if (confirmação) {
    vagas.push(newVacancy);
  }
}

function viewVacancy() {
  let index = parseFloat(
    prompt("Digite o index da vaga que deseja consultar:")
  );

  alert(
    "Nome da vaga: " +
      vagas[index - 1].nome +
      "\nDescrição da vaga: " +
      vagas[index - 1].descricao +
      "\nData limite para se inscrever: " +
      vagas[index - 1].dataLimite
  );
}

function menu() {
  do {
    opcao = prompt(
      "Escolha uma opção:\n" +
        "\n1. Lista vagas disponíveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Increver um cadidato em uma vaga" +
        "\n5. Excluir uma vaga" +
        "\n6. sair..."
    );

    switch (opcao) {
      case "1":
        listVacancies();
        break;
      case "2":
        vacancy();
        break;
      case "3":
        viewVacancy();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção invalida!");
    }
  } while (opcao != "6");
}

menu();
