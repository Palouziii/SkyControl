import { useState } from "react";
import "../../css/PersonnelCard.css";

export default function PersonnelCard() {
  const [showForm, setShowForm] = useState(false);

  // Données factices basées sur ton MCD
  const [equipe] = useState([
    {
      id: "STAFF-01",
      nom: "Leclerc",
      prenom: "Marc",
      fonction: "Pilote",
      tel: "+33 6 00 11 22 33",
    },
    {
      id: "STAFF-02",
      nom: "Dubois",
      prenom: "Julie",
      fonction: "Hôtesse",
      tel: "+33 6 44 55 66 77",
    },
    {
      id: "STAFF-03",
      nom: "Moreau",
      prenom: "Alain",
      fonction: "Technicien",
      tel: "+33 6 88 99 00 11",
    },
    {
      id: "STAFF-04",
      nom: "Sartre",
      prenom: "Paul",
      fonction: "Steward",
      tel: "+33 7 12 34 56 78",
    },
  ]);

  return (
    <div className="container-fluid p-4">
      {/* Header avec Stat Personnel */}
      <header className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="h3 fw-bold text-uppercase tracking-tight">
            Gestion du Personnel
          </h1>
          <div className="d-flex gap-4 mt-2">
            <div className="stat-simple">
              <span className="text-muted small text-uppercase fw-bold">
                Effectif Total
              </span>
              <p className="h4 fw-black mb-0 text-primary">{equipe.length}</p>
            </div>
            <div className="stat-simple border-start ps-4">
              <span className="text-muted small text-uppercase fw-bold">
                En Service
              </span>
              <p className="h4 fw-black mb-0 text-success">Active</p>
            </div>
          </div>
        </div>
        <button
          className={`btn ${showForm ? "btn-secondary" : "btn-dark"} px-4 fw-bold shadow-sm`}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "ANNULER" : "+ AJOUTER MEMBRE"}
        </button>
      </header>

      {/* Formulaire d'ajout rapide */}
      {showForm && (
        <div className="card shadow-sm mb-5 border-0 animate-slide-down">
          <div className="card-header bg-primary text-white fw-bold">
            NOUVEAU COLLABORATEUR
          </div>
          <div className="card-body p-4">
            <form className="row g-3">
              <div className="col-md-3">
                <label className="form-label small fw-bold">NOM</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label small fw-bold">PRÉNOM</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label small fw-bold">FONCTION</label>
                <select className="form-select">
                  <option>Pilote</option>
                  <option>Co-pilote</option>
                  <option>Hôtesse / Steward</option>
                  <option>Technicien</option>
                  <option>Sécurité</option>
                </select>
              </div>
              <div className="col-md-3 d-flex align-items-end">
                <button type="submit" className="btn btn-primary w-100 fw-bold">
                  ENREGISTRER
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Tableau du Personnel */}
      <div className="card border-0 shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="ps-4">ID STAFF</th>
                <th>NOM / PRÉNOM</th>
                <th>FONCTION</th>
                <th>TÉLÉPHONE</th>
                <th className="text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {equipe.map((m) => (
                <tr key={m.id}>
                  <td className="ps-4 fw-bold text-secondary small">{m.id}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-initials me-3">
                        {m.prenom[0]}
                        {m.nom[0]}
                      </div>
                      <div>
                        <div className="fw-bold">{m.nom.toUpperCase()}</div>
                        <div className="text-muted small">{m.prenom}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`badge-role ${m.fonction.toLowerCase()}`}>
                      {m.fonction}
                    </span>
                  </td>
                  <td className="fw-mono small">{m.tel}</td>
                  <td className="text-center">
                    <button className="btn btn-outline-dark btn-sm fw-bold me-2">
                      ÉDITER
                    </button>
                    <button className="btn btn-outline-danger btn-sm fw-bold">
                      RETIRER
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
