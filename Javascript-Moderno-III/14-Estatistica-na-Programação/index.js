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

const median = (...numbers) => {
  const organizedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(organizedNumbers.length / 2);
  if (organizedNumbers.length % 2 !== 0) {
    return organizedNumbers[middle];
  }
  const fistMiddle = organizedNumbers[middle - 1];
  const secundMiddle = organizedNumbers[middle];
  return (fistMiddle + secundMiddle) / 2;
};

console.log(`A mediana é: ${median(2, 4, 5, 7, 42, 8)}`);
