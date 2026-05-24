# GiftLink - Full Stack Capstone Project

GiftLink is a full-stack web application for sharing and discovering gifts. Users can browse available gifts, search by various criteria, view details, register, login, and manage their profile.

## Project Structure

```
fullstack-capstone-project/
├── giftlink-backend/         # Node.js/Express backend
│   ├── app.js               # Main server file
│   ├── logger.js            # Pino logger configuration
│   ├── models/
│   │   └── db.js            # MongoDB connection
│   ├── routes/
│   │   ├── authRoutes.js    # Authentication routes
│   │   ├── giftRoutes.js    # Gift CRUD routes
│   │   └── searchRoutes.js  # Search/filter routes
│   └── util/
│       └── import-mongo/    # MongoDB data import utility
├── giftlink-frontend/       # React frontend
│   ├── src/
│   │   ├── App.js           # Main React component
│   │   ├── config.js        # Backend URL configuration
│   │   ├── context/
│   │   │   └── AuthContext.js  # Authentication context
│   │   └── components/
│   │       ├── MainPage/    # Gift listing page
│   │       ├── SearchPage/  # Search and filter page
│   │       ├── DetailsPage/ # Gift details page
│   │       ├── LoginPage/   # User login page
│   │       ├── RegisterPage/# User registration page
│   │       ├── Profile/     # User profile page
│   │       └── Navbar/      # Navigation component
│   └── public/              # Static assets
└── sentiment/               # Sentiment analysis module
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd giftlink-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.sample`:
   ```
   MONGO_URL=mongodb://localhost:27017/giftdb
   JWT_SECRET=your_secret_key_here
   ```

4. Seed the database (optional):
   ```bash
   cd util/import-mongo
   npm install
   node index.js
   cd ../..
   ```

5. Start the server:
   ```bash
   npm start
   # or for development with auto-reload:
   npm run dev
   ```

The backend server will run on port 3060.

## Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd giftlink-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```
   REACT_APP_BACKEND_URL=http://localhost:3060
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The frontend development server will run on port 3000.

## Features

- **Browse Gifts**: View all available gifts on the main page
- **Search & Filter**: Search gifts by name, category, condition, and age
- **Gift Details**: View detailed information about each gift with comments
- **User Authentication**: Register and login with JWT-based authentication
- **Profile Management**: Update user profile information
- **Responsive Design**: Mobile-friendly user interface

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `PUT /api/auth/update` - Update user profile

### Gifts
- `GET /api/gifts` - Get all gifts
- `GET /api/gifts/:id` - Get gift by ID
- `POST /api/gifts` - Create a new gift

### Search
- `GET /api/search` - Search gifts with filters (name, category, condition, age_years)

## Environment Variables

### Backend
| Variable | Description |
|----------|-------------|
| MONGO_URL | MongoDB connection string |
| JWT_SECRET | Secret key for JWT signing |
| NODE_ENV | Environment (development/production) |

### Frontend
| Variable | Description |
|----------|-------------|
| REACT_APP_BACKEND_URL | Backend API base URL |

## License

This project is licensed under the ISC License.