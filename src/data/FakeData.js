import { Avion } from "../model/Avion"
import { Billet } from "../model/Billet"
import { Passager } from "../model/Passager"
import { Personnel } from "../model/Personnel"
import { Vol } from "../model/Vol";

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
    new Passager ("P-001", "Dupont", "Jean", "Française", "j.dupontcom", "+33 6 12 34 56 78"),
    new Passager ("P-002", "Alves", "Maria", "Portugaise", "m.alves@skpt", "+351 912 345 678"),
    new Passager ("P-003", "Chen", "Li", "Chinoise", "l.chen@global.cn", "+86 138 0000 0000"),
    new Passager ("P-004", "Müller", "Hans", "Allemande", "h.muller@berlin-air.de", "+49 151 23456789"),
    new Passager ("P-005", "Smith", "John", "Américaine", "j.smith@uscloud.com", "+1 202 555 0123"),
    new Passager ("P-006", "García", "Elena", "Espagnole", "e.garcia@madrid.es", "+34 600 000 000"),
    new Passager ("P-007", "Russo", "Giuseppe", "Italienne", "g.russo@italy.it", "+39 02 1234567"),
    new Passager ("P-008", "Abadi", "Amira", "Marocaine", "a.abadi@casa.ma", "+212 661 123456"),
    new Passager ("P-009", "Tanaka", "Yuki", "Japonaise", "y.tanaka@tokyo.jp", "+81 90 1234 5678")
];

export const ListePersonnel = [
    new Personnel ("STAFF-01", "Leclerc", "Marc", "Pilote", "+33 6 00 11 22 33"),
    new Personnel ("STAFF-02", "Dubois", "Julie", "Hôtesse", "+33 6 44 55 66 77"),
    new Personnel ("STAFF-03", "Moreau", "Alain", "Technicien", "+33 6 88 99 00 11"),
    new Personnel ("STAFF-04", "Sartre", "Paul", "Steward", "+33 7 12 34 56 78"),
    new Personnel ("STAFF-05", "Lefebvre", "Thomas", "Co-pilote", "+33 6 12 98 45 67"),
    new Personnel ("STAFF-06", "Girard", "Marine", "Hôtesse", "+33 6 55 44 33 22"),
    new Personnel ("STAFF-07", "Petit", "Lucas", "Bagagiste", "+33 7 88 77 66 55"),
    new Personnel ("STAFF-08", "Rousseau", "Chloé", "Pilote", "+33 6 21 43 65 87"),
    new Personnel ("STAFF-09", "Mercier", "Benoît", "Sécurité", "+33 6 09 08 07 06"),
    new Personnel ("STAFF-10", "Blanc", "Alice", "Steward", "+33 6 76 54 32 10"),
    new Personnel ("STAFF-11", "Fontaine", "David", "Technicien", "+33 7 45 67 89 01"),
    new Personnel ("STAFF-12", "Guerin", "Sophie", "Hôtesse", "+33 6 32 21 10 00"),
    new Personnel ("STAFF-13", "Dumas", "Nicolas", "Co-pilote", "+33 6 11 22 99 88")
];

export const ListeVols = [
    new Vol("AF-2024", "Air France", "Paris (CDG)", "New York (JFK)", "2026-04-12 10:30", "2026-04-12 14:00"),
    new Vol("EK-088", "Emirates", "Dubaï (DXB)", "Paris (CDG)", "2026-04-13 08:15", "2026-04-13 13:45"),
    new Vol("SQ-334", "Singapore Airlines", "Singapour (SIN)", "Tokyo (HND)", "2026-04-14 23:55", "2026-04-15 07:30"),
    new Vol("BA-175", "British Airways", "Londres (LHR)", "Los Angeles (LAX)", "2026-04-15 11:00", "2026-04-15 14:20"),
    new Vol("QR-014", "Qatar Airways", "Doha (DOH)", "Casablanca (CMN)", "2026-04-16 02:40", "2026-04-16 08:50"),
    new Vol("LH-400", "Lufthansa", "Francfort (FRA)", "New York (JFK)", "2026-04-17 11:10", "2026-04-17 13:40"),
    new Vol("AM-001", "Aeromexico", "Mexico (MEX)", "Paris (CDG)", "2026-04-18 23:50", "2026-04-19 18:00"),
    new Vol("TK-001", "Turkish Airlines", "Istanbul (IST)", "Dubaï (DXB)", "2026-04-20 13:30", "2026-04-20 18:15"),
    new Vol("CX-260", "Cathay Pacific", "Hong Kong (HKG)", "Paris (CDG)", "2026-04-21 00:45", "2026-04-21 07:35"),
    new Vol("QF-002", "Qantas", "Londres (LHR)", "Sydney (SYD)", "2026-04-22 21:05", "2026-04-24 06:15"),
    new Vol("TN-008", "Air Tahiti Nui", "Paris (CDG)", "Papeete (PPT)", "2026-04-25 11:35", "2026-04-26 05:20")
];