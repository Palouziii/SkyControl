import { DataTypes } from "sequelize";
import sequilize from "../SkyControleDB.js";

const Avion = sequilize.define("Avion",
   {
      immatriculation: {
         type: DataTypes.STRING(50),
         primaryKey: true,
      },
      capacite: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      modele: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
      compagnie: {
         type: DataTypes.STRING(50),
         allowNull: false,
      }
   },
   {
      timestamp: true,
      createdAt: true,
      updatedAt: true,
   },
);

export default Avion;