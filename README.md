# 🩺 Doctor Appointment Booking System

A web-based Doctor Appointment Booking System built using the MERN Stack. Users can register, book appointments, and manage doctors through an admin dashboard.


![Screenshot (332)](https://github.com/user-attachments/assets/92b28750-0df9-4e77-b7d5-d0a4fe58c575)

---

## 📂 Folder Structure

├── backend # Node.js + Express backend APIs
├── frontend # React.js frontend (client)
├── dashboard # Admin Dashboard


---

## 🚀 Features

- User Registration & Login (JWT Auth)
- Book Appointments with Doctors
- Admin Dashboard for Doctor & Appointment Management
- Responsive Design using Tailwind CSS
- Role-based access control (Patient / Admin)

---

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, bcrypt
- **Others:** dotenv, CORS, React Router

---
project: Doctor Appointment Booking System
stack: MERN (MongoDB, Express.js, React.js, Node.js)

installation:
  - step: Clone Repository
    description: Download the project to your local machine.
    commands:
      - git clone https://github.com/Krishanu321/Doc-Appoinment-system.git
      - cd Doc-Appoinment-system

  - step: Backend Setup
    description: Install dependencies and configure environment variables.
    commands:
      - cd backend
      - npm install
    env:
      file: ".env"
      location: backend/
      variables:
        PORT: 5000
        MONGO_URI: your_mongo_connection_string
        JWT_SECRET: your_jwt_secret
    run:
      server: npm run dev

  - step: Frontend Setup
    description: Install frontend packages and start the development server.
    commands:
      - cd ../frontend
      - npm install
      - npm run dev
