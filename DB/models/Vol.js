import { DataTypes } from "sequelize";
import sequelize from "../SkyControleDB.js";

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
    }
}, {
    timestamps: true,
});

export default Vol;