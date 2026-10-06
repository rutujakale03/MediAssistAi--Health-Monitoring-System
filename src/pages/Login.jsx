import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isValidIndianMobile } from "../utils/authValidation";

function Login() {

  const navigate = useNavigate();

  const [role, setRole] = useState("victim");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [formAlert, setFormAlert] = useState("");

  const validateMobile = (value) => {
    if (!value.trim()) return "Enter your mobile number.";
    if (!isValidIndianMobile(value)) {
      return "Enter a valid 10-digit Indian mobile number.";
    }
    return "";
  };

  const validatePassword = (value) =>
    value.trim() ? "" : "Enter your password.";

  const handleLogin = (e) => {

    e.preventDefault();
    const nextErrors = {
      mobile: validateMobile(mobile),
      password: validatePassword(password),
    };
    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      setFormAlert("Please correct the highlighted fields before logging in.");
      return;
    }

    setErrors({});
    setFormAlert("");

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


        <form onSubmit={handleLogin} noValidate>
          {formAlert && <p className="form-alert" role="alert">{formAlert}</p>}

          <div className="form-group">

            <label htmlFor="login-mobile">Mobile Number</label>

            <input
              id="login-mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              maxLength={10}
              placeholder="Enter mobile number"
              value={mobile}
              aria-invalid={Boolean(errors.mobile)}
              aria-describedby={errors.mobile ? "login-mobile-error" : undefined}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                setMobile(value);
                setErrors((current) => ({
                  ...current,
                  mobile: validateMobile(value),
                }));
              }}
            />
            {errors.mobile && <small className="form-error" id="login-mobile-error" role="alert">{errors.mobile}</small>}

          </div>


          <div className="form-group">

            <label htmlFor="login-password">Password</label>

            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter password"
              value={password}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "login-password-error" : undefined}
              onChange={(e) => {
                const value = e.target.value;
                setPassword(value);
                setErrors((current) => ({
                  ...current,
                  password: validatePassword(value),
                }));
              }}
            />
            {errors.password && <small className="form-error" id="login-password-error" role="alert">{errors.password}</small>}

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