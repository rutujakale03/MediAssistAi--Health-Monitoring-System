import { Link } from "react-router-dom";

function StateDashboard() {

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
            <a href="#districts">
              <i className="fa-solid fa-map"></i>
              <span>Districts</span>
            </a>
          </li>

          <li>
            <a href="#alerts">
              <i className="fa-solid fa-bell"></i>
              <span>Alerts</span>
            </a>
          </li>

          <li>
            <a href="#analytics">
              <i className="fa-solid fa-chart-line"></i>
              <span>Analytics</span>
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
            <h1>State Dashboard</h1>
            <p>State-level monitoring and analytics</p>
          </div>

          <div className="profile-icon">
            <i className="fa-solid fa-landmark"></i>
          </div>

        </div>


        <div className="dashboard-grid">

          <div className="dashboard-card">
            <p>Total Cases</p>
            <h3>18,642</h3>
          </div>

          <div className="dashboard-card">
            <p>High Risk</p>
            <h3>682</h3>
          </div>

          <div className="dashboard-card">
            <p>Districts</p>
            <h3>36</h3>
          </div>

          <div className="dashboard-card">
            <p>Interventions</p>
            <h3>5,426</h3>
          </div>

        </div>


        <section
          className="dashboard-section"
          id="districts"
        >

          <div className="section-title">
            <h2>District Overview</h2>
          </div>


          <div className="district-table">

            <div className="table-row table-header">
              <span>District</span>
              <span>Cases</span>
              <span>High Risk</span>
              <span>Status</span>
            </div>

            <div className="table-row">
              <span>District A</span>
              <span>4,320</span>
              <span>142</span>
              <span className="status-low">Stable</span>
            </div>

            <div className="table-row">
              <span>District B</span>
              <span>5,180</span>
              <span>221</span>
              <span className="status-medium">Monitor</span>
            </div>

            <div className="table-row">
              <span>District C</span>
              <span>3,910</span>
              <span>178</span>
              <span className="status-high">Attention</span>
            </div>

          </div>

        </section>


        <section
          className="dashboard-section"
          id="analytics"
        >

          <div className="section-title">
            <h2>State Analytics</h2>
          </div>

          <div className="chart-placeholder">

            <i className="fa-solid fa-chart-line"></i>

            <p>
              State-level distress trend visualization.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default StateDashboard;