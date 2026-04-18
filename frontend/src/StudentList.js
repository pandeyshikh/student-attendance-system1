import React, { useState } from "react";
import axios from "axios";

function StudentList({ students, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");

  const toggleAttendance = async (id, currentStatus) => {
    const res = await axios.put(`http://localhost:5000/api/students/${id}/attendance`, {
      isPresent: !currentStatus,
    });
    onUpdate(res.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    onDelete(id);
  };

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="student-list">
      <h2> Student List</h2>
      <input
        className="search"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Status</th>
            <th>Toggle</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((s) => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.rollNo}</td>
              <td>
                <span className={s.isPresent ? "present" : "absent"}>
                  {s.isPresent ? "Present" : "Absent"}
                </span>
              </td>
              <td>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={s.isPresent}
                    onChange={() => toggleAttendance(s._id, s.isPresent)}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                <button 
                  className="delete-btn" 
                  onClick={() => deleteStudent(s._id)}
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
