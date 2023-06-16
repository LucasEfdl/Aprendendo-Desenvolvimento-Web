const average = (...numbers) => {
  const sum = numbers.reduce((acum, current) => acum + current, 0);
  return sum / numbers.length;
};

console.log(`A média Aritmética Simples é: ${average(2, 6, 3, 7, 4)}`);

const weightedAverage = (...input) => {
  const sum = input.reduce(
    (acum, { not, weight }) => acum + not * (weight ?? 1),
    0
  );
  const weightSum = input.reduce(
    (acum, input) => acum + (input.weight ?? 1),
    0
  );
  return sum / weightSum;
};

console.log(
  `A Média Aritimética Ponderada é: ${weightedAverage(
    { not: 7, weight: 2 },
    { not: 9, weight: 5 },
    { not: 3, weight: 1 }
  )}`
);
