import { Link } from "react-router-dom";

function CounsellorDashboard() {

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
            <a href="#alerts">
              <i className="fa-solid fa-bell"></i>
              <span>Alerts</span>
            </a>
          </li>

          <li>
            <a href="#cases">
              <i className="fa-solid fa-folder"></i>
              <span>Cases</span>
            </a>
          </li>

          <li>
            <a href="#interventions">
              <i className="fa-solid fa-user-doctor"></i>
              <span>Interventions</span>
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
            <h1>Counsellor Dashboard</h1>
            <p>
              Monitor cases and manage interventions
            </p>
          </div>

          <div className="profile-icon">
            <i className="fa-solid fa-user-doctor"></i>
          </div>

        </div>


        <div className="dashboard-grid">

          <div className="dashboard-card">
            <p>Active Cases</p>
            <h3>24</h3>
          </div>

          <div className="dashboard-card">
            <p>High Risk</p>
            <h3 className="danger-number">4</h3>
          </div>

          <div className="dashboard-card">
            <p>Pending Review</p>
            <h3>8</h3>
          </div>

          <div className="dashboard-card">
            <p>Interventions</p>
            <h3>31</h3>
          </div>

        </div>


        <section
          className="dashboard-section"
          id="alerts"
        >

          <div className="section-title">
            <h2>Priority Alerts</h2>
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

                <p>
                  Risk probability: 82%
                </p>

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

                <p>
                  Risk probability: 61%
                </p>

              </div>

            </div>

          </div>

        </section>


        <section
          className="dashboard-section"
          id="interventions"
        >

          <div className="section-title">
            <h2>Recent Intervention Activity</h2>
          </div>

          <div className="history-list">

            <div className="history-row">
              <strong>Case #MA1020</strong>
              <span>Follow-up Scheduled</span>
              <span className="history-status status-medium">
                Pending
              </span>
            </div>

            <div className="history-row">
              <strong>Case #MA1018</strong>
              <span>Victim Contacted</span>
              <span className="history-status status-low">
                Completed
              </span>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default CounsellorDashboard;