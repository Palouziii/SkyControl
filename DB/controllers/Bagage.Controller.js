import Bagage from "../models/Bagage.js";

export const getAllBagages = async (req, res) => {
    try {
        const bagages = await Bagage.findAll();
        res.status(200).json(bagages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBagageById = async (req, res) => {
    try {
        const bagage = await Bagage.findByPk(req.params.id);
        if (!bagage) return res.status(404).json({ message: "Baggage not found" });
        res.status(200).json(bagage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createBagage = async (req, res) => {
    try {
        const newBagage = await Bagage.create(req.body);
        res.status(201).json(newBagage);
    } catch (error) {
        res.status(500).json({ message: "Failed to create baggage", error: error.message });
    }
};

export const updateBagage = async (req, res) => {
    try {
        const bagage = await Bagage.findByPk(req.params.id);
        if (!bagage) return res.status(404).json({ message: "Baggage not found" });

        await bagage.update(req.body);
        res.status(200).json(bagage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteBagage = async (req, res) => {
    try {
        const bagage = await Bagage.findByPk(req.params.id);
        if (!bagage) return res.status(404).json({ message: "Baggage not found" });

        await bagage.destroy();
        res.status(200).json({ message: `Baggage with ID ${req.params.id} has been deleted` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};