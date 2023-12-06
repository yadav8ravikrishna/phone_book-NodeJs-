Node.js CRUD Project - Contact Management
Overview
This Node.js CRUD (Create, Read, Update, Delete) project is designed to manage contacts, storing their name and phone number. The project provides a set of API endpoints for performing various operations on the contact records.

Features
Add a New Contact: Adds a new contact to the system with a specified name and phone number.
Find Contact by ID: Retrieves contact details based on the provided contact ID.
Get All Contacts: Fetches a list of all contacts stored in the system.
Search Contact by Name: Searches for contacts based on the provided name.
Update Contact: Modifies the details of a contact identified by its ID.
Delete Contact: Removes a contact from the system using its ID.

Installation

Clone the repository:
git clone <repository-url>
cd nodejs-crud-contact


Install dependencies:
npm install


Set up the database:

Create a database and configure the connection in config/database.js.

Run the application:
npm start
The application will be accessible at http://localhost:8000 by default.

API Endpoints

Add a New Contact
Endpoint: POST /addContact
Request Body:
{
  "name": "John Doe",
  "phoneNumber": "123-456-7890"
}

Find Contact by ID
Endpoint: GET /findContact/:contactId

Get All Contacts
Endpoint: GET /getAllContacts

Search Contact by Name
Endpoint: GET /findContactByName
Query Parameters:
name: Name to search for.

Update Contact
Endpoint: PATCH /editContact/:contactId
Request Body (Example):

{
  "phoneNumber": "987-654-3210"
}

Delete Contact
Endpoint: DELETE /deleteContact/:contactId
Technologies Used
Node.js
Express.js
MongoDB
