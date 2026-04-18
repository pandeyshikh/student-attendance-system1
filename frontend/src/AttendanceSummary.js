import React from "react";

function AttendanceSummary({ students }) {
  const total = students.length;
  const present = students.filter((s) => s.isPresent).length;
  const absent = total - present;

  return (
    <div className="summary">
      <div className="card total">
        <h3>Total Students</h3>
        <p>{total}</p>
      </div>
      <div className="card present">
        <h3>Present</h3>
        <p>{present}</p>
      </div>
      <div className="card absent">
        <h3>Absent</h3>
        <p>{absent}</p>
      </div>
    </div>
  );
}

export default AttendanceSummary;
