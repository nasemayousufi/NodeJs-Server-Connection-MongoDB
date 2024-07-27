# Node.js Express API

This project is a Node.js Express API for managing users and products, including functionalities for authentication and authorization. The API provides endpoints for user registration, authentication, and CRUD operations on users and products.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- **User Authentication**: Sign in and register users with secure password hashing.
- **User Management**: CRUD operations for users with authorization checks.
- **Product Management**: CRUD operations for products with admin authorization.
- **Authorization**: Middleware to verify user roles and permissions.
- **Token Generation**: JWT tokens for secure access to protected routes.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>


## API End Points

- **POST:** `/users/seed`: Seed the database with inital   
    users. 
- **POST:** `/users/register` - Register a new user.
- **POST:** `/users/login` - Authenticate a user and generate 
    a JWT token.
- **GET:** `/users/:id` - Get user details by ID (requires 
    authentication).
- **PUT:** `/users/:id` - Update user details (requires 
    authentication and authorization).
- **DELETE:** `/users/:id` - Delete a user by ID (requires 
    authentication and admin authorization).
- **GET:** `/products` - Get a list of all products (public 
    access).
- **POST:** `/products` - Create a new product (requires 
    admin authorization).
- **GET:** `/products/:id` - Get product details by ID 
    (public access).
- **PUT:** `/products/:id` - Update product details (requires 
    admin authorization).
- **DELETE:** `/products/:id` - Delete a product by ID 
    (requires admin authorization).

## Configuration

1. **Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:

     ```plaintext
     PORT=8080
     DB_HOST=localhost
     DB_PORT=27017
     DB_NAME=mydatabase in mongodb compass
     JWT_SECRET=mysecretkey
     ```

2. **Database Setup:**
   - Ensure MongoDB is installed and running.
   - Update the `.env` file with your database connection details.

3. **Run Migrations/Seeds:**
   - To seed the database with initial data, use the `/users/seed` endpoint after starting the server.

## License