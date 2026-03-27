import avionService from "../../services/AvionService";

export default function AvionCard() {
  const avions = avionService.getAll();

  return (
    <>
      <table className="table table-strepid">
        <thead>
          <tr>
            <th>Immatriculation</th>
            <th>Capacité</th>
            <th>Modèle</th>
            <th>Compagnie</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {avions.map((avion) => (
            <tr key={avion.immatriculation}>
              <td>{avion.immatriculation}</td>
              <td>{avion.capacite}</td>
              <td>{avion.modele}</td>
              <td>{avion.compagnie}</td>
              <td>
                <button>MODIFIER</button>
                <button>SUPPRIMER</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
