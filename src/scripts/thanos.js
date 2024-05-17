import fs from 'node:fs';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    let contacts = [];
    try {
      const data = fs.readFileSync(PATH_DB);
      contacts = JSON.parse(data);
    } catch (err) {
      console.error('Error reading db.json:', err);
      return;
    }

    contacts = contacts.filter(() => Math.random() > 0.5);

    try {
      fs.writeFileSync(PATH_DB, JSON.stringify(contacts));
      console.log(
        'Balance restored by Thanos. Perfectly balanced, as all things should be.',
      );
    } catch (err) {
      console.error('Error writing to db.json:', err);
    }
  } catch (error) {
    console.error('Error executing Thanos:', error);
  }
};

await thanos();
