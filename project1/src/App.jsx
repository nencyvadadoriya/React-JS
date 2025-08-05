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

        <section className="languages">
          <h3>Languages</h3>
          <ul className="list">
            <li>Hindi</li>
            <li>English</li>
            <li>Gujarati</li>
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

        <section className="projects">
          <h3>Projects</h3>
          <ul className="list">
            <li>
              <strong>Flight Ticket Management System API</strong>
              <p>
                Developed a RESTful API using Node.js  for managing flight
                schedules, bookings, cancellations, and seat allocations. Integrated
                MongoDB for database operations. Includes admin CRUD, authentication via
                JWT, and search filters.
              </p>
              <p>
                🔗 <a href="https://github.com/nencyvadadoriya/node-js/tree/master/project-8" target="_blank">GitHub Repository</a>
              </p>
              <p><strong>Technologies:</strong> Node.js, MongoDB, JWT, Multer</p>
            </li>
            <li>
              <strong>Admin Panel – Node.js, MongoDB</strong>
              <p>
                Designed and developed a secure admin panel with full authentication, session
                handling, file upload, and CRUD operations. Implemented MVC structure with EJS
                templates and MongoDB for dynamic data management. Includes password reset using OTP
                and admin profile management.
              </p>
              <p>
                🔗 <a href="https://github.com/nencyvadadoriya/node-js/tree/master/set-up-admin-penal" target="_blank">GitHub Repository</a>
              </p>
              <p><strong>Technologies:</strong> Node.js, MongoDB, Passport.js, EJS, Multer</p>
            </li>

          </ul>
        </section>


      </div>
    </div>
  );
}

