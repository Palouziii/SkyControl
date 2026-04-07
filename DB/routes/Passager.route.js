import express from "express"
import { 
   createPassager, 
   deletePassager, 
   getPassager,
   getPassagerById, 
   updatePassager 
} from "../controllers/Passager.Controller.js";


const router = express.Router();

router.get("/", getPassager)
router.get("/:id", getPassagerById)
router.put("/:id", updatePassager)
router.post("/", createPassager);
router.delete("/:id", deletePassager)

export default router;