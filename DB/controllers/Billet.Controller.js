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
        if (!billet) return res.status(404).json({ message: "Ticket not found" });
        res.status(200).json(billet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createBillet = async (req, res) => {
    try {
        const newBillet = await Billet.create(req.body);
        res.status(201).json(newBillet);
    } catch (error) {
        res.status(500).json({ message: "Failed to create ticket", error: error.message });
    }
};

export const updateBillet = async (req, res) => {
    try {
        const billet = await Billet.findByPk(req.params.id);
        if (!billet) return res.status(404).json({ message: "Ticket not found" });

        await billet.update(req.body);
        res.status(200).json(billet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteBillet = async (req, res) => {
    try {
        const billet = await Billet.findByPk(req.params.id);
        if (!billet) return res.status(404).json({ message: "Ticket not found" });

        await billet.destroy();
        res.status(200).json({ message: `Ticket ${req.params.id} has been deleted` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};