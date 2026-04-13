import Billet from "../models/Billet.js";

export const getAllBillets = async (req, res) => {
   try {
      const billets = await Billet.findAll();
      res.status(200).json(billets);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

export const getBilletById = async (req, res) => {
   try {
      const billet = await Billet.findByPk(req.params.id);
      if (!billet) return res.status(404).json({ message: "Billet non trouvé" });
      res.status(200).json(billet);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

export const createBillet = async (req, res) => {
   try {
      const { ref_billet, nom, prenom, nationalite, vol, classe, siege, prix } = req.body;

      const newBillet = await Billet.create({
         ref_billet,
         nom,
         prenom,
         nationalite,
         vol,
         classe,
         siege,
         prix
      });
      res.status(201).json(newBillet);
   } catch (error) {
      res.status(500).json({
         message: "Failed to create ticket",
         error: error.message
      });
   }
};

export const updateBillet = async (req, res) => {
   try {
      const { nom, prenom, nationalite, vol, classe, siege, prix } = req.body;
      const billet = await Billet.findByPk(req.params.id);

      if (!billet) {
         return res.status(404).json({ message: "Ticket not found" });
      }

      await billet.update({ nom, prenom, nationalite, vol, classe, siege, prix });
      res.status(200).json(billet);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

export const deleteBillet = async (req, res) => {
   try {
      const billet = await Billet.findByPk(req.params.id);
      console.log(billet)
      if (!billet) {
         return res.status(404).json({ message: "Ticket not found" });
      }
      await billet.destroy();
      res.status(200).json({ message: `Ticket ${billet.ref_billet} delete` });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};