const metros = prompt("Digite um valor em metros:");
let newValue = 0;
const opcao = prompt(
  "Quer converte para gual unidade:\n-Milimetros(mm)\n-Centimetros(cm)\n-Decimetros(dm)\n-Decâmetro(dam)\n-Hectômetro(hm)\n-Quilômetro(km)."
);
switch (opcao) {
  case "mm":
    newValue = metros * 1000;
    alert(newValue + " mm");
    break;
  case "cm":
    newValue = metros * 100;
    alert(newValue + " cm");
    break;
  case "dm":
    newValue = metros * 10;
    alert(newValue + " dm");
    break;
  case "dam":
    newValue = metros / 10;
    alert(newValue + " dam");
    break;
  case "hm":
    newValue = metros / 100;
    alert(newValue + " hm");
    break;
  case "km":
    newValue = metros / 1000;
    alert(newValue + " km");
    break;
  default:
    alert("Opção invalida!");
}
