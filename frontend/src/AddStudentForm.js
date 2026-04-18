import React, { useState } from "react";
import axios from "axios";

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/students", {
      name,
      rollNo,
    });
    onAdd(res.data);
    setName("");
    setRollNo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={rollNo} onChange={(e) => setRollNo(e.target.value)} placeholder="Roll No" />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;
