import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isValidIndianMobile, isValidPersonName } from "../utils/authValidation";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    language: "English",
    consent: false
  });
  const [errors, setErrors] = useState({});
  const [formAlert, setFormAlert] = useState("");

  const validateField = (name, value) => {
    if (name === "name") {
      if (!value.trim()) return "Enter your full name.";
      if (!isValidPersonName(value)) {
        return "Use letters, spaces, apostrophes, periods, or hyphens only.";
      }
    }

    if (name === "mobile") {
      if (!value.trim()) return "Enter your mobile number.";
      if (!isValidIndianMobile(value)) {
        return "Enter a valid 10-digit Indian mobile number.";
      }
    }

    if (name === "language" && !["English", "Hindi", "Marathi"].includes(value)) {
      return "Choose a language from the list.";
    }

    if (name === "consent" && !value) {
      return "Consent is required to create an account.";
    }

    return "";
  };

  const validateForm = (values) => ({
    name: validateField("name", values.name),
    mobile: validateField("mobile", values.mobile),
    language: validateField("language", values.language),
    consent: validateField("consent", values.consent),
  });


  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox"
      ? checked
      : name === "mobile"
        ? value.replace(/\D/g, "").slice(0, 10)
        : value;

    setFormData((current) => ({ ...current, [name]: fieldValue }));
    setErrors((current) => ({
      ...current,
      [name]: validateField(name, fieldValue),
    }));

  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    setErrors((current) => ({
      ...current,
      [name]: validateField(name, type === "checkbox" ? checked : value),
    }));
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    const nextErrors = validateForm(formData);

    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      setFormAlert("Please correct the highlighted fields before creating your account.");
      return;
    }

    setErrors({});
    setFormAlert("");
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


        <form onSubmit={handleSubmit} noValidate>
          {formAlert && <p className="form-alert" role="alert">{formAlert}</p>}

          <div className="form-group">

            <label htmlFor="register-name">
              Full Name
            </label>

            <input
              id="register-name"
              type="text"
              name="name"
              autoComplete="name"
              maxLength={100}
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "register-name-error" : undefined}
            />
            {errors.name && <small className="form-error" id="register-name-error" role="alert">{errors.name}</small>}

          </div>


          <div className="form-group">

            <label htmlFor="register-mobile">
              Mobile Number
            </label>

            <input
              id="register-mobile"
              type="tel"
              name="mobile"
              inputMode="numeric"
              autoComplete="tel"
              maxLength={10}
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.mobile)}
              aria-describedby={errors.mobile ? "register-mobile-error" : undefined}
            />
            {errors.mobile && <small className="form-error" id="register-mobile-error" role="alert">{errors.mobile}</small>}

          </div>


          <div className="form-group">

            <label htmlFor="register-language">
              Preferred Language
            </label>

            <select
              id="register-language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.language)}
              aria-describedby={errors.language ? "register-language-error" : undefined}
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
            {errors.language && <small className="form-error" id="register-language-error" role="alert">{errors.language}</small>}

          </div>


          <div className="consent-box">

            <input
              type="checkbox"
              id="register-consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "register-consent-error" : undefined}
            />

            <label htmlFor="register-consent">
              I provide consent for periodic interactions and
              AI-assisted mental health monitoring.
            </label>

          </div>
          {errors.consent && <small className="form-error" id="register-consent-error" role="alert">{errors.consent}</small>}


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