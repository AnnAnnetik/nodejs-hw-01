// import { PATH_DB } from '../constants/contacts.js';

// export const thanos = async () => {};

// await thanos();
// src/scripts/thanos.js
import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    // Зчитуємо дані з файлу db.json
    let contacts = [];
    try {
      const data = fs.readFileSync(PATH_DB, 'utf8');
      contacts = JSON.parse(data);
    } catch (err) {
      console.error('Error reading db.json:', err);
      return;
    }

    // Змінюємо масив контактів із 50% ймовірністю залишити кожен контакт
    contacts = contacts.filter(() => Math.random() > 0.5);

    // Записуємо оновлений масив контактів у файл db.json
    try {
      fs.writeFileSync(PATH_DB, JSON.stringify(contacts));
      console.log('Balance restored by Thanos. Perfectly balanced, as all things should be.');
    } catch (err) {
      console.error('Error writing to db.json:', err);
    }
  } catch (error) {
    console.error('Error executing Thanos:', error);
  }
};

await thanos();
// Цей код імпортує PATH_DB з contacts.js, зчитує дані з файлу db.json, проходить по кожному контакту у масиві та з ймовірністю 50% видаляє його. Потім оновлений масив контактів записується у файл db.json. Тепер при виклику thanos() контакти будуть видалятися з ймовірністю 50%.