import Avion from "../models/Avion.js";
import Personnel from "../models/Personnel.js";

export const getAllPersonnel = async (req, res) => {
   try {
      const staff = await Personnel.findAll({
         include: [{
            model: Avion,
            as: 'avion',
         }]
      });
      res.status(200).json(staff);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

export const getPersonnelById = async (req, res) => {
   try {
      const member = await Personnel.findByPk(req.params.id);
      if (!member) return res.status(404).json({ message: "Staff member not found" });
      res.status(200).json(member);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

export const createPersonnel = async (req, res) => {
   try {
      const { id_personnel, nom, prenom, fonction, telephone } = req.body;
      const newMember = await Personnel.create({ id_personnel, nom, prenom, fonction, telephone });
      res.status(201).json(newMember);
   } catch (error) {
      res.status(500).json({ message: "Failed to create staff member", error: error.message });
   }
};

export const updatePersonnel = async (req, res) => {
   try {
      const { nom, prenom, fonction, telephone } = req.body;
      const member = await Personnel.findByPk(req.params.id);

      if (!member) return res.status(404).json({ message: "Staff member not found" });

      await member.update({ nom, prenom, fonction, telephone });
      res.status(200).json(member);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

export const deletePersonnel = async (req, res) => {
   try {
      const member = await Personnel.findByPk(req.params.id);

      if (!member) return res.status(404).json({ message: "Staff member not found" });

      await member.destroy();
      res.status(200).json({ message: `Staff member with ID ${req.params.id} has been deleted` });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};