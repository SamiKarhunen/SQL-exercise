DROP DATABASE IF EXISTS myynti;
CREATE DATABASE myynti;
USE myynti;



CREATE TABLE Yritys (
ytunnus INT(20)ZEROFILL PRIMARY KEY,
nimi VARCHAR(40) NOT NULL,
osoite VARCHAR(40) NOT NULL)ENGINE=INNODB;





CREATE TABLE toimipiste (
	puhelinnumero INT(20),
	osoite VARCHAR(20) PRIMARY KEY)ENGINE=INNODB; 



CREATE TABLE Tyontekija (
	etunimi VARCHAR(20) NOT NULL,
	sukunimi VARCHAR(20) NOT NULL,
	titteli VARCHAR(20),
	puhelinnumero VARCHAR(20),
	sahkoposti VARCHAR(30),
	palkka INT (10),
	henkilotunnus INT(20) PRIMARY KEY) ENGINE=INNODB; 

CREATE TABLE Salasana (
	henkilotunnus INT(20)ZEROFILL PRIMARY KEY,
	salasanatiiviste VARCHAR(40) NOT NULL, aktiivinen TINYINT(1) DEFAULT 0)ENGINE=INNODB;


CREATE TRIGGER generoisalasana AFTER INSERT ON Tyontekija
FOR EACH ROW
INSERT INTO Salasana VALUES (NEW.henkilotunnus, SHA1(CONCAT(LEFT(NEW.etunimi, 3), RIGHT(NEW.sukunimi, 3))) ,0);


CREATE TABLE asiakastieto (
	etunimi VARCHAR (20) NOT NULL,
	sukunimi VARCHAR (20) NOT NULL,
	puhelinnumero INT (20),
	osoite VARCHAR (20),
	henkilotunnus INT (20) PRIMARY KEY)ENGINE=INNODB; 
	


CREATE TABLE ostotapahtuma (
	paivamaara INT (20) NOT NULL,
	kellonaika INT (20) NOT NULL,
	tuotetieto INT,
	asiakastieto INT,
	ostotapahtumaid INT (20) PRIMARY KEY)ENGINE=INNODB; 



CREATE TABLE tuotetieto (
	tuotteennimi VARCHAR (20) NOT NULL,
	hinta INT (20) NOT NULL,
	maara INT (20),
	eankoodi INT (30) PRIMARY KEY)ENGINE=INNODB; 



CREATE TABLE tuotelista (
	kappalemaara INT (20),
	tapahtumaid INT (20) PRIMARY KEY,
	ostotapahtumaid INT,
	FOREIGN KEY (ostotapahtumaid) REFERENCES ostotapahtuma(ostotapahtumaid),
	tuote INT,
	FOREIGN KEY (tuote) REFERENCES tuotetieto(eankoodi)ON DELETE CASCADE
ON UPDATE CASCADE) ENGINE=INNODB; 



ALTER TABLE ostotapahtuma
ADD FOREIGN KEY (tuotetieto) REFERENCES tuotelista(tapahtumaid),
ADD FOREIGN KEY (asiakastieto) REFERENCES asiakastieto(henkilotunnus)ON DELETE CASCADE
ON UPDATE CASCADE;


