import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; 

const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  return (
    <div className="Login-main">
      <div className="Log-in container">
        <div className="Log-in center-container">
          <div className="Log-in card">
            <h2 id="MainLogin"
            className="Log-in text-center mb-4">Sign In As</h2>

            <Link to="/AdminLogin" className="Log-in button admin-button">
              <i className="Log-in fas fa-users-cog"></i> Admin
            </Link>

            <Link to="/UserLogin" className="Log-in button user-button" onClick={() => setModalIsOpen(true)}>
              <i className="Log-in fas fa-user"></i> User
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
