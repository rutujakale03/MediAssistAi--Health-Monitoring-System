import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    language: "English",
    consent: false
  });


  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.mobile
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (!formData.consent) {
      alert("Please provide consent for mental health monitoring.");
      return;
    }

    alert("Registration successful!");

    navigate("/victim-dashboard");

  };


  return (
    <div className="auth-page">

      <div className="auth-card register-card">

        <div className="auth-logo">

          <i className="fa-solid fa-brain"></i>

          <h1>MediAssistAI</h1>

          <p>
            Victim Registration
          </p>

        </div>


        <h2>Create Account</h2>


        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />

          </div>


          <div className="form-group">

            <label>
              Mobile Number
            </label>

            <input
              type="tel"
              name="mobile"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
            />

          </div>


          <div className="form-group">

            <label>
              Preferred Language
            </label>

            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
            >

              <option value="English">
                English
              </option>

              <option value="Hindi">
                Hindi
              </option>

              <option value="Marathi">
                Marathi
              </option>

            </select>

          </div>


          <div className="consent-box">

            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />

            <span>
              I provide consent for periodic interactions and
              AI-assisted mental health monitoring.
            </span>

          </div>


          <button
            type="submit"
            className="auth-btn"
          >
            Create Account
          </button>

        </form>


        <div className="auth-bottom">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </div>


        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Register;