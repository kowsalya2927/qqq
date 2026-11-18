import React from "react";
import StudentCard from "./StudentCard";
import "./App.css";
function App(){
  return (
    <div className="app">
    <h1>Student Profile Cards</h1>
    <StudentCard
      name = "Asha.B"
      course = "B.Tech AI&DS"
      role = "Student"
      college = "United Institute of Technology"
      />
      <StudentCard
      name = "Arun.S"
      course = "B.Tech CSE"
      role = "Student"
      college = "United Institute of Technology"
      />
      <StudentCard
      name = "Ram.G"
      course = "B.Tech EEE"
      role = "Student"
      college = "United Institute of Technology"
      />
    </div>
  );
}
export default App;