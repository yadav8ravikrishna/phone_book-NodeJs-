import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import PhoneBook from '../models/PhoneBook';
import Logging from '../library/Logging';

const addNewContact = async (req: Request, res: Response, next: NextFunction) => {
    const { name, phoneNumber } = req.body;
    try {
        const contact = await PhoneBook.create({
            name,
            phoneNumber
        });
        return res.status(201).json({ contact });
    } catch (error) {
        return res.status(500).json({ error, message: 'Internal Server Error' });
    }
};

const findContact = async (req: Request, res: Response, next: NextFunction) => {
    const contactId = req.params.contactId;
    Logging.log(contactId);
    try {
        const contact = await PhoneBook.findById(contactId);
        return contact ? res.status(200).json({ contact }) : res.status(404).json({ message: `contact with Id ${contactId} not found!!` });
    } catch (error) {
        return res.status(500).json({ error, message: 'Internal Server Error' });
    }
};

const findAllContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const contacts = await PhoneBook.find();
        res.status(200).json({ contacts });
    } catch (error) {
        res.status(500).json({ mesage: 'Internal Server Error' });
    }
};

const searchContactByName = async (req: Request, res: Response, next: NextFunction) => {
    const searchTerm = req.query.name as string;

    try {
        const regex = new RegExp(searchTerm, 'i');

        const foundContacts = await PhoneBook.find({ name: regex });

        if (foundContacts.length === 0) {
            return res.status(404).json({ message: `No contacts found for the given search term: ${searchTerm}` });
        }

        return res.status(200).json({ foundContacts });
    } catch (error) {
        return res.status(500).json({ error, message: 'Internal Server Error' });
    }
};

const updateContact = async (req: Request, res: Response, next: NextFunction) => {
    const contactId = req.params.contactId;
    try {
        const updatedContact = await PhoneBook.findOneAndUpdate({ _id: contactId }, req.body, { new: true, runValidators: true });
        return !updatedContact ? res.status(404).json({ message: `contact with id ${contactId} not found!!!` }) : res.status(200).json({ updatedContact });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteContact = async (req: Request, res: Response, next: NextFunction) => {
    const contactId = req.params.contactId;
    try {
        const deletedContact = await PhoneBook.findByIdAndDelete(contactId);
        return !deletedContact ? res.status(404).json({ message: `contact with Id ${contactId} not found!!!` }) : res.status(200).json({ deletedContact, message: 'Contact Deleted.' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default { addNewContact, findAllContact, searchContactByName, findContact, updateContact, deleteContact };
