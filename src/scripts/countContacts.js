// import { PATH_DB } from '../constants/contacts.js';

// export const countContacts = async () => {};

// console.log(await countContacts());
// src/scripts/countContacts.js
import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    // Зчитуємо дані з файлу db.json
    const data = fs.readFileSync(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    // Повертаємо кількість елементів у масиві контактів
    return contacts.length;
  } catch (err) {
    console.error('Error reading db.json:', err);
    return 0;
  }
};

console.log(await countContacts());
// Цей код імпортує PATH_DB з contacts.js, читає дані з файлу db.json, парсить їх у масив контактів, а потім повертає кількість елементів у цьому масиві. Якщо виникає помилка при зчитуванні файлу або парсингу даних, функція повертає 0. Тепер при виклику countContacts() буде отримано кількість контактів у файлі db.json.