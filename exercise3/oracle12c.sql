;-- create table
CREATE TABLE Patienten
( pid CHAR(2) PRIMARY KEY,
 name VARCHAR2(30),
 vorname VARCHAR2(30),
 plz CHAR(5),
 stadt VARCHAR2(30),
 behandlungen XMLTYPE);
INSERT INTO Patienten VALUES ('03', 'Maier', 'Hans', '78224', 'Singen',
'<behandlungen>
    <behandlung nr = "11">
        <diagnose>Beinbruch</diagnose>
        <datum>05.10.2015</datum>
    </behandlung>
</behandlungen>');
INSERT INTO Patienten VALUES ('04', 'Huber', 'Kai', '78462', 'Konstanz',
'<behandlungen>
<behandlung nr="12">
 <diagnose>Grippe</diagnose>
 <datum>10.10.2015</datum>
</behandlung>
<behandlung nr="15">
 <diagnose>Beinbruch</diagnose>
 <datum>10.11.2015</datum>
</behandlung>
</behandlungen>'
);
INSERT INTO Patienten VALUES ('05', 'Kunz', 'Erik', '78224', 'Singen',
'<behandlungen>
<behandlung nr="37">
 <diagnose>Grippe</diagnose>
 <datum>10.10.2015</datum>
</behandlung>
<behandlung nr="52">
 <diagnose>Armbruch</diagnose>
 <datum>20.11.2015</datum>
</behandlung>
</behandlungen>'
);

;-- aufgabe 1
SELECT XMLELEMENT("Patient",
	XMLFOREST(p.vorname AS "Vorname", p.name AS "Nachname", p.stadt AS "Stadt"))
FROM Patienten p
WHERE p.stadt = 'Singen';

;-- aufgabe 2
SELECT  XMLELEMENT("Beinbruch",
          XMLFOREST(p.name, p2.datum)
          )
FROM patienten p, 
  XMLTABLE('for $i in /behandlungen/behandlung
            where $i/diagnose="Beinbruch"
            return $i' PASSING behandlungen
            COLUMNS "DATUM" varchar2(10) PATH 'datum') p2;            



