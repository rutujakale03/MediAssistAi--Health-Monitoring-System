import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-container">

          <Link to="/" className="logo">
            <i className="fa-solid fa-brain"></i>
            MediAssistAI
          </Link>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>

            <Link to="/login" className="nav-login">
              Login
            </Link>

            <Link to="/register" className="nav-register">
              Get Started
            </Link>
          </div>

        </div>
      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <span className="hero-badge">
              AI-POWERED MENTAL HEALTH MONITORING
            </span>

            <h1>
              Supporting Victims Through
              <span> Continuous Mental Health Monitoring</span>
            </h1>

            <p>
              An AI-powered platform that continuously monitors
              psychological distress, predicts risk levels and
              enables timely intervention for victims of atrocities.
            </p>

            <div className="hero-buttons">

              <Link to="/register" className="primary-btn">
                Start Monitoring
              </Link>

              <a href="#how-it-works" className="secondary-btn">
                Learn More
              </a>

            </div>

          </div>


          {/* AI CARD */}
          <div className="hero-card">

            <div className="hero-card-icon">
              <img src="/ai-distress-monitoring.png" alt="" />
            </div>

            <h3>AI Distress Monitoring</h3>

            <p>
              AI analyses interactions, emotions, sentiment and
              behavioural patterns to identify changes in
              psychological distress.
            </p>

            <div className="monitoring-status">
              <span className="status-dot"></span>

              Continuous Monitoring Active
            </div>

            <div className="demo-score">

              <div>
                <span>Dynamic Distress Score</span>
                <strong>42</strong>
              </div>

              <div className="score-progress">
                <div></div>
              </div>

              <small>Moderate Risk</small>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="features" id="features">

        <div className="section-title">

          <span className="small-heading">
            CORE CAPABILITIES
          </span>

          <h2>Intelligent Mental Health Monitoring</h2>

          <p>
            The system combines AI technologies to continuously
            understand and monitor victim well-being.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              <img src="/multilingual-support.png" alt="" />
            </div>

            <h3>Multilingual Interaction</h3>

            <p>
              Supports interactions through preferred languages
              using chatbot, web, mobile, SMS and IVRS channels.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <img src="/emotion-sentiment-analysis.png" alt="" />
            </div>

            <h3>Emotion & Sentiment Analysis</h3>

            <p>
              NLP-based analysis identifies sentiment, emotions
              and changes in communication patterns.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <img src="/dynamic-distress-score.png" alt="" />
            </div>

            <h3>Dynamic Distress Score</h3>

            <p>
              Generates a continuously updated distress score
              using longitudinal victim interactions.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <img src="/risk-prediction.avif" alt="" />
            </div>

            <h3>Risk Prediction & Alerts</h3>

            <p>
              Predictive models identify high-risk cases and
              trigger alerts for counsellor intervention.
            </p>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="how-it-works" id="how-it-works">

        <div className="section-title">

          <span className="small-heading">
            SYSTEM WORKFLOW
          </span>

          <h2>How MediAssistAI Works</h2>

        </div>


        <div className="steps">

          <div className="step">

            <div className="step-number">1</div>

            <h3>Register</h3>

            <p>
              Victim registers and provides preferred language
              and consent for monitoring.
            </p>

          </div>


          <div className="step">

            <div className="step-number">2</div>

            <h3>Periodic Check-in</h3>

            <p>
              Victim interacts through chatbot, web, mobile,
              SMS or IVRS.
            </p>

          </div>


          <div className="step">

            <div className="step-number">3</div>

            <h3>AI Analysis</h3>

            <p>
              Text, voice and behavioural responses are analysed
              using AI models.
            </p>

          </div>


          <div className="step">

            <div className="step-number">4</div>

            <h3>Intervention</h3>

            <p>
              High-risk cases generate alerts and enable
              counsellor intervention.
            </p>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section className="about" id="about">

        <div className="about-container">

          <div className="about-content">

            <span className="small-heading">
              ABOUT THE SYSTEM
            </span>

            <h2>
              From Monitoring to Timely Support
            </h2>

            <p>
              Victims of atrocities may experience prolonged
              psychological distress due to threats, intimidation,
              repeated court appearances, investigation delays,
              social challenges and rehabilitation difficulties.
            </p>

            <p>
              MediAssistAI provides continuous mental health
              monitoring throughout the investigation, trial,
              rehabilitation and compensation process.
            </p>

            <ul className="about-list">

              <li>
                <i className="fa-solid fa-check"></i>
                Continuous victim monitoring
              </li>

              <li>
                <i className="fa-solid fa-check"></i>
                AI-based distress prediction
              </li>

              <li>
                <i className="fa-solid fa-check"></i>
                Early warning alerts
              </li>

              <li>
                <i className="fa-solid fa-check"></i>
                Counsellor intervention
              </li>

              <li>
                <i className="fa-solid fa-check"></i>
                Multilingual support
              </li>

            </ul>

          </div>


          <div className="about-box">

            <i className="fa-solid fa-shield-heart"></i>

            <h3>
              Privacy & Consent
            </h3>

            <p>
              Victim information should be handled with strong
              privacy, consent and access-control mechanisms.
            </p>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-container">

          <div>
            <h3>
              <i className="fa-solid fa-brain"></i>
              MediAssistAI
            </h3>

            <p>
              AI-powered dynamic mental health monitoring and
              distress prediction system.
            </p>
          </div>

          <div>
            <h3>Platform</h3>

            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>

          <div>
            <h3>Support</h3>

            <p>
              AI-assisted monitoring does not replace qualified
              mental health professionals.
            </p>
          </div>

        </div>


        
      </footer>

    </div>
  );
}

export default Home;