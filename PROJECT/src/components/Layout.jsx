import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../css/SideBar.css";
import "../css/Footer.css";

export default function Layout({ children }) {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="layout-container">
      <header className="sidebar-container shadow">
        <div className="d-flex align-items-center mb-4 ps-2">
          <div className="brand-icon-box me-3">
            <i className="bi bi-bezier2 text-white fs-4"></i>
          </div>
          <div className="lh-1">
            <h5 className="m-0 fw-bold">SkyControl Paris</h5>
            <small className="text-secondary fw-bold text-uppercase">
              Airport
            </small>
          </div>
        </div>

        <hr className="opacity-25" />

        {/* Infos utilisateur connecté */}
        <div className="px-2 mb-3">
          <div className="text-white-50 small text-uppercase" style={{ fontSize: "0.7rem", letterSpacing: "1px" }}>
            Connecté en tant que
          </div>
          <div className="text-white fw-bold" style={{ fontSize: "0.85rem" }}>
            {user?.prenom || user?.login}
          </div>
          <span
            className={`badge mt-1 ${isAdmin ? "bg-warning text-dark" : "bg-secondary"}`}
            style={{ fontSize: "0.65rem" }}
          >
            {user?.role}
          </span>
        </div>

        <hr className="opacity-25" />

        <nav className="nav nav-pills flex-column mb-auto gap-2">
          <NavLink to="/" className="nav-link">
            <i className="bi bi-grid-1x2 me-3"></i> Home
          </NavLink>
          <NavLink to="/vol" className="nav-link">
            <i className="bi bi-calendar-event me-3"></i> Vols
          </NavLink>
          <NavLink to="/billet" className="nav-link">
            <i className="bi bi-ticket-perforated me-3"></i> Billets
          </NavLink>
          <NavLink to="/avion" className="nav-link">
            <i className="bi bi-airplane me-3"></i> Avions
          </NavLink>
          <NavLink to="/passager" className="nav-link">
            <i className="bi bi-person me-3"></i> Passagers
          </NavLink>
          {isAdmin && (
            <NavLink to="/personnel" className="nav-link">
              <i className="bi bi-people me-3"></i> Personnels
            </NavLink>
          )}
        </nav>

        <hr className="opacity-25" />

        <button
          onClick={handleLogout}
          className="btn btn-outline-danger btn-sm w-100 fw-bold"
        >
          <i className="bi bi-box-arrow-right me-2"></i> Déconnexion
        </button>

        <div
          className="mt-4 ps-2 opacity-50 small"
          style={{ fontSize: "12px" }}
        >
          &copy; SkyControl - 2026
        </div>
      </header>

      <div className="content-area d-flex flex-column">
        <main className="flex-grow-1 p-4">{children}</main>

        <footer className="footer-main mt-auto">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <div>
              <strong>SkyControl</strong>{" "}
              <span className="text-muted ms-2">| Gestion Aéroportuaire</span>
            </div>
            <div className="d-flex gap-4">
              <NavLink to="#" className="text-decoration-none text-muted">
                Copyright © 2026 Loan GASS 
              </NavLink>
              <span className="text-secondary"> v26.7</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
