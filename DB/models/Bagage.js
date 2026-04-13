import { DataTypes } from "sequelize";
import sequelize from "../SkyControleDB.js";
import Billet from "./Billet.js";

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

Bagage.belongsTo(Billet, { foreignKey: "ref_billet", as: "billet" });
Billet.hasMany(Bagage, { foreignKey: "ref_billet", as: "bagages" });

export default Bagage;