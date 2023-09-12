# backend-task2
## Project Description
This documentation provides details on how to use the API created for the "backend-task2" project. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of persons with their names. Below, you will find information on the standard formats for requests and responses, sample usage, known limitations, and instructions for setting up and deploying the API.


## API Endpoints
The API consists of the following endpoints:
# 1. Create a Person
Endpoint: /api
HTTP Method: POST
*  Request Body Format:
```json
{
  "name": "Sofiyyah Abidoye"
}
```

* Response Format (Success):
```json
{
    "name": "S. T. Abidoye",
    "_id": "65003a3622bf2562c839d844",
    "__v": 0
}
```

* Response Format (Error):
```json
{
  "error": "Internal Server Error"
}
```
# 2.  Get a Person
Endpoint: /api/:user_id
HTTP Method: GET
* Response Format (Success):
```json
{
    "name": "S. T. Abidoye",
    "_id": "65003a3622bf2562c839d844",
    "__v": 0
}
```
* Response Format (Error):
```json
{
  "error": "Internal Server Error"
}
```
# 3.  Get all Persons
Endpoint: /api
HTTP Method: GET
* Response Format (Success):
```json
[
    {
        "_id": "64ff288b0db1fc84b4c40de2",
        "name": "Arike",
        "__v": 0
    },
    {
        "_id": "64ff2bb8ac4507004a7f67fe",
        "name": "Sapphire Abidoye",
        "__v": 0
    }
]
```
* Response Format (Error):
```json
{
  "error": "Internal Server Error"
}
```
# 4. Update a Person
Endpoint: /api/:user_id
HTTP Method: PUT
*  Request Body Format:
```json
{
  "name": "Titi Abidoye"
}
```
* Response Format (Success):
```json
{
    "name": "S. T. Abidoye",
    "_id": "65003a3622bf2562c839d844",
    "__v": 0
}
```
* Response Format (Error):
```json
{
  "error": "Internal Server Error"
}
```
# 5. Delete a Person
Endpoint: /api/:user_id
HTTP Method: DELETE
* Response Format (Success):
```json
{
  "error": "Person deleted successfully"
}
```
* Response Format (Error):
```json
{
  "error": "Internal Server Error"
}
```
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

The API will be available at https://resource-api.onrender.com/api
