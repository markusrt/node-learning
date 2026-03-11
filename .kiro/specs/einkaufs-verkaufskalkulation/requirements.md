# Anforderungsdokument: Einkaufs- und Verkaufskalkulation

## Einleitung

Dieses Projekt ist eine Lern-Webanwendung für Schüler der 9. Klasse (Wirtschaftsschule), die die Handelskalkulation (Einkaufskalkulation und Verkaufskalkulation) Schritt für Schritt vermittelt. Die Anwendung besteht aus einem einfachen Frontend und Backend in JavaScript. Das Projekt ist so strukturiert, dass ein Programmieranfänger es schrittweise aufbauen kann, wobei Zwischenstände als Git-Tags markiert werden.

## Glossar

- **Kalkulationsrechner**: Die Webanwendung, die Einkaufs- und Verkaufskalkulationen berechnet
- **Einkaufskalkulation (Vorwärtskalkulation)**: Berechnung vom Listeneinkaufspreis zum Einstandspreis (Bezugspreis)
- **Verkaufskalkulation (Vorwärtskalkulation)**: Berechnung vom Bezugspreis zum Listenverkaufspreis
- **Listeneinkaufspreis**: Der vom Lieferanten angegebene Preis vor Abzügen
- **Liefererrabatt**: Prozentualer Rabatt des Lieferanten auf den Listeneinkaufspreis
- **Zieleinkaufspreis**: Listeneinkaufspreis abzüglich Liefererrabatt
- **Liefererskonto**: Prozentualer Skonto des Lieferanten auf den Zieleinkaufspreis
- **Bareinkaufspreis**: Zieleinkaufspreis abzüglich Liefererskonto
- **Bezugskosten**: Zusätzliche Kosten für Transport, Verpackung etc.
- **Bezugspreis (Einstandspreis)**: Bareinkaufspreis zuzüglich Bezugskosten
- **Handlungskostenzuschlag**: Prozentualer Zuschlag für Gemeinkosten des Händlers
- **Selbstkostenpreis**: Bezugspreis zuzüglich Handlungskostenzuschlag
- **Gewinnzuschlag**: Prozentualer Gewinnaufschlag auf den Selbstkostenpreis
- **Barverkaufspreis**: Selbstkostenpreis zuzüglich Gewinnzuschlag
- **Kundenskonto**: Prozentualer Skonto für den Kunden auf den Zielverkaufspreis
- **Zielverkaufspreis**: Barverkaufspreis zuzüglich Kundenskonto (Aufschlag, nicht Abzug)
- **Kundenrabatt**: Prozentualer Rabatt für den Kunden
- **Listenverkaufspreis**: Zielverkaufspreis zuzüglich Kundenrabatt (Aufschlag, nicht Abzug)
- **Rückwärtskalkulation**: Berechnung vom Listenverkaufspreis zurück zum Listeneinkaufspreis
- **Differenzkalkulation**: Ermittlung des Gewinns bei gegebenem Einkaufs- und Verkaufspreis
- **Kalkulationsschema**: Die vollständige Berechnungskette der Handelskalkulation
- **Backend**: Der Node.js/Express-Server, der die Berechnungslogik bereitstellt
- **Frontend**: Die React-Benutzeroberfläche zur Eingabe und Anzeige der Kalkulation

## Anforderungen

### Anforderung 1: Einkaufskalkulation (Vorwärtskalkulation Einkauf)

**User Story:** Als Schüler möchte ich den Bezugspreis aus dem Listeneinkaufspreis berechnen, damit ich die Einkaufskalkulation verstehe und üben kann.

#### Akzeptanzkriterien

1. WENN der Benutzer einen Listeneinkaufspreis, einen Liefererrabatt (%), einen Liefererskonto (%) und Bezugskosten (€) eingibt, DANN SOLL der Kalkulationsrechner den Zieleinkaufspreis, den Bareinkaufspreis und den Bezugspreis berechnen und anzeigen
2. WENN der Benutzer die Einkaufskalkulation auslöst, DANN SOLL der Kalkulationsrechner alle Zwischenergebnisse (Zieleinkaufspreis, Bareinkaufspreis, Bezugspreis) einzeln und nachvollziehbar darstellen
3. WENN ein Eingabefeld leer ist oder einen ungültigen Wert enthält, DANN SOLL der Kalkulationsrechner eine verständliche Fehlermeldung anzeigen und keine Berechnung durchführen
4. WENN Prozentwerte eingegeben werden, DANN SOLL der Kalkulationsrechner nur Werte zwischen 0 und 100 akzeptieren

### Anforderung 2: Verkaufskalkulation (Vorwärtskalkulation Verkauf)

**User Story:** Als Schüler möchte ich den Listenverkaufspreis aus dem Bezugspreis berechnen, damit ich die Verkaufskalkulation verstehe und üben kann.

#### Akzeptanzkriterien

1. WENN der Benutzer einen Bezugspreis, einen Handlungskostenzuschlag (%), einen Gewinnzuschlag (%), einen Kundenskonto (%) und einen Kundenrabatt (%) eingibt, DANN SOLL der Kalkulationsrechner den Selbstkostenpreis, den Barverkaufspreis, den Zielverkaufspreis und den Listenverkaufspreis berechnen und anzeigen
2. WENN der Benutzer die Verkaufskalkulation auslöst, DANN SOLL der Kalkulationsrechner alle Zwischenergebnisse einzeln und nachvollziehbar darstellen
3. WENN Kundenskonto oder Kundenrabatt eingegeben werden, DANN SOLL der Kalkulationsrechner diese als Aufschlag berechnen (Hundert-im-Hundert-Rechnung: Barverkaufspreis / (1 - Skontosatz) = Zielverkaufspreis)

### Anforderung 3: Gesamtkalkulation (Vorwärtskalkulation komplett)

**User Story:** Als Schüler möchte ich die komplette Handelskalkulation vom Listeneinkaufspreis bis zum Listenverkaufspreis durchführen, damit ich den gesamten Kalkulationsweg verstehe.

#### Akzeptanzkriterien

1. WENN der Benutzer alle Eingabewerte für die Gesamtkalkulation eingibt (Listeneinkaufspreis, Liefererrabatt, Liefererskonto, Bezugskosten, Handlungskostenzuschlag, Gewinnzuschlag, Kundenskonto, Kundenrabatt), DANN SOLL der Kalkulationsrechner das vollständige Kalkulationsschema vom Listeneinkaufspreis bis zum Listenverkaufspreis berechnen und anzeigen
2. WENN die Gesamtkalkulation angezeigt wird, DANN SOLL der Kalkulationsrechner das Ergebnis in einer übersichtlichen Tabelle mit allen Zwischenschritten darstellen

### Anforderung 4: Rückwärtskalkulation

**User Story:** Als Schüler möchte ich vom Listenverkaufspreis zurück zum Listeneinkaufspreis rechnen, damit ich die Rückwärtskalkulation verstehe.

#### Akzeptanzkriterien

1. WENN der Benutzer einen Listenverkaufspreis und alle Prozentsätze eingibt, DANN SOLL der Kalkulationsrechner den Listeneinkaufspreis und alle Zwischenwerte rückwärts berechnen
2. WENN die Rückwärtskalkulation durchgeführt wird, DANN SOLL der Kalkulationsrechner die Berechnung in umgekehrter Reihenfolge (von unten nach oben) nachvollziehbar darstellen

### Anforderung 5: Differenzkalkulation

**User Story:** Als Schüler möchte ich bei gegebenem Einkaufs- und Verkaufspreis den Gewinn ermitteln, damit ich die Differenzkalkulation verstehe.

#### Akzeptanzkriterien

1. WENN der Benutzer einen Listeneinkaufspreis, einen Listenverkaufspreis und alle Prozentsätze (außer Gewinnzuschlag) eingibt, DANN SOLL der Kalkulationsrechner den Gewinn in Euro und als Prozentsatz berechnen
2. WENN die Differenzkalkulation durchgeführt wird, DANN SOLL der Kalkulationsrechner den Selbstkostenpreis und den Barverkaufspreis gegenüberstellen und die Differenz als Gewinn ausweisen

### Anforderung 6: Berechnungslogik im Backend

**User Story:** Als Schüler möchte ich, dass die Berechnungen im Backend stattfinden, damit ich lerne, wie Frontend und Backend zusammenarbeiten.

#### Akzeptanzkriterien

1. WENN das Frontend eine Kalkulationsanfrage sendet, DANN SOLL das Backend die Berechnung durchführen und das Ergebnis als JSON zurückgeben
2. WENN das Backend eine Berechnung durchführt, DANN SOLL das Backend alle Zwischenergebnisse auf zwei Nachkommastellen runden
3. WENN das Backend ungültige Eingabedaten empfängt, DANN SOLL das Backend einen HTTP-Fehlercode (400) mit einer verständlichen Fehlermeldung zurückgeben
4. DAS Backend SOLL eine REST-API mit getrennten Endpunkten für Vorwärtskalkulation, Rückwärtskalkulation und Differenzkalkulation bereitstellen

### Anforderung 7: Benutzeroberfläche

**User Story:** Als Schüler möchte ich eine übersichtliche und einfache Benutzeroberfläche, damit ich mich auf die Kalkulation konzentrieren kann.

#### Akzeptanzkriterien

1. WENN die Anwendung gestartet wird, DANN SOLL das Frontend eine Navigation anzeigen, über die der Benutzer zwischen Vorwärtskalkulation, Rückwärtskalkulation und Differenzkalkulation wählen kann
2. WENN der Benutzer eine Kalkulationsart auswählt, DANN SOLL das Frontend ein Formular mit den passenden Eingabefeldern anzeigen
3. WENN der Benutzer das Formular absendet, DANN SOLL das Frontend die Eingaben an das Backend senden und das Ergebnis als Kalkulationsschema-Tabelle anzeigen
4. WENN ein Berechnungsergebnis angezeigt wird, DANN SOLL das Frontend alle Beträge mit dem Euro-Zeichen (€) und zwei Nachkommastellen formatieren
5. WENN ein Berechnungsergebnis angezeigt wird, DANN SOLL das Frontend alle Prozentwerte mit dem Prozentzeichen (%) formatieren

### Anforderung 8: Eingabevalidierung

**User Story:** Als Schüler möchte ich hilfreiche Fehlermeldungen bei falschen Eingaben sehen, damit ich meine Fehler verstehe und korrigieren kann.

#### Akzeptanzkriterien

1. WENN ein Pflichtfeld leer gelassen wird, DANN SOLL der Kalkulationsrechner das Feld visuell hervorheben und eine Meldung wie „Bitte gib einen Wert ein" anzeigen
2. WENN ein nicht-numerischer Wert eingegeben wird, DANN SOLL der Kalkulationsrechner eine Meldung wie „Bitte gib eine gültige Zahl ein" anzeigen
3. WENN ein negativer Wert eingegeben wird, DANN SOLL der Kalkulationsrechner eine Meldung wie „Der Wert darf nicht negativ sein" anzeigen
4. WENN ein Prozentwert größer als 100 eingegeben wird, DANN SOLL der Kalkulationsrechner eine Meldung wie „Der Prozentwert darf nicht größer als 100 sein" anzeigen

### Anforderung 9: Lernprojekt-Struktur mit Git-Meilensteinen

**User Story:** Als Schüler möchte ich das Projekt schrittweise aufbauen und jeden Fortschritt als Git-Tag sichern, damit ich meinen Lernfortschritt nachvollziehen kann.

#### Akzeptanzkriterien

1. DAS Projekt SOLL in klar definierte Meilensteine unterteilt sein, die jeweils als Git-Tag markiert werden
2. WENN ein Meilenstein abgeschlossen ist, DANN SOLL der aktuelle Stand als Git-Tag mit einer beschreibenden Nachricht auf Deutsch gespeichert werden
3. WENN ein neuer Meilenstein beginnt, DANN SOLL der vorherige Meilenstein vollständig funktionsfähig sein
4. JEDER Meilenstein SOLL eine klare Anleitung enthalten, die erklärt, was in diesem Schritt gelernt und umgesetzt wird
5. WENN der erste Meilenstein (Meilenstein 0) erreicht wird, DANN SOLL die Anleitung erklären, wie das Projekt aufgesetzt wird und welche Software installiert werden muss (Node.js, npm, Git, Editor)
6. WENN ein weiterer Meilenstein beginnt, DANN SOLL die Anleitung beschreiben, welcher Code geschrieben und getestet wird und welche neuen Konzepte eingeführt werden
7. INNERHALB eines Meilensteins SOLL der Fortschritt in mehreren kleinen, nachvollziehbaren Git-Commits festgehalten werden, nicht in einem einzigen großen Commit
8. ALLE Git-Commit-Nachrichten SOLLEN auf Deutsch verfasst sein und klar beschreiben, was im jeweiligen Commit geändert wurde

### Anforderung 10: Serialisierung der Kalkulationsdaten

**User Story:** Als Schüler möchte ich, dass die Kalkulationsdaten als JSON zwischen Frontend und Backend übertragen werden, damit ich das JSON-Format kennenlerne.

#### Akzeptanzkriterien

1. WENN das Frontend Eingabedaten an das Backend sendet, DANN SOLL der Kalkulationsrechner die Daten als JSON-Objekt serialisieren
2. WENN das Backend ein Ergebnis zurückgibt, DANN SOLL der Kalkulationsrechner das Ergebnis als JSON-Objekt deserialisieren und korrekt darstellen
3. FÜR ALLE gültigen Kalkulationseingaben SOLL das Serialisieren und anschließende Deserialisieren der Daten ein äquivalentes Objekt ergeben (Round-Trip-Eigenschaft)
