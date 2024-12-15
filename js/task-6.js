//? Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create
//  має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті.
// При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова.
// Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути
// в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число,
// що зберігає кількість елементів для рендеру.

// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount.
// Усі ці <div> мають додаватися за одну операцію у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor()
// для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(),
// яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

//! На що буде звертати увагу ментор при перевірці:
// Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається
// Після кліку на кнопку Create в div#boxes за одну операцію додається така кількість різнокольорових квадратів,
// яка вказана в input. Значення input очищається
// Після повторного кліку на кнопку Create попередні квадрати повністю прибираються і замість них додаються нові
// у кількості, що вказана в input. Значення input очищається
// Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
// Перший квадрат у div#boxes має розміри 30px на 30px, а кожен наступний на 10px вищий і ширший від попереднього
// Після натискання на кнопку Destroy усі квадрати з div#boxes мають видалятися

`use strict`; // Код у суворому режимі

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const fieldEl = document.querySelector(`.js-input-field`);
const createBtn = document.querySelector(`.js-create-btn`);
const destroyBtn = document.querySelector(`.js-destroy-btn`);
const boxesContainer = document.querySelector(".js-parent-box");

// Функція для створення колекції квадратів
function createBoxes(amount) {
  // Очищення попереднього вмісту
  boxesContainer.innerHTML = "";

  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10; // Перший квадрат 30x30, кожен наступний +10px
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    boxes.push(box);
  }
  // Додавання всіх квадратів за одну операцію
  boxesContainer.append(...boxes);
}

// Функція для очищення колекції квадратів
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// Обробник кліку на кнопку Create
createBtn.addEventListener("click", () => {
  const amount = parseInt(fieldEl.value.trim(), 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    fieldEl.value = ""; // Очищення поля
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

// Обробник кліку на кнопку Destroy
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  fieldEl.value = ""; // Очищення поля
});
