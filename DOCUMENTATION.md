## Project Description
This documentation provides details on how to use the API created for the "backend-task2" project. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of persons with their names. Below, you will find information on the standard formats for requests and responses, sample usage, known limitations, and instructions for setting up and deploying the API.


## API Endpoints
The API consists of the following endpoints:
# Create a Person
Endpoint: /api
HTTP Method: POST
Pass a json containing "name" as key, string of name as value in the request body.

# Read a Person
Endpoint: /api/:user_id
HTTP Method: GET

# Update a Person
Endpoint: /api/:user_id
HTTP Method: PUT
Pass a json containing "name" as key, string of name as new value in the request body.

# Delete a Person
Endpoint: /api/:user_id
HTTP Method: DELETE


## Known Limitations and Assumptions
The API assumes that the "name" field provided during person creation and updates should only contain letters, spaces, and dots. It uses the isValidName function to validate the name format.


## Setting Up and Deploying the API
Follow these steps to set up and deploy the API locally:
Clone the project repository from GitHub.
Install Node.js and npm if you haven't already.
Create a MongoDB database and obtain the connection URI. Set the URI in the .env file.
Install project dependencies by running the following command:
***
using yarn 
```
$ git clone https://github.com/Sorphy/backend-task2.git
$ yarn 
$ yarn start
```

The API will be available at http://localhost:3000