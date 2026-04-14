import { DataTypes } from "sequelize";
import sequelize from "../SkyControleDB.js";
import Vol from "./Vol.js";

const Billet = sequelize.define("Billet", {
   ref_billet: {
      type: DataTypes.STRING(50),
      primaryKey: true,
   },
   nom: {
      type: DataTypes.STRING(20),
      allowNull: false,
   },
   prenom: {
      type: DataTypes.STRING(20),
      allowNull: false,
   },
   nationalite: {
      type: DataTypes.STRING(20),
      allowNull: false,
   },
   classe: {
      type: DataTypes.STRING(30),
      allowNull: false,
   },
   siege: {
      type: DataTypes.STRING(10),
      allowNull: false,
   },
   prix: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
   },
   ref_vol: {
      type: DataTypes.STRING(50),
      allowNull: false,
      reference: {
         key: "ref_vol",
         model: "Vols"
      }
   }
}, {
   timestamps: true,
});

Billet.belongsTo(Vol, { foreignKey: "vol", targetKey: "ref_vol", as: "detailsVol" });
Vol.hasMany(Billet, { foreignKey: "vol", sourceKey: "ref_vol", as: "billets" });

export default Billet;