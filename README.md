# TaskZ

TaskZ is a modern, full-stack task management application for organizing your tasks efficiently. It features a modern UI, user authentication, and powerful task management tools.

## Features

- User authentication (sign up, login, profile management)
- Add, edit, delete, and manage tasks
- Task priorities and due dates
- View pending and completed tasks
- Responsive, modern UI
- RESTful API backend

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS (if configured)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas or local)

## Folder Structure

```
TaskZ/
  backend/           # Express backend (API, DB models, controllers)
    config/          # Database config
    controllers/     # Route controllers
    middleware/      # Auth middleware
    models/          # Mongoose models
    routes/          # API routes
    server.js        # Entry point
    package.json     # Backend dependencies
  frontend/          # React frontend
    public/          # Static assets (favicon, etc.)
    src/             # React source code
      assets/        # Images, icons, etc.
      components/    # React components
      pages/         # Page components
      App.jsx        # Main app
      main.jsx       # Entry point
    package.json     # Frontend dependencies
  README.md          # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend root with your MongoDB credentials:
   ```env
   MONGO_USER=yourMongoUser
   MONGO_PASS=yourMongoPassword
   MONGO_CLUSTER=yourCluster.mongodb.net
   MONGO_DB=TaskZ
   PORT=4000
   ```
4. Start the backend server:
   ```bash
   npm run dev
   # or
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend dev server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

- **Backend** (`backend/.env`):
  - `MONGO_USER` - Your MongoDB Atlas username
  - `MONGO_PASS` - Your MongoDB Atlas password
  - `MONGO_CLUSTER` - Your MongoDB cluster address
  - `MONGO_DB` - Database name (e.g., TaskZ)
  - `PORT` - Backend server port (default: 4000)

## Usage

- Register a new account or log in.
- Create, edit, and manage your tasks.
- Mark tasks as completed or pending.
- View your profile and update your information.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Author

[amsuru18 on GitHub](https://github.com/amsuru18)
