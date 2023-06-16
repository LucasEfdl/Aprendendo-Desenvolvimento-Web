const average = (...numbers) => {
  const sum = numbers.reduce((acum, current) => acum + current, 0);
  return sum / numbers.length;
};

console.log(`A média Aritmética Simples é: ${average(2, 6, 3, 7, 4)}`);
