# 🩺 Doctor Appointment Booking System

A web-based Doctor Appointment Booking System built using the MERN Stack. Users can register, book appointments, and manage doctors through an admin dashboard.



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
### installation:
  step_1:
    title: "Clone the Project"
    commands:
      - git clone https://github.com/Krishanu321/Doc-Appoinment-system.git
      - cd Doc-Appoinment-system

  step_2:
    title: "Install Backend Dependencies"
    commands:
      - cd backend
      - npm install
    env_file:
      location: "backend/.env"
      content: |
        PORT=5000
        MONGO_URI=your_mongo_connection_string
        JWT_SECRET=your_jwt_secret
    start_server:
      command: npm run dev

  step_3:
    title: "Install Frontend Dependencies"
    commands:
      - cd ../frontend
      - npm install
      - npm run dev
