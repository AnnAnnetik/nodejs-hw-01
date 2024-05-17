import fs from 'node:fs';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = fs.readFileSync(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    return contacts.length;
  } catch (err) {
    console.error('Error reading db.json:', err);
    return 0;
  }
};

console.log(await countContacts());
