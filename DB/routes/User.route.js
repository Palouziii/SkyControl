import express from "express"
import { inscription } from "../controllers/User.controller.js";

const router = express.Router();

router.post("/", inscription);

export default router;