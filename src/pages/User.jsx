import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
import "../css/User.css";
import UserService from "../services/UserService";

export default function Login() {
  const navigate = useNavigate();
  const { login: contextLogin } = useAuth(); 
  
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    prenom: "",
    login: "",
    mdp: "", 
    role: "User",
  });
  const [erreur, setErreur] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErreur(null);
    setLoading(true);

    try {
      if (isRegistering) {
        await UserService.add({
            ...formData,
            password: formData.mdp 
        });
        setIsRegistering(false);
        alert("Compte créé avec succès !");
      } else {
        await contextLogin(formData.login, formData.mdp);
        alert("Bienvenue dans le système SKYCONTROL");
        navigate("/"); 
      }
    } catch (err) {
      setErreur(err.response?.data?.message || "Identifiants ou données incorrects");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg rounded-4 overflow-hidden" style={{ maxWidth: "900px", width: "100%" }}>
        <div className="row g-0">         
          {/* Section Gauche (Design) */}
          <div className="col-md-5 bg-dark text-white d-flex flex-column justify-content-center p-5 text-center">
            <h2 className="fw-black mb-2 tracking-tighter">SKYCONTROL</h2>
            <p className="text-muted small mb-4 text-uppercase tracking-widest" style={{fontSize: '0.7rem'}}>L'élite de l'aérien</p>
            <button 
              className="btn btn-outline-light mt-5 fw-bold btn-sm py-2 px-4"
              onClick={() => {
                setIsRegistering(!isRegistering);
                setErreur(null);
              }}
              disabled={loading}
            >
              {isRegistering ? "J'AI DÉJÀ UN COMPTE" : "REJOINDRE L'ÉLITE"}
            </button>
          </div>

          {/* Section Droite (Formulaire) */}
          <div className="col-md-7 bg-white p-5">
            <h3 className="fw-bold text-uppercase mb-4">
              {isRegistering ? "Inscription" : "Connexion"}
            </h3>

            {erreur && <div className="alert alert-danger small py-2">{erreur}</div>}
            
            <form onSubmit={handleSubmit}>
              {isRegistering && (
                <div className="mb-3">
                  <label className="label-form-prestige small fw-bold text-muted">PRÉNOM</label>
                  <input
                    type="text"
                    name="prenom"
                    className="form-control-prestige w-100"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <div className="mb-3">
                <label className="label-form-prestige small fw-bold text-muted">LOGIN</label>
                <input
                  type="text"
                  name="login"
                  className="form-control-prestige w-100"
                  value={formData.login}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="label-form-prestige small fw-bold text-muted">MOT DE PASSE</label>
                <input
                  type="password"
                  name="mdp"
                  className="form-control-prestige w-100"
                  value={formData.mdp}
                  onChange={handleChange}
                  required
                />
              </div>

              {isRegistering && (
                <div className="mb-4">
                  <label className="label-form-prestige small fw-bold text-muted">RÔLE</label>
                  <select 
                    name="role" 
                    className="form-control-prestige w-100" 
                    onChange={handleChange}
                    value={formData.role}
                  >
                    <option value="USER">Utilisateur (Standard)</option>
                    <option value="ADMIN">Administrateur (Elite)</option>
                  </select>
                </div>
              )}

              <button type="submit" disabled={loading} className="btn btn-dark w-100 fw-bold py-3 mt-3 shadow-sm tracking-widest">
                {loading ? "TRAITEMENT..." : (isRegistering ? "VALIDER L'INSCRIPTION" : "DÉVERROUILLER L'ACCÈS")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}