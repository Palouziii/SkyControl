import { useState } from "react";
import "../../css/BilletCard.css";
import BilletService from "../../services/BilletService";
import VolService from "../../services/VolService";

export default function BilletCard() {
  const [showAchat, setShowAchat] = useState(false);
  const billets = BilletService.getAll();
  const vols = VolService.getAll();

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

      {showAchat && (
        <div className="card shadow-sm mb-5 border-0 animate__animated animate__fadeInDown">
          <div className="card-header bg-dark text-white fw-bold py-3">
            SÉLECTION DES OPTIONS DE VOYAGE
          </div>
          <div className="card-body p-4">
            <form className="row g-4">
              <div className="col-md-3">
                <label className="label-form-prestige">NOM DU PASSAGER</label>
                <input
                  type="text"
                  className="form-control-prestige"
                  placeholder="Ex: MARTIN"
                />
              </div>
              <div className="col-md-3">
                <label className="label-form-prestige">PRÉNOM</label>
                <input
                  type="text"
                  className="form-control-prestige"
                  placeholder="Ex: Jean"
                />
              </div>
              <div className="col-md-3">
                <label className="label-form-prestige">NATIONALITÉ</label>
                <input
                  type="text"
                  className="form-control-prestige"
                  placeholder="Ex: FRANCE"
                />
              </div>
              <div className="col-md-3">
                <label className="label-form-prestige">SÉLECTION DU VOL</label>
                <select className="form-control-prestige">
                  <option value="">Choisir un vol...</option>
                  {vols.map((vol) => (
                    <option key={vol.ref_vol} value={vol.ref_vol}>
                      {vol.ref_vol} - {vol.depart.split(" ")[0]} /{" "}
                      {vol.arrivé.split(" ")[0]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <label className="label-form-prestige">CLASSE</label>
                <select className="form-control-prestige">
                  <option>First Class</option>
                  <option>Business Class</option>
                  <option>Economy</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="label-form-prestige">FRANCHISE BAGAGE</label>
                <select className="form-control-prestige" name="bagage">
                  <option value="">Sélectionner le poids...</option>
                  <option value="12">Cabine uniquement (≤ 12 Kg)</option>
                  <option value="15">Soute Light (≤ 15 Kg)</option>
                  <option value="23">Soute Standard (≤ 23 Kg)</option>
                  <option value="32">Soute Premium (≤ 32 Kg)</option>
                  <option value="extra">Excédent Hors Gabarit (≥ 32 Kg)</option>
                </select>
              </div>
              <div className="col-md-2">
                <label className="label-form-prestige">SIÈGE</label>
                <input
                  type="text"
                  className="form-control-prestige"
                  placeholder="Ex: 12A"
                />
              </div>
              <div className="col-md-8 d-flex align-items-end">
                <button
                  type="submit"
                  className="btn btn-primary px-5 py-2 fw-bold rounded-3 shadow-sm"
                >
                  VALIDER L'ACHAT ET ÉMETTRE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TABLEAU GESTION ADMIN (Style original préservé) */}
      <div className="card border-0 shadow-sm rounded-3">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light rounded">
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
            {billets.map((billet) => (
              <tr key={billet.ref_billet}>
                <td className="ps-4 fw-bold text-primary">
                  {billet.ref_billet}
                </td>
                <td>{billet.passager}</td>
                <td>
                  <span className="badge bg-dark px-2">{billet.vol}</span>
                </td>
                <td>
                  <span
                    className={`badge-classe-simple ${billet.classe.toLowerCase()}`}
                  >
                    {billet.classe}
                  </span>
                </td>
                <td className="fw-bold">{billet.siege}</td>
                <td className="text-success fw-bold">{billet.prix} €</td>
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
