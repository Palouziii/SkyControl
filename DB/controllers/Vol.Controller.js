import Vol from "../models/Vol.js";

export const getAllVols = async (req, res) => {
    try {
        const vols = await Vol.findAll();
        res.status(200).json(vols);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getVolById = async (req, res) => {
    try {
        const vol = await Vol.findByPk(req.params.id);
        if (!vol) return res.status(404).json({ message: "Flight not found" });
        res.status(200).json(vol);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createVol = async (req, res) => {
    try {
        const { ref_vol, compagnie, depart, arrivee, date_depart, date_arrivee } = req.body;
        const newVol = await Vol.create({
            ref_vol,
            compagnie,
            depart,
            arrivee,
            date_depart,
            date_arrivee
        });
        res.status(201).json(newVol);
    } catch (error) {
        res.status(500).json({ message: "Failed to create flight", error: error.message });
    }
};

export const updateVol = async (req, res) => {
    try {
        const vol = await Vol.findByPk(req.params.id);
        if (!vol) return res.status(404).json({ message: "Flight not found" });

        await vol.update(req.body);
        res.status(200).json(vol);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteVol = async (req, res) => {
    try {
        const vol = await Vol.findByPk(req.params.id);
        if (!vol) return res.status(404).json({ message: "Flight not found" });

        await vol.destroy();
        res.status(200).json({ message: `Flight ${req.params.id} has been deleted` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};