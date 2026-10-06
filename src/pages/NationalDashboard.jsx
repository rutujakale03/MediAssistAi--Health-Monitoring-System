import { Link } from "react-router-dom";

function NationalDashboard() {

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
            <a href="#states">
              <i className="fa-solid fa-map"></i>
              <span>States</span>
            </a>
          </li>

          <li>
            <a href="#analytics">
              <i className="fa-solid fa-chart-line"></i>
              <span>Analytics</span>
            </a>
          </li>

          <li>
            <a href="#alerts">
              <i className="fa-solid fa-bell"></i>
              <span>Alerts</span>
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
            <h1>National Dashboard</h1>
            <p>
              National-level mental health monitoring
            </p>
          </div>

          <div className="profile-icon">
            <i className="fa-solid fa-landmark"></i>
          </div>

        </div>


        <div className="dashboard-grid">

          <div className="dashboard-card">
            <p>Total Cases</p>
            <h3>2.84M</h3>
          </div>

          <div className="dashboard-card">
            <p>High Risk Cases</p>
            <h3>86.4K</h3>
          </div>

          <div className="dashboard-card">
            <p>States / UTs</p>
            <h3>36</h3>
          </div>

          <div className="dashboard-card">
            <p>Interventions</p>
            <h3>742K</h3>
          </div>

        </div>


        <section
          className="dashboard-section"
          id="analytics"
        >

          <div className="section-title">
            <h2>National Distress Analytics</h2>
          </div>

          <div className="chart-placeholder">

            <i className="fa-solid fa-chart-area"></i>

            <p>
              National distress trends and risk prediction
              analytics will appear here.
            </p>

          </div>

        </section>


        <section
          className="dashboard-section"
          id="states"
        >

          <div className="section-title">
            <h2>State Overview</h2>
          </div>


          <div className="district-table">

            <div className="table-row table-header">
              <span>State</span>
              <span>Cases</span>
              <span>High Risk</span>
              <span>Status</span>
            </div>

            <div className="table-row">
              <span>State A</span>
              <span>82,400</span>
              <span>2,410</span>
              <span className="status-low">Stable</span>
            </div>

            <div className="table-row">
              <span>State B</span>
              <span>96,200</span>
              <span>3,810</span>
              <span className="status-medium">Monitor</span>
            </div>

            <div className="table-row">
              <span>State C</span>
              <span>74,900</span>
              <span>4,120</span>
              <span className="status-high">Attention</span>
            </div>

          </div>

        </section>


        <section
          className="dashboard-section"
          id="alerts"
        >

          <div className="system-alert">

            <i className="fa-solid fa-triangle-exclamation"></i>

            <div>

              <h3>
                System Alert
              </h3>

              <p>
                Elevated distress trend detected in selected
                regions. Further analysis and intervention
                monitoring required.
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default NationalDashboard;