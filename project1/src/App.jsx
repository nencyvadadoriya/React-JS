import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="resume-container">
      <div className="left-side">
        <div className="profile-pic">
          <img
            src="https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg"
            alt="Nency Vadadoriya"
          />
        </div>
        <h2 className="name">Nency Vadadoriya</h2>
        <p className="title">Full Stack Developer</p>

        <section className="contact">
          <h3>Contact</h3>
          <ul className="list">
            <li>☎ +91 9023582238</li>
            <li>✉ vadadoriyanency8@gmail.com</li>
            <li>
              ⌨ <a href="https://github.com/nencyvadadoriya" target="_blank">GitHub</a>
            </li>
            <li>
              🔗 <a href="https://www.linkedin.com/in/nency-vadadoriya-3969052ba/" target="_blank">LinkedIn</a>
            </li>
            <li>📌 Surat, Gujarat</li>
          </ul>
        </section>

        <section className="skills">
          <h3>Skills</h3>
          <ul className="list">
            <li>
              <strong>Web Technologies:</strong>
              <br /> HTML, CSS, Bootstrap, jQuery, Media
            </li>
            <li>
              <strong>API & Integration:</strong>
              <br /> RESTful APIs, JWT Authentication
            </li>
            <li>
              <strong>Backend & Frameworks:</strong>
              <br /> Node.js
            </li>
            <li>
              <strong>Programming Languages:</strong> C, JavaScript
            </li>
            <li>
              <strong>Database:</strong> MongoDB
            </li>
          </ul>
        </section>
      </div>

      <div className="right-side">
        <section className="about">
          <h3>Profile</h3>
          <ul className="list">
            <li>
              I'm a Full Stack Developer passionate about building scalable web
              applications with clean, efficient code. Experienced in frontend
              and backend using HTML, CSS, JavaScript, Bootstrap, jQuery,
              Node.js. Skilled in problem-solving, teamwork, and time
              management.
            </li>
          </ul>
        </section>

        <section className="education">
          <h3>Education</h3>
          <ul className="edu-item">
            <li>
              <strong>Bachelor of Computer Applications:</strong>
              <br /> Swarnim Startup & Innovation University, Gandhinagar
            </li>
            <li>
              <strong>Higher Secondary Certificate:</strong>
              <br /> S.M. Vaghasiya English Medium Higher Secondary School,
              Amreli
            </li>
          </ul>
        </section>

        <section className="skills">
          <h3>Soft Skills</h3>
          <ul className="list">
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Team Collaboration</li>
            <li>Quick Learner</li>
          </ul>
        </section>

        <section className="languages">
          <h3>Languages</h3>
          <ul className="list">
            <li>Hindi</li>
            <li>English</li>
            <li>Gujarati</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

