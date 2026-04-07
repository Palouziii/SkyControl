import express from "express";
import { 
    getAllBillets, 
    getBilletById, 
    createBillet, 
    updateBillet, 
    deleteBillet 
} from "../controllers/Billet.Controller.js";

const router = express.Router();

router.get("/", getAllBillets);
router.get("/:id", getBilletById);
router.post("/", createBillet);
router.put("/:id", updateBillet);
router.delete("/:id", deleteBillet);

export default router;