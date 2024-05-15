// import { PATH_DB } from '../constants/contacts.js';

// export const removeAllContacts = async () => {};

// await removeAllContacts();
// src/scripts/removeAllContacts.js
import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    // Перезаписуємо файл db.json порожнім масивом
    fs.writeFileSync(PATH_DB, '[]');
    console.log('All contacts removed successfully.');
  } catch (err) {
    console.error('Error removing all contacts:', err);
  }
};

await removeAllContacts();
// Цей код імпортує PATH_DB з contacts.js, а потім перезаписує файл db.json порожнім масивом. Після виконання функції всі контакти будуть видалені з файлу.