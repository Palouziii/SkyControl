import { useState } from "react"; // Ajout de useState
import avionService from "../../services/AvionService";
import "../../css/AvionCard.css";

export default function AvionCard() {
  // On initialise les avions avec les données du service
  const [avions, setAvions] = useState(avionService.getAll());

  // États pour la gestion du formulaire
  const [showAdd, setShowAdd] = useState(false);
  const [newAvion, setNewAvion] = useState({
    immatriculation: "",
    modele: "",
    capacite: "",
    compagnie: "",
  });

  // Fonction pour gérer les changements dans les inputs
  const handleChange = (e) => {
    setNewAvion({ ...newAvion, [e.target.name]: e.target.value });
  };

  // Fonction pour ajouter l'avion
  const handleAddAvion = (e) => {
    e.preventDefault();
    // On ajoute le nouvel avion à la liste existante
    const updatedFleet = [...avions, newAvion];
    setAvions(updatedFleet);

    // Reset du formulaire et fermeture
    setNewAvion({
      immatriculation: "",
      modele: "",
      capacite: "",
      compagnie: "",
    });
    setShowAdd(false);

    // Optionnel : avionService.save(newAvion) si tu as une méthode de sauvegarde
  };

  return (
    <div className="avion-page-container rounded">
      <header className="fleet-header d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="fw-black text-uppercase tracking-tighter">
            Gestion Flotte
          </h1>
          <p className="text-secondary">
            Actuellement {avions.length} appareils en opération active
          </p>
        </div>
        {/* Le bouton déclenche l'affichage du formulaire */}
        <button className="btn-premium" onClick={() => setShowAdd(!showAdd)}>
          <i className={`bi bi-${showAdd ? "x-lg" : "plus-lg"}`}></i>
          {showAdd ? " Annuler" : " Nouvel Appareil"}
        </button>
      </header>

      {/* Formulaire d'Ajout Style Prestige */}
      {showAdd && (
        <div className="card shadow-sm mb-5 border-0 animate-slide-down bg-white rounded-4 overflow-hidden">
          <div className="card-header bg-dark text-white fw-bold py-3 px-4">
            ENREGISTRER UN NOUVEL APPAREIL
          </div>
          <div className="card-body p-4">
            <form className="row g-3" onSubmit={handleAddAvion}>
              <div className="col-md-3">
                <label className="label-form-prestige">IMMATRICULATION</label>
                <input
                  name="immatriculation"
                  type="text"
                  className="form-control-prestige"
                  placeholder="Ex: F-GSPQ"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3">
                <label className="label-form-prestige">MODÈLE</label>
                <input
                  name="modele"
                  type="text"
                  className="form-control-prestige"
                  placeholder="Ex: Airbus A350"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3">
                <label className="label-form-prestige">COMPAGNIE</label>
                <input
                  name="compagnie"
                  type="text"
                  className="form-control-prestige"
                  placeholder="Ex: Air France"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3">
                <label className="label-form-prestige">CAPACITÉ (PLACES)</label>
                <input
                  name="capacite"
                  type="number"
                  className="form-control-prestige"
                  placeholder="Ex: 320"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 text-end mt-4">
                <button
                  type="submit"
                  className="btn btn-primary px-5 py-2 fw-bold rounded-3 shadow-sm"
                >
                  VALIDER L'AJOUT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Grille des cartes */}
      <div className="fleet-grid">
        {avions.map((avion) => (
          <div className="fleet-card" key={avion.immatriculation}>
            <div className="fleet-card-inner">
              <div className="card-top">
                <div className="compagnie-tag">{avion.compagnie}</div>
                <div className="reg-number">{avion.immatriculation}</div>
              </div>

              <div className="card-mid">
                <div className="plane-icon-wrapper">
                  <i className="bi bi-airplane-engines"></i>
                </div>
                <div className="model-info">
                  <h3>{avion.modele}</h3>
                  <span className="status-indicator online">En service</span>
                </div>
              </div>

              <div className="card-bottom">
                <div className="capacity-info">
                  <div className="progress-label">
                    <span>Capacité Max</span>
                    <span>{avion.capacite} PLACES</span>
                  </div>
                  <div className="progress-bar-custom">
                    <div
                      className="progress-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div className="card-actions">
                  <button className="action-btn circle-btn" title="Éditer">
                    <i className="bi bi-sliders"></i>
                  </button>
                  <button
                    className="action-btn circle-btn delete"
                    title="Supprimer"
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
