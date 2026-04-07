import express from "express";
import dotenv from "dotenv"
import sequelize from "./SkyControleDB.js";
import AvionRouter from "./routes/Avion.route.js"
import PassagerRouter from "./routes/Passager.route.js"
import PersonnelRouter from "./routes/Personnel.route.js";
import VolRouter from "./routes/Vol.route.js";
import BilletRouter from "./routes/Billet.route.js";
import BagageRouter from "./routes/Bagage.route.js";

dotenv.config()

const app = express();

app.use(express.json());

app.use("/avion", AvionRouter);
app.use("/passager", PassagerRouter);
app.use("/personnel", PersonnelRouter);
app.use("/vol", VolRouter);
app.use("/billet", BilletRouter);
app.use("/bagage", BagageRouter);

sequelize.sync().then(() => {
   app.listen(process.env.PORT, () => {
      console.log("Port → http://localhost:8000")
   });
});
