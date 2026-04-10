import Avion from "../models/Avion.js";
import Personnel from "../models/Personnel.js";
import Vol from "../models/Vol.js";

export const getAvion = async (req, res) => {
   try {
      const avions = await Avion.findAll({
         include: [
            {
               model: Vol,
               as: "vols"
            },
            {
               model: Personnel,
               as: "personnel",
            }
         ]
      });
      res.status(200).json(avions);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}

export const getAvionById = async (req, res) => {
   try {
      const avion = await Avion.findByPk(req.params.id);
      if (!avion) return res.status(404).json({ message: "AirCraft non trouvé" });
      res.status(200).json(avion);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}


export const createAvion = async (req, res) => {
   try {
      const { immatriculation, capacite, modele, compagnie } = req.body;
      const newAvion = await Avion.create({
         immatriculation,
         capacite,
         modele,
         compagnie
      });
      res.status(201).json(newAvion);
   } catch (error) {
      res.status(500).json({
         message: "Failed to create AirCraft",
         error: error.message
      });
   }
}

export const updateAvion = async (req, res) => {
   try {
      const { immatriculation, capacite, modele, compagnie } = req.body;

      const avion = await Avion.findByPk(req.params.id);

      if (!avion) {
         return res.status(404).json({ message: "AirCraft not found" });
      }

      await avion.update({ immatriculation, capacite, modele, compagnie });
      res.status(200).json(avion);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}

export const deleteAvion = async (req, res) => {
   try {
      const avion = await Avion.findByPk(req.params.id);

      if (!avion) {
         return res.status(404).json({ message: "AirCraft not found" });
      }

      await avion.destroy();
      res.status(200).json({ message: `AirCraft immatriculation : → ${avion.immatriculation} is delete` });

   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}
