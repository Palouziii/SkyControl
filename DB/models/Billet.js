import { DataTypes } from "sequelize";
import sequelize from "../SkyControleDB.js";

const Billet = sequelize.define("Billet", {
   ref_billet: {
      type: DataTypes.STRING(20),
      primaryKey: true,
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
   date_emission: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
   }
}, {
   timestamps: true,
});

export default Billet;