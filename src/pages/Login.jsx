import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [role, setRole] = useState("victim");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (!mobile || !password) {
      alert("Please enter mobile number and password.");
      return;
    }

    if (role === "victim") {
      navigate("/victim-dashboard");
    }

    else if (role === "counsellor") {
      navigate("/counsellor-dashboard");
    }

    else if (role === "district") {
      navigate("/district-dashboard");
    }

    else if (role === "state") {
      navigate("/state-dashboard");
    }

    else if (role === "national") {
      navigate("/national-dashboard");
    }
  };


  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">

          <i className="fa-solid fa-brain"></i>

          <h1>MediAssistAI</h1>

          <p>
            Mental Health Monitoring Platform
          </p>

        </div>


        <h2>Login</h2>


        <div className="role-options">

          <button
            type="button"
            className={`role-option ${
              role === "victim" ? "active" : ""
            }`}
            onClick={() => setRole("victim")}
          >
            <i className="fa-solid fa-user"></i>
            <span>Victim</span>
          </button>


          <button
            type="button"
            className={`role-option ${
              role === "counsellor" ? "active" : ""
            }`}
            onClick={() => setRole("counsellor")}
          >
            <i className="fa-solid fa-user-doctor"></i>
            <span>Counsellor</span>
          </button>


          <button
            type="button"
            className={`role-option ${
              role === "district" ? "active" : ""
            }`}
            onClick={() => setRole("district")}
          >
            District
          </button>


          <button
            type="button"
            className={`role-option ${
              role === "state" ? "active" : ""
            }`}
            onClick={() => setRole("state")}
          >
            State
          </button>


          <button
            type="button"
            className={`role-option ${
              role === "national" ? "active" : ""
            }`}
            onClick={() => setRole("national")}
          >
            National
          </button>

        </div>


        <form onSubmit={handleLogin}>

          <div className="form-group">

            <label>Mobile Number</label>

            <input
              type="tel"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

          </div>


          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>


          <button className="auth-btn" type="submit">
            Login
          </button>

        </form>


        <div className="auth-bottom">

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </div>


        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Login;