import { DataTypes } from "sequelize";
import sequelize from "../SkyControleDB.js";

const Bagage = sequelize.define("Bagage", {
    id_bagage: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.STRING(30),
        allowNull: false, 
    },
    poids: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    timestamps: true,
});

export default Bagage;