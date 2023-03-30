let base = prompt("Введіть число:");
let exponent = prompt("Введіть степінь:");

let result = 1;
let i = 0;

if (exponent >= 0) {
  while (i < exponent) {
    result *= base;
    i++;
  }
} else {
  exponent = -exponent;
  while (i < exponent) {
    result *= base;
    i++;
  }
  result = 1 / result;
}

alert("Результат: " + result);