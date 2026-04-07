import express from "express";
import {
   getAllBagages,
   getBagageById,
   createBagage,
   updateBagage,
   deleteBagage
} from "../controllers/Bagage.Controller.js";

const router = express.Router();

router.get("/", getAllBagages);
router.get("/:id", getBagageById);
router.post("/", createBagage);
router.put("/:id", updateBagage);
router.delete("/:id", deleteBagage);

export default router;