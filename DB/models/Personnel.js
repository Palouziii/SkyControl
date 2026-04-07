import { DataTypes } from "sequelize";
import sequelize from "../SkyControleDB.js";

const Personnel = sequelize.define("Personnel", {
    id_personnel: {
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

export default Personnel;