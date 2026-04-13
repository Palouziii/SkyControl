import { log } from "node:console";
import Passager from "../models/Passager.js";

export const getPassager = async (req, res) => {
   try {
      const passagers = await Passager.findAll();
      res.status(200).json(passagers);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}

export const getPassagerById = async (req, res) => {
   try {
      const passager = await Passager.findByPk(req.params.id);
      if (!passager) return res.status(404).json({ message: "Passager non trouvé" });
      res.status(200).json(passager);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}


export const createPassager = async (req, res) => {
   try {
      const { id_passager, nom, prenom, nationalite, mail, telephone } = req.body;
      const newPassager = await Passager.create({
         id_passager,
         nom,
         prenom,
         nationalite,
         mail,
         telephone
      });
      res.status(201).json(newPassager);
   } catch (error) {
      res.status(500).json({
         message: "Failed to create passager",
         error: error.message
      });
   }
}

export const updatePassager = async (req, res) => {
   try {
      const { id_passager, nom, prenom, nationalite, mail, telephone } = req.body;

      const passager = await Passager.findByPk(req.params.id);

      if (!passager) {
         return res.status(404).json({ message: "Passager not found" });
      }

      await passager.update({ id_passager, nom, prenom, nationalite, mail, telephone });
      res.status(200).json(passager);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}

export const deletePassager = async (req, res) => {
   try {
      const passager = await Passager.findByPk(req.params.id);
      console.log(passager);


      if (!passager) {
         return res.status(404).json({ message: "Passager not found" });
      }

      await passager.destroy();
      res.status(200).json({ message: `Le passager avec l'id : → ${passager.id_passager} à été delete` });

   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}
