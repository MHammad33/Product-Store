# Product-Store

A MERN stack application created to explore and implement best practices in modern web development.

---

### Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Contribution Guidelines](#contribution-guidelines)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Development Timeline](#development-timeline)

---

### Project Overview

`Product-Store` is a full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, and Node.js) to demonstrate modern web development best practices. This project serves both as a learning platform for developers and as a foundation for creating scalable and maintainable e-commerce applications.

The goal of this project is to provide a secure, scalable, and modular architecture that can be easily expanded with additional features, such as advanced search functionality, product recommendations, and payment gateway integration.

#### Key Objectives:

- **Learning Tool**: This project is designed for developers to explore and implement best practices in full-stack web development.
- **Scalable Design**: Using the MERN stack allows the application to handle growth in terms of both users and features.
- **User-Centric Experience**: The app focuses on providing a seamless and intuitive shopping experience for users, from browsing products to completing a purchase.
- **Maintainability**: The project is structured to prioritize clean, maintainable code, with a focus on scalability and ease of future enhancements.

#### Use Cases:

1. **Online Retailers**: Can use the template to build and scale their own online stores.
2. **Developers**: Can learn and build upon this foundation to create custom e-commerce applications.
3. **Students**: Ideal for those looking to understand the fundamentals of building full-stack applications using the MERN stack.

The application is designed with both **end users** and **developers** in mind, making it easy to extend with additional features like advanced user authentication, payment processing, or administrative tools.

## Key Features

- **TypeScript Integration**

  - Provides full-stack type safety, reducing runtime errors
  - Enhances API request validation for robust client-server interactions
  - Boosts development efficiency by identifying type-related issues during coding

- **ESLint Configuration**

  - Maintains code quality with custom linting rules for a consistent development style
  - Automatically flags common errors, encouraging cleaner, more maintainable code

- **UI with ShadCN**

  - Styled with ShadCN components, ensuring a responsive, cohesive interface
  - Provides a modern design aesthetic with ease of customization

- **End-to-End Testing**
  - Validated with Playwright for reliable, comprehensive E2E testing
  - Ensures that the application works as expected across various use cases

### Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB
- **Testing**: Playwright (E2E), Vitest (planned for unit/integration tests)
- **Development Tools**: ESLint, Prettier for code quality; Git for version control; dotenv for environment variable management

- **Robust API Design**

  - Built with Express.js, enabling RESTful API design and efficient data handling
  - API follows best practices with clearly defined endpoints and consistent naming conventions

- **Database Integration**
  - MongoDB used as the primary database for handling complex data structures
  - Mongoose ORM enables schema validation and easy interaction with the database

### Contribution Guidelines

- **Fork the Repository**: Start by forking the repository to make your changes.
- **Set Up Development Environment**: Clone your fork and run `npm install` to set up dependencies.
- **Create Feature Branch**: Use feature branches for changes, e.g., `git checkout -b feature/add-auth`.
- **Pull Request**: Submit a pull request, describing the changes and referencing any related issues.

### Usage

1. **Clone the Repository**: `git clone https://github.com/MHammad33/Product-Store.git`
2. **Install Dependencies**: `npm install` for both frontend and backend
3. **Start Development Server**: Run `npm run dev` to start the application in development mode
4. **Testing**: Run `npm run test` to execute end-to-end tests with Playwright

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- **MONGO_URI**: MongoDB connection string (e.g., `mongodb://localhost:27017/product-store` or MongoDB Atlas URI)
- **JWT_SECRET**: Secret key for signing JSON Web Tokens for user authentication
- **PORT**: Port number for server (default is 5000)

---

### Roadmap

- **User Authentication and Authorization**: Secure login and role-based access control
- **Shopping Cart Feature**: Enable users to add, remove, and view items in their cart
- **Product Reviews and Ratings**: Allow users to review and rate products
- **Admin Dashboard**: Add an admin panel for managing products, orders, and users
- **Notifications**: Integrate real-time notifications for order updates and product availability

### Development Timeline

- **Time Spent**: 4.5 hours (and counting)
  - Last Updated: 01:05:00
