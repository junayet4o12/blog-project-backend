# 📝 Blog-Project-Backend

## 📌 Overview

Blog-Project-Backend is a backend application built with **Express.js and TypeScript**, integrating **MongoDB with Mongoose** to manage a blogging platform. The API allows users to perform CRUD operations on **blogs**, while admins have additional privileges such as managing users and their blogs. Authentication and authorization ensure secure access control.

## 🌐 Live API Testing

Test the API endpoints using the deployed version:

```
https://blog-project-backend.vercel.app/
```

## 🛠️ Features

- ✅ **User Authentication** – Secure user registration and login with JWT
- ✅ **Blog Management** – Users can create, update, and delete their blogs
- ✅ **Role-Based Access Control** – Admins can manage users and delete any blog
- ✅ **Public Blog API** – Blogs can be viewed with search, sort, and filter functionalities
- ✅ **Error Handling** – Standardized error responses for validation and resource handling

## 🎯 API Endpoints

### 🔹 Authentication

- **POST** `/api/auth/register` – Register a new user
- **POST** `/api/auth/login` – Authenticate user and get a JWT token

### 🔹 Blog Management

- **POST** `/api/blogs` – Create a new blog (User only)
- **PATCH** `/api/blogs/:id` – Update an existing blog (Only by the author)
- **DELETE** `/api/blogs/:id` – Delete a blog (Only by the author)
- **GET** `/api/blogs` – Fetch all blogs (Public API with search, sort, and filter)

### 🔹 Admin Actions

- **PATCH** `/api/admin/users/:userId/block` – Block a user
- **DELETE** `/api/admin/blogs/:id` – Delete any blog

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (local installation or MongoDB Atlas account)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/junayet4o12/blog-project-backend.git
cd blog-project-backend
```

2. Install dependencies:

```bash
npm install
```

3. Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
NODE_ENV=development
PORT=5000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Available Scripts

- **Development Mode**:

```bash
npm run start:dev
```

Runs the application in development mode with hot-reload using ts-node-dev.

- **Production Build**:

```bash
npm run build
```

Compiles TypeScript code to JavaScript in the `dist` directory.

- **Production Mode**:

```bash
npm run start:prod
```

Runs the compiled application from the `dist` directory.

- **Linting**:

```bash
npm run lint       # Check for linting issues
npm run lint:fix   # Fix automatic linting issues
```

## Project Structure

```
blog-project-backend/
├── src/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   └── server.ts
├── dist/
├── .env
├── .eslintrc
├── package.json
├── tsconfig.json
└── README.md
```

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- Zod (Schema validation)
- bcrypt (Password hashing)
- JSON Web Token (JWT) for authentication
- ESLint (Code linting)

## Security Note

For security reasons, it's recommended to:

- Never commit the `.env` file to version control
- Use environment-specific configuration for different deployment environments
- Regularly update dependencies to patch security vulnerabilities

## Development

For local development:

1. Ensure MongoDB is running locally or you have access to a MongoDB Atlas cluster
2. Configure your `.env` file with appropriate values
3. Run `npm run start:dev` to start the development server
4. The API will be available at `http://localhost:5000`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

