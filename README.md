# Smart Parking Management System

A web application for managing parking lots. Built with React, Express, Node.js, and MongoDB.

## Features

- User authentication with admin and user roles
- Admin can manage parking lots and slots
- Slot status simulation for testing
- Users can view available parking spaces

## Tech Stack

**Backend:** Node.js, Express, MongoDB, Mongoose

**Frontend:** React, React Router, Axios

## Project Structure

```
backend/
├── config/         # Database configuration
├── controllers/    # Business logic
├── models/         # Database models
├── routes/         # API routes
├── middleware/     # Auth middleware
└── seed.js         # Seed data

frontend/
├── src/
│   ├── pages/      # Login, Register, Dashboards
│   ├── context/    # Auth context
│   └── services/   # API service
```

## Setup Instructions

### Backend

```bash
cd backend
npm install
```

Create `.env` file:
```
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=30d
```

Seed database and start server:
```bash
npm run seed
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## Test Accounts

**Admin:**
- Email: admin@smartpark.com
- Password: admin123

**User:**
- Email: john@example.com
- Password: user123

## How It Works

- Users login and view available parking lots
- Admins can create and manage parking lots
- Slot status can be updated manually or via simulation
- Authentication handled with JWT
- Data stored in MongoDB
