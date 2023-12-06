NodeJS CRUD Application for Contact Management


This is a NodeJS application designed to create, read, update, and delete (CRUD) contacts. It stores information like name and phone number, and offers various routes for managing the data.

Technologies


NodeJS - Backend runtime environment

Express - Web framework for routing and handling requests

MongoDB - Document database for storing contacts


Routes
POST /addContact: Creates a new contact. Requires name and phone number in the request body.
GET /findContact/:contactId: Retrieves a specific contact by its ID.
GET /getAllContacts: Retrieves all contacts.
GET /findContactByName: Searches for contacts by name. Requires a name query parameter.
PATCH /editContact/:contactId: Updates an existing contact. Requires contact ID and updated name/phone number in the request body.
DELETE /deleteContact/:contactId: Deletes a contact by its ID.

Installation and Usage
Clone the repository.
Install dependencies: npm install.
Start the server: npm start.
Use your preferred HTTP client to send requests to the specified routes.

Example usage
Create a new contact:
POST /phonebook/addContact

{
  "name": "John Doe",
  "phoneNumber": "9834569890" (+977 is optional starting is from 9, the second digit can range from 8-6 and total number of digits should be 10)
}

Get all contacts:
GET /getAllContacts

Get a contact:
GET /phonebook/findContact

Update a contact:
PATCH /phonebook/editContact/123

{
  "name": "Jane Doe",
  "phone": "987-654-3210"
}

Delete a contact:
DELETE /phonebook/deleteContact/456


This project provides a basic CRUD implementation for contact management. Feel free to extend it with additional features like authentication, authorization, and data validation.

Happy coding!
