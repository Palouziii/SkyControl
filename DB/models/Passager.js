import { DataTypes } from "sequelize";
import sequilize from "../SkyControleDB.js";
import Billet from "./Billet.js";

const Passager = sequilize.define("Passager",
   {
      id_passager: {
         type: DataTypes.STRING(50),
         primaryKey: true,
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
      timestamps: true,
      createdAt: true,
      updatedAt: true,
   },
);

Billet.belongsTo(Passager, { foreignKey: "id_passager", as: "proprietaire" });
Passager.hasMany(Billet, { foreignKey: "id_passager", as: "mes_billets" });

export default Passager;