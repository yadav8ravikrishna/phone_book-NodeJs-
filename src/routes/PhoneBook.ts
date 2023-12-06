import express from 'express';
import controller from '../controller/PhoneBook';

const router = express.Router();

router.post('/addContact', controller.addNewContact);
router.get('/findContact/:contactId', controller.findContact);
router.get('/getAllContacts', controller.findAllContact);
router.get('/findContactByName', controller.searchContactByName);
router.patch('/editContact/:contactId', controller.updateContact);
router.delete('/deleteContact/:contactId', controller.deleteContact);

export default router;
