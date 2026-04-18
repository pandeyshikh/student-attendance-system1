# student-attendance-system

Student Attendance System 
This project is a simple Student Attendance System built with React JS on the frontend and Node.js + Express + MongoDB on the backend.
The goal was to create a clean, working app in a short time  where a teacher/admin can manage students and mark attendance.

What it does
Add new students with their name and roll number

Show all students in a table view

Mark each student as Present or Absent

See a quick summary:

Total students

Present count

Absent count

Optionally delete a student if needed

Tech Used
Frontend: React JS (functional components, hooks)

Backend: Node.js + Express

Database: MongoDB

Backend APIs
POST /api/students → Add a new student

GET /api/students → Get all students

PUT /api/students/:id/attendance → Update attendance (present/absent)

DELETE /api/students/:id → Delete student (optional)

Validation:

Name and Roll No are required

Duplicate Roll No is not allowed

Frontend Components
AddStudentForm → Form to add students

StudentList → Table showing all students

AttendanceToggle → Buttons to mark present/absent

AttendanceSummary → Shows total, present, absent counts

React concepts used: useState, useEffect, controlled forms, API calls with fetch/axios.

How to Run
Backend
bash
cd backend
npm install
npm start
Frontend
bash
cd frontend
npm install
npm start
