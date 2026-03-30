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
];

export const ListeBillets = [
    new Billet("TK-101", "Jean Dupont", "AF456", "First", "01A", 1250, "2026-04-12"),
    new Billet("TK-102", "Sophie Martin", "EK001", "Business", "12C", 850, "2026-04-12"),
    new Billet("TK-103", "Marc Levy", "BA009", "Economy", "34F", 420, "2026-04-13"),
];

export const ListePassagers = [
    new Passager ("P-001", "Dupont", "Jean", "Française", "j.dupontcom", "+33 6 12 34 56 78"),
    new Passager ("P-002", "Alves", "Maria", "Portugaise", "m.alves@skpt", "+351 912 345 678"),
    new Passager ("P-003", "Chen", "Li", "Chinoise", "l.chen@global.cn", "+86 138 0000 0000"),
];

export const ListePersonnel = [
    new Personnel ("STAFF-01", "Leclerc", "Marc", "Pilote", "+33 6 00 11 22 33"),
    new Personnel ("STAFF-02", "Dubois", "Julie", "Hôtesse", "+33 6 44 55 66 77"),
    new Personnel ("STAFF-03", "Moreau", "Alain", "Technicien", "+33 6 88 99 00 11"),
];

export const ListeVols = [
    new Vol("AF-2024", "Air France", "Paris (CDG)", "New York (JFK)", "2026-04-12 10:30", "2026-04-12 14:00"),
    new Vol("EK-088", "Emirates", "Dubaï (DXB)", "Paris (CDG)", "2026-04-13 08:15", "2026-04-13 13:45"),
    new Vol("SQ-334", "Singapore Airlines", "Singapour (SIN)", "Tokyo (HND)", "2026-04-14 23:55", "2026-04-15 07:30"),
];