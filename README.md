
# Basic Login System

A complete backend REST API for user registration and authentication built with **Node.js**, **Express**, **MongoDB (Mongoose)**, **Bcrypt**, and **JSON Web Tokens (JWT)**.


## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Authentication:** JSON Web Tokens (`jsonwebtoken`)
* **Password Hashing:** `bcrypt` / `bcryptjs`
* **Environment Configuration:** `dotenv`


## Features

- **Password Hashing:** Hashes passwords automatically using a Mongoose pre-save hook before storing them in the database.
- **Data Protection:** Cover sensitive data by removing passwords from all API responses.
- **JWT Authentication:** Issues signed JSON Web Tokens upon successful login for secure access.
- **Validation & Error Handling:** Validates unique email addresses and handles edge cases/bad requests gracefully.


## Prerequisites

Before running the application, make sure you have installed:
* **Node.js** 
* **npm** 
* An active **MongoDB Atlas** database account


## Getting Started & Local Setup

Follow these steps to run the project locally:

### 1. Clone the repository

 * git clone https://github.com/natalymelnichuk/basic-login-system-lab
 * cd basic-login-system-lab

### 2. Install dependencies
 * npm install

### 3. Set up environment variables
Create a .env file in the root directory of your project and add the following variables:
 * PORT=3000
 * MONGO_URI=your_mongodb_connection_string
 * JWT_SECRET=your_super_secret_jwt_key

### 4. Run the server
 * node server.js

Or in development mode (if nodemon is installed):

 * npm run dev


# API Endpoints

### 1. Register User

 * **URL:** /api/users/register
 * **Method:** POST
 * **Headers:** Content-Type: application/json
 * **Body:** 
{
  "username": "name",
  "email": "name@example.com",
  "password": "password"
}

### 2. Login User

 * **URL:** /api/users/login
 * **Method:** POST
 * **Headers:** Content-Type: application/json
 * **Body:** 
{
  "email": "name@example.com",
  "password": "password"
}

### 3. Get All Users 

 * **URL:** /api/users
 * **Method:** GET