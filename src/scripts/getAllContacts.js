import fs from 'node:fs';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const data = fs.readFileSync(PATH_DB);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (err) {
    console.error('Error reading db.json:', err);
    return [];
  }
};

console.log(await getAllContacts());
