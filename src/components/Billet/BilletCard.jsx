import "../../css/BilletCard.css";

export default function BilletCard({ billets, remove, edit }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0 w-100">
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
            {billets.map((billet) => (
              <tr key={billet.ref_billet}>
                <td className="ps-4 fw-bold text-primary">{billet.ref_billet}</td>
                <td className="fw-medium">{billet.passager}</td>
                <td>
                  <span className="badge bg-dark px-2">{billet.vol}</span>
                </td>
                <td>
                  <span className={`badge-classe-simple ${billet.classe.replace(" ", "-").toLowerCase()}`}>
                    {billet.classe}
                  </span>
                </td>
                <td className="fw-bold">{billet.siege}</td>
                <td className="text-success fw-bold">{billet.prix} €</td>
                <td className="text-center">
                  <button 
                  className="btn btn-outline-dark btn-sm fw-bold me-2" 
                  onClick={() => edit(billet)}>MODIFIER
                  </button>
                  
                  <button 
                    className="btn btn-outline-danger btn-sm fw-bold"
                    onClick={() => remove(billet)}
                  >
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