import { NavLink } from "react-router-dom"; // On change Link par NavLink
import "../css/SideBar.css";
import "../css/Footer.css";

export default function Layout() {
  // N'oublie pas {children} pour afficher tes pages
  return (
    <div className="layout-container">
      <header className="sidebar-container shadow">
        <div className="d-flex align-items-center mb-4 ps-2">
          <div className="brand-icon-box me-3">
            <i className="bi bi-airplane-fill text-white fs-4"></i>
          </div>
          <div className="lh-1">
            <h5 className="m-0 fw-bold">SkyControl</h5>
            <small
              className="text-secondary fw-bold text-uppercase"
              style={{ fontSize: "10px", letterSpacing: "1px" }}
            >
              Airport Ops
            </small>
          </div>
        </div>

        <hr className="opacity-25" />

        <nav className="nav nav-pills flex-column mb-auto gap-2">
          {/* Utilise NavLink ici */}
          <NavLink to="/" className="nav-link">
            <i className="bi bi-grid-1x2 me-3"></i> Home
          </NavLink>
          <NavLink to="/avion" className="nav-link">
            <i className="bi bi-airplane me-3"></i> Avion
          </NavLink>
          <NavLink to="/billet" className="nav-link">
            <i className="bi bi-ticket-perforated me-3"></i> Billet
          </NavLink>
          <NavLink to="/passager" className="nav-link">
            <i className="bi bi-person me-3"></i> Passager
          </NavLink>
          <NavLink to="/personnel" className="nav-link">
            <i className="bi bi-people me-3"></i> Personnel
          </NavLink>
          <NavLink to="/vol" className="nav-link">
            <i className="bi bi-calendar-event me-3"></i> Vol
          </NavLink>
        </nav>

        <div
          className="mt-4 ps-2 opacity-50 small"
          style={{ fontSize: "12px" }}
        >
          &copy; SkyControl - 2026
        </div>
      </header>

      <div
        className="content-area d-flex flex-column"
        style={{ marginLeft: "280px", minHeight: "100vh" }}
      >
        <main className="flex-grow-1 p-4"></main>

        <footer className="footer-main mt-auto">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <div>
              <strong>SkyControl</strong>{" "}
              <span className="text-muted ms-2">| Gestion Aéroportuaire</span>
            </div>
            <div className="d-flex gap-4">
              <NavLink to="#" className="text-decoration-none text-muted">
                Support
              </NavLink>
              <NavLink to="#" className="text-decoration-none text-muted">
                Confidentialité
              </NavLink>
              <span className="text-secondary">v2.4</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
