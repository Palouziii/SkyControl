import express from "express";
import { 
    getAllVols, 
    getVolById, 
    createVol, 
    updateVol, 
    deleteVol 
} from "../controllers/Vol.Controller.js";

const router = express.Router();

router.get("/", getAllVols);
router.get("/:id", getVolById);
router.post("/", createVol);
router.put("/:id", updateVol);
router.delete("/:id", deleteVol);

export default router;