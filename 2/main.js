let n = prompt("Введіть натуральне число:");
let result = 1;
let i = 1;

while (i <= n) {
  result *= i;
  i++;
}

console.log(`Факторіал числа ${n} дорівнює ${result}`);