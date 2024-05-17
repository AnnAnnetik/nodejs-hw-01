
import fs from 'node:fs';
import faker from '@faker-js/faker';
import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    let contacts = [];
    try {
      const data = fs.readFileSync(PATH_DB);
      contacts = JSON.parse(data);
    } catch (err) {
      console.error('Error reading db.json:', err);
      return;
    }

    const newContact = createFakeContact(faker);

    contacts.push(newContact);

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
