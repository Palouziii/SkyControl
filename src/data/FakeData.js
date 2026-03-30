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

export const ListePassagers = [
    { id: "P-001", nom: "Dupont", prenom: "Jean", nationalite: "Française", mail: "j.dupont@mail.com", tel: "+33 6 12 34 56 78" },
    { id: "P-002", nom: "Alves", prenom: "Maria", nationalite: "Portugaise", mail: "m.alves@skymail.pt", tel: "+351 912 345 678" },
    { id: "P-003", nom: "Chen", prenom: "Li", nationalite: "Chinoise", mail: "l.chen@global.cn", tel: "+86 138 0000 0000" },
    { id: "P-004", nom: "Müller", prenom: "Hans", nationalite: "Allemande", mail: "h.muller@berlin-air.de", tel: "+49 151 23456789" },
    { id: "P-005", nom: "Smith", prenom: "John", nationalite: "Américaine", mail: "j.smith@uscloud.com", tel: "+1 202 555 0123" },
    { id: "P-006", nom: "García", prenom: "Elena", nationalite: "Espagnole", mail: "e.garcia@madrid.es", tel: "+34 600 000 000" },
    { id: "P-007", nom: "Russo", prenom: "Giuseppe", nationalite: "Italienne", mail: "g.russo@italy.it", tel: "+39 02 1234567" },
    { id: "P-008", nom: "Abadi", prenom: "Amira", nationalite: "Marocaine", mail: "a.abadi@casa.ma", tel: "+212 661 123456" },
    { id: "P-009", nom: "Tanaka", prenom: "Yuki", nationalite: "Japonaise", mail: "y.tanaka@tokyo.jp", tel: "+81 90 1234 5678" }
];

export const ListePersonnel = [
    { id: "STAFF-01", nom: "Leclerc", prenom: "Marc", fonction: "Pilote", tel: "+33 6 00 11 22 33" },
    { id: "STAFF-02", nom: "Dubois", prenom: "Julie", fonction: "Hôtesse", tel: "+33 6 44 55 66 77" },
    { id: "STAFF-03", nom: "Moreau", prenom: "Alain", fonction: "Technicien", tel: "+33 6 88 99 00 11" },
    { id: "STAFF-04", nom: "Sartre", prenom: "Paul", fonction: "Steward", tel: "+33 7 12 34 56 78" },
    { id: "STAFF-05", nom: "Lefebvre", prenom: "Thomas", fonction: "Co-pilote", tel: "+33 6 12 98 45 67" },
    { id: "STAFF-06", nom: "Girard", prenom: "Marine", fonction: "Hôtesse", tel: "+33 6 55 44 33 22" },
    { id: "STAFF-07", nom: "Petit", prenom: "Lucas", fonction: "Bagagiste", tel: "+33 7 88 77 66 55" },
    { id: "STAFF-08", nom: "Rousseau", prenom: "Chloé", fonction: "Pilote", tel: "+33 6 21 43 65 87" },
    { id: "STAFF-09", nom: "Mercier", prenom: "Benoît", fonction: "Sécurité", tel: "+33 6 09 08 07 06" },
    { id: "STAFF-10", nom: "Blanc", prenom: "Alice", fonction: "Steward", tel: "+33 6 76 54 32 10" },
    { id: "STAFF-11", nom: "Fontaine", prenom: "David", fonction: "Technicien", tel: "+33 7 45 67 89 01" },
    { id: "STAFF-12", nom: "Guerin", prenom: "Sophie", fonction: "Hôtesse", tel: "+33 6 32 21 10 00" },
    { id: "STAFF-13", nom: "Dumas", prenom: "Nicolas", fonction: "Co-pilote", tel: "+33 6 11 22 99 88" }
];