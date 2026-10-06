import { Link } from "react-router-dom";

function DistrictDashboard() {

  return (
    <div className="dashboard-page">

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
            <a href="#cases">
              <i className="fa-solid fa-folder"></i>
              <span>Cases</span>
            </a>
          </li>

          <li>
            <a href="#alerts">
              <i className="fa-solid fa-bell"></i>
              <span>Alerts</span>
            </a>
          </li>

          <li>
            <a href="#resources">
              <i className="fa-solid fa-users"></i>
              <span>Resources</span>
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


      <main className="dashboard-main">

        <div className="dashboard-header">

          <div>
            <h1>District Dashboard</h1>
            <p>District-level mental health monitoring</p>
          </div>

          <div className="profile-icon">
            <i className="fa-solid fa-building"></i>
          </div>

        </div>


        <div className="dashboard-grid">

          <div className="dashboard-card">
            <p>Total Cases</p>
            <h3>1,248</h3>
          </div>

          <div className="dashboard-card">
            <p>High Risk Cases</p>
            <h3>47</h3>
          </div>

          <div className="dashboard-card">
            <p>Active Counsellors</p>
            <h3>18</h3>
          </div>

          <div className="dashboard-card">
            <p>Interventions</p>
            <h3>326</h3>
          </div>

        </div>


        <section className="dashboard-section">

          <div className="section-title">
            <h2>District Distress Analytics</h2>
          </div>

          <div className="chart-placeholder">

            <i className="fa-solid fa-chart-column"></i>

            <p>
              Distress trend visualization will appear here.
            </p>

          </div>

        </section>


        <section
          className="dashboard-section"
          id="alerts"
        >

          <div className="section-title">
            <h2>Recent Alerts</h2>
          </div>

          <div className="alert-list">

            <div className="alert-card high">
              <div className="alert-icon">
                <i className="fa-solid fa-triangle-exclamation"></i>
              </div>

              <div className="alert-content">
                <span className="alert-label">
                  HIGH RISK
                </span>

                <h4>Case #MA1024</h4>

                <p>Immediate counsellor review required.</p>
              </div>
            </div>


            <div className="alert-card medium">
              <div className="alert-icon">
                <i className="fa-solid fa-circle-exclamation"></i>
              </div>

              <div className="alert-content">
                <span className="alert-label">
                  MEDIUM RISK
                </span>

                <h4>Case #MA1031</h4>

                <p>Follow-up monitoring recommended.</p>
              </div>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default DistrictDashboard;