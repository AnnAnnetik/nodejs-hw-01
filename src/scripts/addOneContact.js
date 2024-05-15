// import { PATH_DB } from '../constants/contacts.js';

// export const addOneContact = async () => {};

// await addOneContact();
// src/scripts/addOneContact.js
import fs from 'fs';
import faker from '@faker-js/faker';
import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';

export const addOneContact = async () => {
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

    // Генеруємо новий контакт
    const newContact = createFakeContact(faker);

    // Додаємо новий контакт до масиву
    contacts.push(newContact);

    // Записуємо оновлений масив контактів у файл db.json
    try {
      fs.writeFileSync(PATH_DB, JSON.stringify(contacts));
      console.log('Added one new contact.');
    } catch (err) {
      console.error('Error writing to db.json:', err);
    }
  } catch (error) {
    console.error('Error adding one contact:', error);
  }
};

await addOneContact();
// Цей код імпортує PATH_DB з contacts.js, генерує новий контакт, додає його до масиву контактів, а потім записує оновлений масив у файл db.json. Тепер при виклику addOneContact() буде додаватися лише один новий контакт до файлу.