# 📝 Blog-Project-Backend

## 📌 Overview

Blog-Project-Backend is a robust RESTful API built with Express.js and TypeScript, designed to power a modern blogging platform. This application integrates MongoDB with Mongoose ODM to provide scalable data persistence, comprehensive authentication using JWT, and role-based access control for users and administrators.

## 🚀 Live API

Test the API endpoints using the deployed version:

```
https://blog-project-backend-rosy.vercel.app/
```

## 🛠️ Core Features

- ✅ **Secure Authentication** – JWT-based auth flow with access and refresh tokens
- ✅ **Content Management** – Full CRUD operations for blog posts with validation
- ✅ **Role-Based Access Control** – User/Admin permission system
- ✅ **Advanced Querying** – Search, filter, sort, and paginate blog content
- ✅ **Error Management** – Comprehensive error handling and validation
- ✅ **API Documentation** – Interactive Swagger docs for easy exploration

## 📊 API Endpoints

### 🔐 Authentication

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/login` | Authenticate and get tokens | Public |
| POST | `/api/auth/refresh` | Refresh access token | Auth Required |
| POST | `/api/auth/logout` | Invalidate tokens | Auth Required |

### 📝 Blog Management

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/blogs` | Fetch all blogs (with pagination/filter) | Public |
| GET | `/api/blogs/:id` | Fetch single blog by ID | Public |
| POST | `/api/blogs` | Create new blog | User |
| PATCH | `/api/blogs/:id` | Update own blog | Owner |
| DELETE | `/api/blogs/:id` | Delete own blog | Owner |

### 👤 User Management 

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/users/profile` | Get current user profile | Auth Required |
| PATCH | `/api/users/profile` | Update user profile | Auth Required |

### 🔑 Admin Operations

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/admin/users` | Get all users | Admin |
| PATCH | `/api/admin/users/:userId/block` | Block/unblock user | Admin |
| DELETE | `/api/admin/blogs/:id` | Delete any blog | Admin |

## 🧰 Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or Atlas)
- Git

## 📋 Installation

1. Clone the repository:
```bash
git clone https://github.com/junayet4o12/blog-project-backend.git
cd blog-project-backend
```

2. Install dependencies:
```bash
npm install
# or 
yarn install
```

3. Configure environment variables:
   
Create a `.env` file in the project root with the following variables:

```env
# Environment
NODE_ENV=development
PORT=5000

# Database
DB_URL=your_mongodb_connection_string

# Authentication
BCRYPT_SALT_ROUNDS=12
DEFAULT_PASS=your_default_password

# JWT Configuration
JWT_ACCESS_SECRET=your_access_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=30d
```

## 🏃‍♂️ Running the Application

### Development mode:
```bash
npm run start:dev
# or
yarn start:dev
```

### Production build:
```bash
npm run build
npm run start:prod
# or
yarn build
yarn start:prod
```

### Linting:
```bash
npm run lint        # Check for issues
npm run lint:fix    # Fix automatic issues
```

## 🏗️ Project Structure

```
blog-project-backend/
├── src/                    # Source code
│   ├── app/                # Application core
│   │   ├── builder/        # Express app setup
│   │   ├── config/         # Configuration files
│   │   ├── errors/         # Error handling
│   │   ├── interface/      # TypeScript interfaces
│   │   ├── middlewares/    # Express middlewares
│   │   ├── modules/        # Feature modules
│   │   ├── routes/         # API routes
│   │   └── utils/          # Utility functions
│   ├── app.ts              # Express app entry point
│   └── server.ts           # Server initialization
├── dist/                   # Compiled JavaScript
├── .env                    # Environment variables
├── .eslintrc               # ESLint configuration
├── .gitignore              # Git ignore rules
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 💻 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **Validation**: Zod
- **Password Hashing**: bcrypt
- **Linting**: ESLint
- **Deployment**: Vercel

## 🔒 Security Best Practices

This project implements several security best practices:
- Password hashing with bcrypt
- JWT with short-lived access tokens
- Role-based access control
- Input validation and sanitization
- Protected routes with middleware
- Rate limiting to prevent brute force attacks

## 🧪 Testing

Run the test suite:
```bash
npm run test
# or
yarn test
```

## 📦 Deployment

The application is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy with serverless functions support
4. Configure custom domain if needed

## 📝 API Documentation

Interactive API documentation is available at `/api-docs` when running the server. The documentation provides:
- Detailed endpoint descriptions
- Request/response examples
- Authentication requirements
- Interactive testing capabilities

## 🤝 Contributing

We welcome contributions to improve the Blog-Project-Backend:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.