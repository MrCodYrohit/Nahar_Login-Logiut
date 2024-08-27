

---

# Nahar Login Logout Page

## Overview

This project is a full-stack authentication application built using the latest versions of the MERN stack (MongoDB, Express.js, React.js, Node.js). The application features email and password authentication via JSON Web Tokens (JWT), Google OAuth integration, Redux Toolkit for state management, secure profile pages, dynamic profile management, account deletion, CRUD operations, and deployment using Render.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

### 1. Frontend Setup
- **React.js & Tailwind CSS Integration:** The frontend is built using React.js, styled with Tailwind CSS.
- **React Router Dom:** Utilizes the latest version of React Router Dom for robust routing and creating authentication pages.

### 2. Authentication Mastery
- **Email and Password Authentication:** Secure user authentication is achieved through JSON Web Tokens (JWT).
- **Google OAuth Integration:** Seamless sign-in with Google using OAuth 2.0.

### 3. Efficient State Management with Redux Toolkit
- **Global State Management:** Redux Toolkit is employed for streamlined state management, allowing for easy maintenance of global states.

### 4. Ironclad Profile Pages
- **Dual-Layer Protection:** Profile pages are secured on both the client and backend sides to ensure maximum security.

### 5. Dynamic Profile Management
- **Profile Updates:** Users can update their profiles, including usernames, emails, and passwords.
- **Image Profile Updates:** Profile images can be updated using Firebase Storage.

### 6. Account Deletion
- **Safe Account Deletion:** Implemented checks for JSON Web Token cookies to safely delete user accounts.

### 7. Masterful CRUD Operations
- **CRUD with MongoDB:** Enables Create, Read, Update, and Delete operations with MongoDB for effective database interaction.

### 8. Deployment and Sharing
- **Deployment on Render:** The application is deployed using Render, providing a free and accessible way to share and showcase the project.

## Installation

### Prerequisites
- Node.js
- MongoDB
- npm (Node Package Manager)
- Firebase Account (for profile image storage)

### Backend Setup
1. Clone the repository.
2. Navigate to the backend directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file for environment variables:
   ```bash
   PORT=<Your Port>
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   GOOGLE_CLIENT_ID=<Your Google Client ID>
   GOOGLE_CLIENT_SECRET=<Your Google Client Secret>
   ```
5. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Integrate Tailwind CSS:
   ```bash
   npm install -D tailwindcss
   ```
   Follow the setup instructions for Tailwind CSS in your React app.
4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Navigate to `http://localhost:<Your Port>` in your browser.
2. Sign up or sign in using email/password or Google OAuth.
3. Manage your profile, update details, and delete your account if needed.
4. Perform CRUD operations on the platform.

## Deployment

1. Set up your Render account.
2. Connect the GitHub repository to Render.
3. Configure environment variables on Render.
4. Deploy the application by following Render’s deployment process.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.



---

