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

⚙️ Installation Guide (Single Project Folder)
1️⃣ Clone the Project
bash
Copy
Edit
git clone https://github.com/Krishanu321/Doc-Appoinment-system.git
cd Doc-Appoinment-system
2️⃣ Install Backend Dependencies
bash
Copy
Edit
cd backend
npm install
🛠️ Create a .env file in the backend/ folder:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
▶️ Start the backend server:

bash
Copy
Edit
npm run dev
3️⃣ Install Frontend Dependencies
bash
Copy
Edit
cd ../frontend
npm install
npm run dev
