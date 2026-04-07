import { DataTypes } from "sequelize";
import sequilize from "../SkyControleDB.js";

const Passager = sequilize.define("Passager",
   {
      id_passager: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      nom: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
      prenom: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
      nationalite: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
      mail: {
         type: DataTypes.STRING(50),
         allowNull: false,
         unique: true
      },
      telephone: {
         type: DataTypes.STRING(50),
         allowNull: false,
         unique: true
      }
   },
   {
      timestamp: true,
      createdAt: true,
      updatedAt: true,
   },
);

export default Passager;