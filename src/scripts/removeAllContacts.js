import fs from 'node:fs';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    fs.writeFileSync(PATH_DB, '[]');
    console.log('All contacts removed successfully.');
  } catch (err) {
    console.error('Error removing all contacts:', err);
  }
};

await removeAllContacts();
