import express from "express"
import { getUsers, inscription, login } from "../controllers/User.Controller.js";

const router = express.Router();

router.post("/", inscription);
router.post("/login", login)
router.get("/", getUsers)

export default router;