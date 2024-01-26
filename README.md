
# Blue Rabbit Code Challenge

Fork this repo and create a Full Stack app using languages and frameworks of your choice that 
*literally* introduces you to us. Submit your response back to us here in the form of a pull 
request or submit it to us privately. Please don't spend more than a couple hours on it. It's ok
if you don't finish, just tackle the requirements in order and take it as far as you can in the time frame.

Include A README with instructions on how to build/run the app. Use the README to let us know
why you chose the technologies you did. Notes on design patterns, challenges, or aspects
of your stack that you find interesting are also appreciated!

### Requirements
1. Create an API with an endpoint or operation that we can call that tells us your name. The shape of the data 
and the storage mechanism are up to you. It's ok if it takes no params and returns only your name.
2. Create a minimal frontend that calls your api and displays your name when we run it.
3. Add an API endpoint or operation that takes a name and stores it.
4. Add an input to the frontend that we can use to submit a name to the endpoint or operation you just created.  
5. Add an input to the frontend that lets us upload an image avatar and submit it to your API.


### Solution

# Full Stack App

## Overview

This is a simple Full Stack App with  backend and a minimal frontend. The application allows you to manage names, including adding, updating, and retrieving them.

## Technologies Used

- **Backend:**
  - Node.js with TypeScript
  - Express.js for the API
  - Multer for handling file uploads

- **Frontend:**
  - React.js with TypeScript

## Model Explanation

The application uses a simple data model for representing names, consisting of the following properties:

- **id:** Each name is assigned a unique identifier (`id`) at the time of creation. This identifier serves as a primary key and facilitates the ability to track and update specific names. We leverage the `uuid` library to generate these unique identifiers.

- **name:** The actual name associated with the record.

- **avatar:** An optional field representing the avatar image associated with the name. This field can be left blank during the creation or update of a name.

By assigning a unique `id` to each name, the application ensures a reliable and consistent way to identify and update individual records. The `avatar` field, being optional, provides flexibility for users who may choose not to associate an image with a particular


## Services

### 1. Get My Name

- **Endpoint:** `/api/getNames`
- **Method:** GET
- **Description:** Retrieves all the names that are in memory
- **Example:**
  ```bash
  curl --location 'http://localhost:3001/api/getNames'
  ```

### 2. Add a Name

- **Endpoint:** `/api/getNames`
- **Method:** POST
- **Description:** Adds a new name to the database. Accepts a name and a file as a parameter
- **Example:**
  ```bash
  curl --location 'http://localhost:3001/api/addName' \ --form 'avatar=@"/C:/Users/jorge/OneDrive/Escritorio/78106547.jpeg"' \ --form 'name="Jhon doe"'
  ```


### 3. Update a Name

- **Endpoint:** `/api/updateName/:id`
- **Method:** POST
- **Description:** update a name into the database. Accepts a name and a file as a parameter
- **Example:**
  ```bash
  curl --location 'http://localhost:3001/api/updateName/1f3bb381-2c0b-400b-aa33-f87c20f429fa' \ --form 'avatar=@""' \
--form 'name="Jhon Segundo"'
  ```


## Notes
### 1. 
For the addName and updateName API endpoints, make sure to send the data in the form format. For addName, include a field for the name and an optional field for the avatar. For updateName, provide the id of the name to be updated along with optional fields for the new name and avatar.

### 2. 
I added a postman collection in the folder postman_collection that are in the root

### 3. Update a Name


    




