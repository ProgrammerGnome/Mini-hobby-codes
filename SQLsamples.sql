CREATE TABLE Ugyfel
(
	id integer not null PRIMARY KEY,
	veznev varchar(50) not null,
	kernev varchar(50) not null,
	email varchar(100),
	regisztracio date
);
CREATE TABLE Rendeles
(
	id integer not null PRIMARY KEY,
	ugyfel integer not null,
	rendeles varchar(100),
	omg smallint
)

-- Ugyfel tábla adatok beszúrása
INSERT INTO Ugyfel (id, veznev, kernev, email, regisztracio)
SELECT
    generate_series(1, 100), -- Az ID-ket 1-től 100-ig generálja
    'Veznev' || generate_series(1, 100), -- Vezetéknevek generálása
    'Kernev' || generate_series(1, 100), -- Keresztnevek generálása
    'email_' || generate_series(1, 100) || '@example.com', -- Email címek generálása
    CURRENT_DATE - (random() * 365 * 10 || ' days')::interval -- Regisztráció dátumok generálása az elmúlt 10 évben
;

-- Rendeles tábla adatok beszúrása
INSERT INTO Rendeles (id, ugyfel, rendeles, omg)
SELECT
    generate_series(1, 100), -- Az ID-ket 1-től 100-ig generálja
    floor(random() * 100) + 1, -- Véletlenszerű ugyfel értékek generálása 1-től 100-ig
    'Rendeles' || generate_series(1, 100), -- Rendelések generálása
    floor(random() * 10) + 1 -- Véletlenszerű OMG (omg) értékek generálása 1-től 100-ig
;

-- FELADATOK:

select concat(veznev,' ',kernev) as ügyfél, rendeles, omg from ugyfel, rendeles where rendeles like '%vér%' and ugyfel.id=rendeles.ugyfel;

select concat(veznev,' ',kernev) as felhasználó, count(rendeles) from ugyfel, rendeles where ugyfel.id=rendeles.ugyfel group by ugyfel.id order by count(rendeles) desc limit 1;

select concat(veznev,' ',kernev) as Név, email, regisztracio from ugyfel where regisztracio > '2010-01-01' and regisztracio < '2014-12-31' order by regisztracio asc;

select avg(omg) from rendeles;

select concat(veznev,' ',kernev) as Név, email, rendeles, omg from ugyfel, rendeles where ugyfel.id=rendeles.id order by veznev asc;

select * from ugyfel full outer join rendeles on ugyfel.id=rendeles.ugyfel;
