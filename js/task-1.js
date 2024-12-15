//? З використанням властивостей і методів DOM-елементів, напиши скрипт, який з файлу task-1.html:
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль
// текст заголовка елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).

// Результатом виконання задачи 1 має бути виведено наступне повідомлення у консолі:

// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5

`use strict`; // Код у суворому режимі

const categories = document.querySelectorAll(`li.item`); // Отримуєм доступ до елемента та записуємо в псевдомасив всі li з class="item"
console.log(`Number of categories: ${categories.length}`); // Знаходимо та виводимо кількість елементів

categories.forEach((category) => {
  const title = category.querySelector(`h2`).textContent; // Знаходимо текст заголовка <h2>
  const itemsCount = category.querySelectorAll(`ul li`).length; // Рахуємо кількість вкладених <li>

  console.log(`Category: ${title}`); // Виводимо назву категорії
  console.log(`Elements: ${itemsCount}`); // Виводимо кількість елементів
});
