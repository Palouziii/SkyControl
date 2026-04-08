import { DataTypes } from "sequelize";
import sequelize from "../SkyControleDB.js";
import Avion from "./Avion.js"

const Vol = sequelize.define("Vol", {
   ref_vol: {
      type: DataTypes.STRING(20),
      primaryKey: true,
   },
   compagnie: {
      type: DataTypes.STRING(50),
      allowNull: false,
   },
   depart: {
      type: DataTypes.STRING(50),
      allowNull: false,
   },
   arrivee: {
      type: DataTypes.STRING(50),
      allowNull: false,
   },
   date_depart: {
      type: DataTypes.DATE,
      allowNull: false,
   },
   date_arrivee: {
      type: DataTypes.DATE,
      allowNull: false,
   },
   immatriculation: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
         model: 'Avions',
         key: 'immatriculation'
      }
   }
},
   {
      timestamps: true,
   });

Vol.belongsTo(Avion, { foreignKey: "immatriculation", as: "avion" })
Avion.hasMany(Vol, { foreignKey: "immatriculation", as: "vols" })


export default Vol;