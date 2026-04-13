import { DataTypes } from "sequelize";
import sequelize from "../SkyControleDB.js";
import Avion from "./Avion.js";


const Personnel = sequelize.define("Personnel", {
   id_personnel: {
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
   fonction: {
      type: DataTypes.STRING(50),
      allowNull: false,
   },
   telephone: {
      type: DataTypes.STRING(20),
      allowNull: true,
   }
}, {
   timestamps: true,
});

Personnel.belongsToMany(Avion, { through: "Concerner", foreignKey: 'id_personnel', as: 'avion' });
Avion.belongsToMany(Personnel, { through: "Concerner", foreignKey: 'immatriculation', as: 'personnel' });

export default Personnel; 