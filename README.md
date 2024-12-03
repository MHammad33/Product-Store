# Product-Store

Product Store is a full-stack e-commerce application that allows users to browse products, and add, edit, or delete products. This project is built with modern web technologies, including React, TypeScript, and Node.js.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Highlights](#project-highlights)
- [Development Timeline](#development-timeline)
- [How to Use](#how-to-use)
- [Roadmap](#roadmap)

---

## Overview

`Product-Store` is a fully functional e-commerce application designed to demonstrate expertise in full-stack development using the **MERN stack**.

This project emphasizes clean architecture, modularity, scalability, and modern best practices, making it a versatile solution for real-world e-commerce platforms. It serves as a foundation for scalable, maintainable applications while reflecting my technical proficiency and attention to detail.

### **Objective**

To create a **secure**, **scalable**, and **developer-friendly** e-commerce platform, showcasing the following:

1. Modern technologies like **TypeScript**, **ShadCN**, and **Zustand**.
2. A focus on **code quality**, using tools like **ESLint** and **Prettier**.
3. **End-to-end testing** with **Playwright** to ensure robust functionality.
4. A seamless user experience through a **responsive UI** and efficient API design.

### Folder Structure

The project consists of two main directories:

- **frontend**: Contains all the React and TypeScript code for the client-side.
- **backend**: Contains the Node.js, Express, and database-related code for the server-side.

### Available Scripts

- **In the root directory:**

  - `npm run dev`: Starts both the backend server and the frontend development server.
  - `npm run test`: Run Playwright end-to-end tests.

- **In the frontend directory:**
  - `npm start`: Starts the React development server.
  - `npm run build`: Builds the React app for production.

---

## Key Features

### Core Functionality

- **CRUD Operations for Products**  
  Users can create, update, and delete products efficiently.  
  _(Implemented via RESTful APIs with TypeScript integration)._

- **UI Excellence with ShadCN**

  - Responsive, modern design.
  - Highly customizable and scalable component structure.

- **TypeScript Integration**

  - Full-stack type safety ensures reliability.
  - Detects issues during development, reducing runtime errors.

- **State Management with Zustand**  
  Simplifies global state management for predictable and scalable app behavior.

---

### Quality Assurance

- **End-to-End Testing with Playwright**  
  Simulates real-world scenarios to validate core functionalities.
- **Custom ESLint Configuration**  
  Ensures consistent code style and detects common errors during development.

---

## Tech Stack

### **Frontend**

- **React (with TypeScript)**: Modern, scalable UI development.
- **Zustand**: Lightweight state management.
- **ShadCN**: Prebuilt UI components with elegant, responsive design.
- **Tailwind CSS**: Rapid and consistent styling.

### **Backend**

- **Node.js & Express**: High-performance, lightweight server.
- **TypeScript**: Strongly typed backend development.
- **Mongoose**: Simplifies MongoDB interaction.

### **Database**

- **MongoDB**: Document-based NoSQL database, ideal for e-commerce data structures.

### **Testing**

- **Playwright**: Comprehensive E2E testing for user workflows.
- **Vitest**: Planned integration for unit and integration testing.

---

## Project Highlights

1. **TypeScript First Approach**

   - Provides type safety across the stack.
   - Makes APIs robust and easy to extend.

2. **Focus on Scalability**

   - Modular structure to accommodate new features like payments and analytics.
   - Optimized for high performance with clean API design and state management.

3. **UI/UX Excellence**

   - Built with ShadCN for modern and responsive user interfaces.
   - Tailored for seamless user experiences.

4. **Code Quality**
   - Integrated ESLint and Prettier for linting and formatting.
   - Consistent, maintainable codebase.

---

## Development Timeline

- **Total Time Spent**: **10 hours** (and counting)
- **Current Functionalities**:
  - Product CRUD operations.
  - Create Product Page and Home Page (Frontend).  
    _(Fetch API + Zustand for state management)_
  - Backend APIs (TypeScript-enabled).

---

## How to Use

### 1. Clone the Repository

```bash
git clone https://github.com/MHammad33/Product-Store.git
```

### 2. Installation and Setup

- **Install Backend Dependencies**
  Navigate to the project root directory and install backend dependencies:

  ```bash
    npm install
  ```

- **Install Frontend Dependencies**
  Navigate to the frontend directory and install frontend dependencies:
  ```bash
    cd frontend
    npm install
  ```

### 3. Environment Variables

Create a `.env` file in the backend root directory with the following configuration:

```plaintext
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your JWT Secret Key>
PORT=5000
```

### 4. Run the Development Server

- **Start Backend Server**  
  From the project root directory, start the backend server:

  ```bash
  npm run dev
  ```

- **Start Frontend Server**
  Navigate to the frontend directory and start the frontend server:

  ```bash
  cd frontend
  npm run dev
  ```

### 5. Run Tests

Execute tests to ensure the application works as expected:

```bash
npm run test
```

## Roadmap

### Authentication

- Secure login and role-based access control.

### Shopping Cart

- Add-to-cart, view cart, and checkout functionalities.

### Product Reviews

- User-generated reviews and ratings.

### Admin Dashboard

- Manage products, users, and orders.

### Notifications

- Real-time updates for order status and stock alerts.

---

## Why This Project Stands Out

### Real-World Application

- Designed to be a complete, deployable e-commerce solution.

### Modern Development Practices

- Leveraging tools like **TypeScript**, **Zustand**, and **ShadCN** ensures the codebase is maintainable and future-proof.

### Robust Testing

- End-to-end testing with **Playwright** ensures reliability in real-world scenarios.

---

## Acknowledgements

- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework.
- [ShadCN](https://github.com/shadcn) for building reusable components.
- [Playwright](https://playwright.dev/) for end-to-end testing.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements or bug fixes.

To get started, follow these steps:

1. Fork the repository.
2. Clone your fork to your local machine.
3. Create a new branch (`git checkout -b feature-branch`).
4. Make your changes.
5. Commit your changes (`git commit -m 'Add new feature'`).
6. Push to the branch (`git push origin feature-branch`).
7. Open a pull request.

---

## Contact

If you have any questions or feedback, feel free to reach out to me at [hammadafzal1111@gmail.com] or connect with me on [LinkedIn](https://www.linkedin.com/in/mhammad33/).

---

## Conclusion

This project reflects my ability to create **scalable**, **user-friendly**, and **maintainable** web applications using the latest technologies. It also showcases my commitment to **code quality** and **best practices** in full-stack development.

For further information, feel free to explore the repository or contact me for more details.
