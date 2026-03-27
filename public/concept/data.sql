CREATE TABLE Avion(
   Immatriculation INT,
   capacite INT NOT NULL,
   modele VARCHAR(50) NOT NULL,
   compagnie VARCHAR(50) NOT NULL,
   PRIMARY KEY(Immatriculation)
)ENGINE=InnoDB;

CREATE TABLE Personnel(
   id_personnel INT,
   nom VARCHAR(50) NOT NULL,
   prenom VARCHAR(50) NOT NULL,
   fonction VARCHAR(50) NOT NULL,
   telephone INT NOT NULL,
   PRIMARY KEY(id_personnel),
   UNIQUE(telephone)
)ENGINE=InnoDB;

CREATE TABLE Passager(
   id_passsager INT,
   nom VARCHAR(50) NOT NULL,
   prenom VARCHAR(50) NOT NULL,
   nationalite VARCHAR(50) NOT NULL,
   mail VARCHAR(50),
   telephone INT,
   PRIMARY KEY(id_passsager),
   UNIQUE(mail),
   UNIQUE(telephone)
)ENGINE=InnoDB;

CREATE TABLE Vol(
   ref_vol INT,
   compagnie VARCHAR(50) NOT NULL,
   depart VARCHAR(50) NOT NULL,
   arrivee VARCHAR(50) NOT NULL,
   date_depart DATETIME NOT NULL,
   date_arrivee DATETIME NOT NULL,
   Immatriculation INT NOT NULL,
   PRIMARY KEY(ref_vol),
   FOREIGN KEY(Immatriculation) REFERENCES Avion(Immatriculation)
)ENGINE=InnoDB;

CREATE TABLE Billet(
   ref_billet INT,
   classe VARCHAR(50) NOT NULL,
   siege VARCHAR(3) NOT NULL,
   prix INT NOT NULL,
   date_ DATETIME NOT NULL,
   id_passsager INT NOT NULL,
   ref_vol INT NOT NULL,
   PRIMARY KEY(ref_billet),
   FOREIGN KEY(id_passsager) REFERENCES Passager(id_passsager),
   FOREIGN KEY(ref_vol) REFERENCES Vol(ref_vol)
)ENGINE=InnoDB;

CREATE TABLE Bagage(
   id_bagage INT,
   type VARCHAR(50) NOT NULL,
   poids VARCHAR(50) NOT NULL,
   ref_billet INT NOT NULL,
   PRIMARY KEY(id_bagage),
   FOREIGN KEY(ref_billet) REFERENCES Billet(ref_billet)
)ENGINE=InnoDB;

CREATE TABLE Concerner(
   ref_vol INT,
   id_personnel INT,
   PRIMARY KEY(ref_vol, id_personnel),
   FOREIGN KEY(ref_vol) REFERENCES Vol(ref_vol),
   FOREIGN KEY(id_personnel) REFERENCES Personnel(id_personnel)
)ENGINE=InnoDB;

CREATE TABLE Lier(
   Immatriculation INT,
   id_personnel INT,
   PRIMARY KEY(Immatriculation, id_personnel),
   FOREIGN KEY(Immatriculation) REFERENCES Avion(Immatriculation),
   FOREIGN KEY(id_personnel) REFERENCES Personnel(id_personnel)
)ENGINE=InnoDB;
