import { useState } from "react";
import { Link } from "react-router-dom";

function VictimDashboard() {

  const [checkin, setCheckin] = useState("");

  const analyzeCheckin = () => {

    if (!checkin.trim()) {
      alert("Please describe how you are feeling.");
      return;
    }

    alert(
      "Your response has been submitted for AI-assisted analysis."
    );
  };


  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="sidebar-logo">

          <i className="fa-solid fa-brain"></i>

          <span>MediAssistAI</span>

        </div>


        <ul className="sidebar-menu">

          <li>
            <a href="#dashboard" className="active">
              <i className="fa-solid fa-house"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li>
            <a href="#checkin">
              <i className="fa-solid fa-comment"></i>
              <span>Check-in</span>
            </a>
          </li>

          <li>
            <a href="#history">
              <i className="fa-solid fa-clock-rotate-left"></i>
              <span>History</span>
            </a>
          </li>

          <li>
            <a href="#support">
              <i className="fa-solid fa-headset"></i>
              <span>Support</span>
            </a>
          </li>

          <li>
            <Link to="/">
              <i className="fa-solid fa-right-from-bracket"></i>
              <span>Logout</span>
            </Link>
          </li>

        </ul>

      </aside>


      {/* MAIN */}

      <main className="dashboard-main">

        <div className="dashboard-header">

          <div>
            <h1>Welcome to MediAssistAI</h1>

            <p>
              Your mental well-being monitoring dashboard
            </p>
          </div>

          <div className="profile-icon">
            <i className="fa-solid fa-user"></i>
          </div>

        </div>


        {/* SUMMARY CARDS */}

        <div className="dashboard-grid">

          <div className="dashboard-card score-card">

            <div className="card-top">

              <div>
                <p>Current Distress Level</p>
                <h3>42</h3>
              </div>

              <div className="card-icon">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>

            </div>

            <strong className="score-value">
              Moderate
            </strong>

            <div className="progress-bar">
              <div className="progress-value"></div>
            </div>

          </div>


          <div className="dashboard-card">

            <div className="card-top">

              <div>
                <p>Last Check-in</p>
                <h3>Today</h3>
              </div>

              <div className="card-icon">
                <i className="fa-solid fa-calendar-check"></i>
              </div>

            </div>

            <p>10:30 AM</p>

          </div>


          <div className="dashboard-card">

            <div className="card-top">

              <div>
                <p>Monitoring Status</p>
                <h3>Active</h3>
              </div>

              <div className="card-icon">
                <i className="fa-solid fa-shield-heart"></i>
              </div>

            </div>

            <p>Continuous monitoring</p>

          </div>


          <div className="dashboard-card">

            <div className="card-top">

              <div>
                <p>Risk Trend</p>
                <h3>Stable</h3>
              </div>

              <div className="card-icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>

            </div>

            <p>Based on recent check-ins</p>

          </div>

        </div>


        {/* CHECK-IN */}

        <section className="dashboard-section" id="checkin">

          <div className="section-title">

            <div>
              <h2>Daily Well-being Check-in</h2>

              <p>
                Tell us how you are feeling today.
              </p>
            </div>

          </div>


          <textarea
            className="checkin-textarea"
            placeholder="Describe your feelings, concerns or experiences..."
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
          />


          <button
            className="dashboard-btn"
            onClick={analyzeCheckin}
          >
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            Analyze My Check-in
          </button>


          <div className="dashboard-warning">

            <i className="fa-solid fa-circle-info"></i>

            Your responses are intended for AI-assisted
            monitoring and should not be considered a clinical
            diagnosis.

          </div>

        </section>


        {/* HISTORY */}

        <section
          className="dashboard-section"
          id="history"
        >

          <div className="section-title">
            <h2>Recent Monitoring History</h2>
          </div>


          <div className="history-list">

            <div className="history-row">
              <strong>Today</strong>
              <span>Distress Score: 42</span>
              <span className="history-status status-medium">
                Moderate
              </span>
            </div>

            <div className="history-row">
              <strong>Yesterday</strong>
              <span>Distress Score: 29</span>
              <span className="history-status status-low">
                Low
              </span>
            </div>

            <div className="history-row">
              <strong>2 Days Ago</strong>
              <span>Distress Score: 25</span>
              <span className="history-status status-low">
                Low
              </span>
            </div>

          </div>

        </section>


        {/* SUPPORT */}

        <section
          className="dashboard-section"
          id="support"
        >

          <div className="system-alert">

            <i className="fa-solid fa-headset"></i>

            <div>

              <h3>Need Support?</h3>

              <p>
                If you are experiencing severe distress,
                please contact your assigned counsellor or
                appropriate emergency support service.
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default VictimDashboard;