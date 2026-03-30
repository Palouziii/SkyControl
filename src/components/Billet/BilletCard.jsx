import { useState } from "react";
import "../../css/BilletCard.css";
import BilletService from "../../services/BilletService";

export default function BilletCard() {
  const [showAchat, setShowAchat] = useState(false);
  const billets = BilletService.getAll();

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 fw-bold text-dark text-uppercase">Billetterie</h1>
          <p className="text-muted small">
            Gestion administrative et émission de billets
          </p>
        </div>
        <button
          className={`btn ${showAchat ? "btn-secondary" : "btn-primary"} shadow-sm px-4 fw-bold`}
          onClick={() => setShowAchat(!showAchat)}
        >
          {showAchat ? "ANNULER" : "ACHETER UN BILLET"}
        </button>
      </div>

      {/* SECTION ACHAT CLIENT MODIFIÉE */}
      {showAchat && (
        <div className="card shadow-sm mb-5 border-0 animate__animated animate__fadeInDown">
          <div className="card-header bg-dark text-white fw-bold py-3">
            SÉLECTION DES OPTIONS DE VOYAGE
          </div>
          <div className="card-body p-4">
            <form className="row g-3">
              {/* Association Passager */}
              <div className="col-md-3">
                <label className="form-label fw-bold small text-uppercase">
                  Passager
                </label>
                <select className="form-select border-2">
                  <option>Choisir le passager...</option>
                </select>
              </div>
              {/* Association Vol */}
              <div className="col-md-3">
                <label className="form-label fw-bold small text-uppercase">
                  Vol
                </label>
                <select className="form-select border-2">
                  <option>Choisir le vol...</option>
                </select>
              </div>
              {/* Attribut Classe */}
              <div className="col-md-2">
                <label className="form-label fw-bold small text-uppercase">
                  Classe
                </label>
                <select className="form-select border-2">
                  <option>First</option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
              {/* Attribut Siège */}
              <div className="col-md-2">
                <label className="form-label fw-bold small text-uppercase">
                  Siège
                </label>
                <input
                  type="text"
                  className="form-control border-2"
                  placeholder="Ex: 12B"
                />
              </div>
              {/* Attribut Prix */}
              <div className="col-12 text-end mt-4">
                <button
                  type="submit"
                  className="btn btn-success px-5 fw-bold py-2"
                >
                  VALIDER L'ACHAT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TABLEAU GESTION ADMIN (Style original préservé) */}
      <div className="card border-0 shadow-sm rounded-3">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th className="ps-4 py-3">ID Billet</th>
              <th>Passager</th>
              <th>Vol</th>
              <th>Classe</th>
              <th>Siège</th>
              <th>Prix</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {billets.map((b) => (
              <tr key={b.id_billet}>
                <td className="ps-4 fw-bold text-primary">{b.id_billet}</td>
                <td>{b.passager}</td>
                <td>
                  <span className="badge bg-dark px-2">{b.vol}</span>
                </td>
                <td>
                  <span
                    className={`badge-classe-simple ${b.classe.toLowerCase()}`}
                  >
                    {b.classe}
                  </span>
                </td>
                <td className="fw-bold">{b.siege}</td>
                <td className="text-success fw-bold">{b.prix} €</td>
                <td className="text-center">
                  <button className="btn btn-outline-dark btn-sm fw-bold me-2">
                    MODIFIER
                  </button>
                  <button className="btn btn-outline-danger btn-sm fw-bold">
                    SUPPRIMER
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
