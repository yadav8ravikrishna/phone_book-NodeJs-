Node.js CRUD Project - Contact Management System
Overview
This Node.js CRUD (Create, Read, Update, Delete) project is a simple Contact Management System that allows users to maintain a record of contacts with their name and phone number. The project provides various routes to perform CRUD operations on the contacts.

Project Structure
The project is structured with the following components:

controllers: Contains the logic for handling different CRUD operations.

routes: Defines the API routes for creating, retrieving, updating, and deleting contacts.

API Routes
1. Add a New Contact
Route: POST /addContact

Description: Adds a new contact to the system.

2. Find a Contact by ID
Route: GET /findContact/:contactId

Description: Retrieves a contact based on the provided contact ID.

3. Get All Contacts
Route: GET /getAllContacts

Description: Retrieves a list of all contacts in the system.

4. Search Contact by Name
Route: GET /findContactByName

Description: Searches for contacts based on the provided name.

5. Update a Contact
Route: PATCH /editContact/:contactId

Description: Modifies the information of an existing contact based on the provided contact ID.

6. Delete a Contact
Route: DELETE /deleteContact/:contactId

Description: Deletes a contact from the system based on the provided contact ID.

Getting Started
Clone the repository to your local machine.

bash
Copy code
git clone <repository-url>
Install dependencies.

bash
Copy code
npm install
Run the project.

bash
Copy code
npm start
Access the API using the defined routes.

Dependencies
Express: A web application framework for Node.js.
Body-parser: Middleware for parsing incoming request bodies.
Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
Note
Ensure you have a MongoDB server running, and update the database connection configuration in the project accordingly.

Feel free to explore and customize the project to meet your specific requirements!
