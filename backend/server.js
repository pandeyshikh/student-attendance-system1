const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://localhost:27017/attendance");


// Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  isPresent: { type: Boolean, default: false },
});

const Student = mongoose.model("Student", studentSchema);

// Add student
app.post("/api/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all students
app.get("/api/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Mark attendance
app.put("/api/students/:id/attendance", async (req, res) => {
  const { isPresent } = req.body;
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    { isPresent },
    { new: true }
  );
  res.json(student);
});

// Delete student
app.delete("/api/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
