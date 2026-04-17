import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const inscription = async (req, res) => {
   try {
      const { prenom, login, mdp, role } = req.body;

      const exist = await User.findOne({ where: { login } });

      if (exist)
         return res
            .status(409)
            .json({ message: `Ce login ${login} est déjà utilisé !` });

      const hash = await bcrypt.hash(mdp, 10);
      const users = await User.create({ prenom, login, mdp: hash, role });


      const { mdp: _, ...usersSansMdp } = users.toJSON();

      res.status(200).json(usersSansMdp);
   } catch (err) {
      return res.status(500).json({ erreur: err.message });
   }
};

export const login = async (req, res) => {
   try {
      const { login, mdp } = req.body;

      const users = await User.findOne({ where: { login } });

      if (!users)
         return res
            .status(401)
            .json({ message: "Login ou mot de passe incorrect !" });

      const mdpValide = await bcrypt.compare(mdp, users.mdp);

      if (!mdpValide)
         return res
            .status(401)
            .json({ message: "Login ou mot de passe incorrect !" });

      const token = jwt.sign(
         { id: users.id, login: users.login, role: users.role },
         process.env.TOKEN,
         { expiresIn: "1h" },
      );

      const { mdp: _, ...usersSansMdp } = users.toJSON();

      res
         .status(200)
         .json({ message: "Connexion réussie", token, users: usersSansMdp });
   } catch (err) {
      return res.status(500).json({ erreur: err.message });
   }
};

export const getUsers = async (req, res) => {
   try {
      const users = await User.findAll();
      res.status(200).json(users);
   } catch (err) {
      return res.status(500).json({ erreur: err.message });
   }
} 