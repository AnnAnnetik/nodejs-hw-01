import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();
      contacts.push(contact);
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log(`Added ${number} new contacts.`);
    }
  } catch (err) {
    console.error('Error reading db.json:', err);
    return;
  }
};

await generateContacts(5);
