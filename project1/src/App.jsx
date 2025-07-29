import React from "react";
import "./App.css";

function App() {
  const openResume = () => {
    window.location.href = "resume.html";
  };

  return (
    <div className="app-container">
      <button className="open-resume-btn" onClick={openResume}>
        Open My Resume
      </button>
    </div>
  );
}

export default App;
