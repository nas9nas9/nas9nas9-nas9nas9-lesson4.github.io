let password = "myPassword";
let attemptsLeft = 4;

do {
  let userPassword = prompt("Введіть пароль:");
  if (userPassword === password) {
    console.log("Запрошуємо на сайт!");
    break;
  } else {
    attemptsLeft--;
    if (attemptsLeft > 0) {
      console.log(`Залишилось ${attemptsLeft} спроби`);
    } else {
      console.log("Будь ласка спробуйте пізніше!");
    }
  }
} while (attemptsLeft > 0);