# 🏨 SK Hotel – Hotel Management Web Application

## 📌 Project Overview
SK Hotel is a full-stack hotel management web application developed using modern web technologies and basic DevOps practices.  
The project allows users to view hotel details and book rooms through a simple and user-friendly interface.

---

## 🎯 Project Objective
- Build a complete web application (Frontend + Backend)
- Learn real-world project structure
- Use Git & GitHub for version control
- Deploy the application using Docker and AWS EC2

---

## 🛠️ Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### DevOps & Cloud
- Git & GitHub
- Docker
- Docker Compose
- AWS EC2 (Free Tier)

---

## 📁 Project Structure
sk-hotel/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── Dockerfile
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── Dockerfile
│
├── screenshots/
│   ├── home.png
│   ├── booking.png
│   └── success.png
│
├── docker-compose.yml
└── readme.md

---

## 🔗 API Endpoints

### ➤ Book a Room
- **URL:** `/book`
- **Method:** `POST`
- **Description:** Accepts booking details from frontend and processes the booking.

#### Request Body (JSON)
```json
{
  "name": "John",
  "roomType": "Deluxe",
  "date": "2025-12

## 🚀 How to Run the Project (Docker)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/sk-hotel.git
cd sk-hotel
## 📸 Screenshots

### 🏠 Home Page
Displays the SK Hotel landing page with room booking option.

_(c:\Users\srika\OneDrive\Pictures\Screenshots\Screenshot 2025-12-25 194024.png)_

### 📝 Booking Form
Users can enter booking details like name, room type, and date.

_(c:\Users\srika\OneDrive\Pictures\Screenshots\Screenshot 2025-12-25 195352.png)_

### ✅ Booking Confirmation
Shows successful booking response from backend.

_(Screenshot will be added here)_

