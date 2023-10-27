const express = require('express');
const {
  addContacts,
  getContacts,
  getContact,
  deleteContact,
  ediitContact,
} = require('../controllers/api-contact-controller');

const router = express.Router();

// Add new Contact
router.post('/api/contact', addContacts);
// Get All Contacts
router.get('/api/contacts', getContacts);
// Get Contact by ID
router.get('/api/contact/:id', getContact);
// Delete Contact by ID
router.delete('/api/contact/:id', deleteContact);
// Update Contact by ID
router.put('/api/contact/:id', ediitContact);


  module.exports = router;