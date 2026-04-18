import React, { useState, useEffect } from "react";
import axios from "axios";
import AddStudentForm from "./AddStudentForm";
import StudentList from "./StudentList";
import AttendanceSummary from "./AttendanceSummary";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/api/students");
    setStudents(res.data);
  };

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateAttendance = (updatedStudent) => {
    setStudents(
      students.map((s) => (s._id === updatedStudent._id ? updatedStudent : s))
    );
  };

  return (
    <div className="container">
      <header>
        <h1> Student Attendance Dashboard</h1>
      </header>
      <AddStudentForm onAdd={addStudent} />
      <AttendanceSummary students={students} />
      <StudentList 
  students={students} 
  onUpdate={updateAttendance} 
  onDelete={(id) => setStudents(students.filter(s => s._id !== id))}
/>

    </div>
  );
}

export default App;
