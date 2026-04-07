import express from "express"
import { 
   createAvion, 
   deleteAvion, 
   getAvion, 
   getAvionById, 
   updateAvion 
} from "../controllers/Avion.Controller.js";

const router = express.Router();

router.get("/", getAvion)
router.get("/:id", getAvionById)
router.put("/:id", updateAvion)
router.post("/", createAvion);
router.delete("/:id", deleteAvion)

export default router;