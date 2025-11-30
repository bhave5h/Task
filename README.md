# 🚀 Task Management Web App

### For Frontend Developer Internship — Assignment Submission

## 📌 1. Overview

Built with **React + TailwindCSS + Flask + MySQL**

A modern, responsive **Task Management Web Application** featuring Admin and Employee dashboards.
Admin can assign tasks; Employees can view tasks dynamically from the backend.
Project demonstrates frontend engineering + backend integration with MySQL.

---

## ✨ 2. Features 

### ✔ Frontend
* Responsive React UI made using TailwindCSS and custom CSS
* Took Inspiration From https://dribbble.com/shots/24914143-Workly-CRM-Dashboard
* Dynamic employee dropdown
* Task creation form
* Real-time task viewing
* Clean reusable components (Header, StatsCard, TaskCard, ToDoCard)
  

### ✔ Backend

* Flask API with CORS
* MySQL (InfinityFree) live database
* Endpoints implemented:
  * `POST /create-task`
  * `GET /employees`
  * `GET /tasks/<username>`

### ✔ Database
* Users table (1 admin + 6 employees)
* Tasks table
* Realistic demo data

---

## ⚡ 3. Tech Used

### **Frontend:**
React, React Router, TailwindCSS, React Icons

### **Backend:**
Flask, Flask-CORS, mysql-connector-python

### **Database:**
MySQL

---

## 📁 4. Folder Structure

```
/project-root
 ├── frontend/
 │    ├── src/
 │    │    ├── components/
 │    │    ├── Pages/
 │    │    ├── App.jsx
 │    │    ├── index.css
 │    └── package.json
 ├── backend/
 │    ├── app.py
 │    └── requirements.txt
 └── README.md
```

---

## 🛠 5. Setup Instructions

### 1. Clone Repository
```
git clone https://github.com/bhave5h/Task
```

### 2. Frontend
```
cd frontend
npm install
npm install react-icons
npm install three postprocessing @react-three/fiber @react-three/postprocessing
npm run dev
```
Runs on: `http://localhost:5173`

### 3. Import Batabase 
```
tasks.sql
```

### 4. Backend

```
cd backend
pip install -r requirements.txt
python app.py
```
Runs on: `http://127.0.0.1:5000`


---

## 📦 6. Deliverables

### ✔ Completed

* Frontend + Backend integrated
* MySQL database connected
* Dashboard UI built
* Create & Fetch tasks working
* Employee dropdown working
* Scaling notes included

### Remaining Features 

* JWT login/auth
* Logout flow
* Update/Delete task
* Postman documentation

---

## 🔍 7. Summary

This project meets the core requirements of the assignment:
* ✔ Responsive UI
* ✔ Functional dashboard
* ✔ Database integration
* ✔ Working API communication
* ✔ Scalable code structure

Additional features like JWT auth and full CRUD can be added easily with the existing architecture.
Thank you for reviewing my submission. I am excited for your feedback and happy to extend the project further if required.

---
