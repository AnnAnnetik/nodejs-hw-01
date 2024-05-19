import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);
    contacts = contacts.filter(() => Math.random() > 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Perfectly balanced.');
  } catch (err) {
    console.error('Error reading db.json:', err);
    return;
  }
};

await thanos();
