// import { PATH_DB } from '../constants/contacts.js';

// export const getAllContacts = async () => {};

// console.log(await getAllContacts());
// src/scripts/getAllContacts.js
import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    // Зчитуємо дані з файлу db.json
    const data = fs.readFileSync(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (err) {
    console.error('Error reading db.json:', err);
    return [];
  }
};

console.log(await getAllContacts());
// Цей код імпортує PATH_DB з contacts.js, читає дані з файлу db.json, парсить їх у масив контактів та повертає цей масив. Якщо виникає помилка при зчитуванні файлу або парсингу даних, функція повертає порожній масив. Тепер при виклику getAllContacts() буде отриманий масив усіх контактів.