# 🩺 Doctor Appointment Booking System

A web-based Doctor Appointment Booking System built using the MERN Stack. It allows users to register, book appointments, and manage doctors through an admin dashboard.

![Uploading Screenshot (332).png…]()


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

## ⚙️ Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Krishanu321/Doc-Appoinment-system.git
cd Doc-Appoinment-system

### 2. Set up Backend

cd backend
npm install

### Create a .env file inside backend/ and add:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key

### Then start the backend server:
npm run dev

3. Setup Frontend
cd ../frontend
npm install
npm run dev
