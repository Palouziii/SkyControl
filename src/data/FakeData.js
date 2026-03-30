import { Avion } from "../model/Avion"
import { Billet } from "../model/Billet"

export const ListeAvions = [
    new Avion("F-HPJK", 516, "Airbus A380", "Air France"),
    new Avion("N789EX", 290, "Boeing 787-9 Dreamliner", "United Airlines"),
    new Avion("G-XWBA", 325, "Airbus A350", "British Airways"),
    new Avion("D-AIMA", 509, "Airbus A380", "Lufthansa"),
    new Avion("F-GKXY", 174, "Airbus A320", "Air France"),
    new Avion("A6-EEO", 517, "Airbus A380-800", "Emirates"),
    new Avion("JA873A", 246, "Boeing 787-9", "All Nippon Airways"),
    new Avion("B-LRA", 280, "Airbus A350-900", "Cathay Pacific"),
    new Avion("PH-BVA", 381, "Boeing 777-300ER", "KLM"),
    new Avion("VQ-BSK", 12, "Gulfstream G650ER", "Private Jet"),
    new Avion("F-HNAV", 330, "Airbus A330-900neo", "Corsair"),
    new Avion("F-HPJH", 516, "Airbus A380", "Air France"),
    new Avion("N789FX", 290, "Boeing 787-9 Dreamliner", "United Airlines"),
];

export const ListeBillets = [
    new Billet("TK-101", "Jean Dupont", "AF456", "First", "01A", 1250, "2026-04-12"),
    new Billet("TK-102", "Sophie Martin", "EK001", "Business", "12C", 850, "2026-04-12"),
    new Billet("TK-103", "Marc Levy", "BA009", "Economy", "34F", 420, "2026-04-13"),
    new Billet("TK-104", "Lucie Bernard", "AF456", "Business", "08D", 780, "2026-04-12"),
    new Billet("TK-105", "Thomas Wright", "UA789", "First", "02B", 1500, "2026-04-14"),
    new Billet("TK-106", "Emma Watson", "EK001", "First", "01K", 2100, "2026-04-12"),
    new Billet("TK-107", "Julien Clerc", "KL123", "Economy", "45A", 310, "2026-04-15"),
    new Billet("TK-108", "Marie Curie", "LH509", "Business", "15E", 920, "2026-04-16")
];
