import { useState } from "react";
import "../../css/PassagerCard.css";
import PassagerService from "../../services/PassagerService";

export default function PassagerCard() {
  const [showAdd, setShowAdd] = useState(false);
  const passagers = PassagerService.getAll();

  return (
    <div className="container-fluid p-4">
      {/* Header avec Statistique Simple */}
      <header className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="h3 fw-bold text-uppercase">Gestion des Passagers</h1>
          <div className="d-flex gap-4 mt-2">
            <div className="stat-simple">
              <span className="text-muted small text-uppercase fw-bold">
                Total Passagers
              </span>
              <p className="h4 fw-black mb-0">{passagers.length}</p>
            </div>
            <div className="stat-simple border-start ps-4">
              <span className="text-muted small text-uppercase fw-bold">
                Nationalités
              </span>
              <p className="h4 fw-black mb-0">12</p>
            </div>
          </div>
        </div>
        <button
          className={`btn ${showAdd ? "btn-secondary" : "btn-primary"} px-4 fw-bold shadow-sm`}
          onClick={() => setShowAdd(!showAdd)}
        >
          {showAdd ? "ANNULER" : "+ NOUVEAU PASSAGER"}
        </button>
      </header>

      {/* Formulaire d'ajout (Apparaît au clic) */}
      {showAdd && (
        <div className="card shadow-sm mb-5 border-0 animate__animated animate__fadeIn">
          <div className="card-header bg-dark text-white fw-bold">
            ENREGISTRER UN PASSAGER
          </div>
          <div className="card-body p-4">
            <form className="row g-3">
              <div className="col-md-4">
                <label className="form-label small fw-bold">NOM</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nom du passager"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label small fw-bold">PRÉNOM</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Prénom"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label small fw-bold">NATIONALITÉ</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: Française"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-bold">E-MAIL</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="adresse@mail.com"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label small fw-bold">TÉLÉPHONE</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="+33..."
                />
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button type="submit" className="btn btn-success w-100 fw-bold">
                  VALIDER
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Tableau des Passagers */}
      <div className="card border-0 shadow-sm rounded-3">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="ps-4">ID</th>
                <th>NOM / PRÉNOM</th>
                <th>NATIONALITÉ</th>
                <th>CONTACT</th>
                <th className="text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {passagers.map((passager) => (
                <tr key={passager.id_passsager}>
                  <td className="ps-4 fw-bold text-primary">
                    {passager.id_passsager}
                  </td>
                  <td>
                    <div className="fw-bold">{passager.nom.toUpperCase()}</div>
                    <div className="text-muted small">{passager.prenom}</div>
                  </td>
                  <td>{passager.nationalite}</td>
                  <td>
                    <div className="small">
                      <i className="bi bi-envelope me-2"></i>
                      {passager.mail}
                    </div>
                    <div className="small text-muted">
                      <i className="bi bi-telephone me-2"></i>
                      {passager.tel}
                    </div>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-outline-dark btn-sm fw-bold me-2 px-3">
                      ÉDITER
                    </button>
                    <button className="btn btn-outline-danger btn-sm fw-bold px-3">
                      SUPPRIMER
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
