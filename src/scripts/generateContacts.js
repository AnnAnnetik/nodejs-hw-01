import fs from 'node:fs';
import faker from '@faker-js/faker';
import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    let contacts = [];
    try {
      const data = fs.readFileSync(PATH_DB);
      contacts = JSON.parse(data);
    } catch (err) {
      console.error('Error reading db.json:', err);
      return;
    }

    for (let i = 0; i < number; i++) {
      const contact = createFakeContact(faker);
      contacts.push(contact);
    }

    try {
      fs.writeFileSync(PATH_DB, JSON.stringify(contacts));
      console.log(`Added ${number} new contacts.`);
    } catch (err) {
      console.error('Error writing to db.json:', err);
    }
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

await generateContacts(5);
