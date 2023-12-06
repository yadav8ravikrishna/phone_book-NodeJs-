# Node.js CRUD Project - Contact Management

## Overview

This Node.js CRUD (Create, Read, Update, Delete) project is designed to manage contacts by storing their names and phone numbers. The application provides a set of RESTful API endpoints for performing various operations on the contact records.

## Installation

1. **Clone the repository:**  
    *For https*
   ```bash
   git clone https://github.com/yadav8ravikrishna/phone_book-NodeJs-.git
   ```
   *For SSH*
   ```bash
   git clone git@github.com:yadav8ravikrishna/phone_book-NodeJs-.git
   ```

2. **Navigate to the project directory:**
     ```bash
     cd phone_book
     ```
3. **Install dependencies:**
     ```bash
     npm install
     ```
4. **Start the application:**
5. ```bash
     npm start
   ```
   

## API Endpoints
### 1. Add a New Contact
#### Endpoint: POST /phonebook/addContact
Description: Adds a new contact with a given name and phone number.
### 2. Find Contact by ID
#### Endpoint: GET /phonebook/findContact/:contactId
Description: Retrieves contact details based on the provided contact ID.
### 3. Get All Contacts
#### Endpoint: GET /phonebook/getAllContacts
Description: Retrieves a list of all contacts.
### 4. Search Contact by Name
#### Endpoint: GET /phonebook/findContactByName
Description: Searches for contacts by name.
### 5. Update Contact by ID
#### Endpoint: PATCH /phonebook/editContact/:contactId
Description: Updates the contact details for the specified contact ID.
### 6. Delete Contact by ID
#### Endpoint: DELETE /phonebook/deleteContact/:contactId
Description: Deletes the contact with the specified contact ID.

## Usage
You can use tools like Postman or curl to interact with the API endpoints and manage your contact records efficiently.

Feel free to explore and enhance the project based on your specific requirements.


   
