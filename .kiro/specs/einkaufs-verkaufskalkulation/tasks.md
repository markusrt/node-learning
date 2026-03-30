# Implementierungsplan: Einkaufs- und Verkaufskalkulation

## Übersicht

Schrittweiser Aufbau eines Lernprojekts für die Handelskalkulation. Jeder Meilenstein baut auf dem vorherigen auf. Code ist auf Englisch, Kommentare und UI-Texte auf Deutsch. Git-Commits sind auf Deutsch und in kleinen, nachvollziehbaren Schritten.

## Aufgaben

- [x] 1. Meilenstein 0: Projektstruktur aufsetzen (v0-projektstart)
  - [x] 1.1 Erstelle die Projektstruktur mit `backend/` und `frontend/` Ordnern
    - Erstelle `backend/package.json` mit Express, cors als Abhängigkeiten und Vitest, fast-check als Dev-Abhängigkeiten
    - Erstelle `backend/src/server.js` mit einem minimalen Express-Server (Port 3001)
    - Erstelle `frontend/` mit Vite + React via `npm create vite@latest` Konfiguration
    - Erstelle eine `README.md` mit Anleitung: Was muss installiert werden (Node.js, npm, Git, VS Code), wie startet man das Projekt
    - Erstelle `docs/meilenstein-0.md` als Anleitung mit: Schritt-für-Schritt-Installationsanleitung, Verweis auf das zentrale Glossar mit Liste der neuen Begriffe, Abschnitt „Was hat sich im Code geändert?" mit Dateiübersicht und Erklärung der neuen/geänderten Dateien
    - Erstelle `docs/glossar.md` als zentrales Glossar (alphabetisch sortiert) mit den Begriffen dieses Meilensteins: Abhängigkeit, Backend, Build-Tool, CSS, Express, Frontend, Git, JSON, LTS, Middleware, Node.js, npm, package.json, Port, Proxy, React, Repository, Server, Terminal, Vite, VS Code
    - Erstelle `docs/naechste-schritte.md` mit: aktuellem Stand (Meilenstein 0 ✅), Vorschau auf Meilenstein 1 (welche Dateien, welche Konzepte, wie man startet)
    - _Requirements: 9.1, 9.4, 9.5_

- [x] 2. Meilenstein 1: Backend-Grundgerüst (v1-backend-grundgeruest)
  - [x] 2.1 Erstelle den Express-Server mit Test-Endpunkt
    - Erstelle `backend/src/server.js` mit Express, cors-Middleware und JSON-Body-Parser
    - Erstelle einen GET-Endpunkt `/api/status` der `{ "status": "ok" }` zurückgibt
    - Erstelle `backend/src/routes.js` mit dem Router-Grundgerüst (POST-Endpunkte für `/api/forward`, `/api/backward`, `/api/difference` die HTTP 501 mit `{ "message": "Noch nicht implementiert" }` zurückgeben)
    - Teste die Endpunkte manuell mit `curl` oder im Browser (Status-Endpunkt: 200 OK, Kalkulations-Endpunkte: 501 Not Implemented)
    - Erstelle `docs/meilenstein-1.md` als Anleitung mit: Erklärung was ein Server ist und wie Express funktioniert, Verweis auf das zentrale Glossar mit Liste der neuen Begriffe, Mermaid-Diagramm das den Request-Response-Zyklus zeigt (Browser → Server → Antwort), Abschnitt „Was hat sich im Code geändert?" mit Dateiübersicht und Erklärung der neuen/geänderten Dateien
    - Erweitere `docs/glossar.md` (alphabetisch sortiert) um neue Begriffe: Endpunkt, HTTP, Request, Response, REST-API, Router, Statuscode
    - Aktualisiere `docs/naechste-schritte.md` mit: aktuellem Stand (Meilenstein 1 ✅), Vorschau auf Meilenstein 2 (welche Dateien, welche Konzepte, wie man startet)
    - _Requirements: 6.4, 9.4, 9.6_

- [x] 3. Meilenstein 2: Einkaufskalkulation Backend (v2-einkaufskalkulation)
  - [x] 3.1 Implementiere die Einkaufskalkulationslogik
    - Erstelle `backend/src/calculation.js` mit der Funktion `calculateForward(input)` — zunächst nur den Einkaufsteil (Listeneinkaufspreis → Bezugspreis)
    - Implementiere `roundToTwo(value)` Hilfsfunktion
    - Implementiere die Formeln: Zieleinkaufspreis = Listeneinkaufspreis × (1 - Rabatt/100), Bareinkaufspreis = Zieleinkaufspreis × (1 - Skonto/100), Bezugspreis = Bareinkaufspreis + Bezugskosten
    - Erstelle `docs/meilenstein-2.md` als Anleitung mit: Erklärung der Kalkulationsformeln und wie man Funktionen schreibt, Verweis auf das zentrale Glossar mit Liste der neuen Begriffe, Mermaid-Flussdiagramm der Einkaufskalkulation (Listeneinkaufspreis → Zieleinkaufspreis → Bareinkaufspreis → Bezugspreis), Abschnitt „Was hat sich im Code geändert?" mit Dateiübersicht und Erklärung der neuen/geänderten Dateien
    - Erweitere `docs/glossar.md` (alphabetisch sortiert) um neue Begriffe: const/let, Datentyp Number, Funktion, Modul, Parameter, require/module.exports, Rückgabewert, Variable
    - Aktualisiere `docs/naechste-schritte.md` mit: aktuellem Stand (Meilenstein 2 ✅), Vorschau auf Meilenstein 3 (welche Dateien, welche Konzepte, wie man startet)
    - _Requirements: 1.1, 1.2, 6.2_

  - [x] 3.2 Schreibe Unit-Tests für die Einkaufskalkulation
    - Erstelle `backend/tests/calculation.test.js` mit bekannten Beispielrechnungen
    - Teste: Listeneinkaufspreis 100€, 10% Rabatt, 2% Skonto, 5€ Bezugskosten → Bezugspreis 93,20€
    - Teste Edge-Case: Alle Prozentsätze = 0, Bezugskosten = 0
    - _Requirements: 1.1, 6.2_

- [x] 4. Meilenstein 3: Verkaufskalkulation Backend (v3-verkaufskalkulation)
  - [x] 4.1 Erweitere `calculateForward` um die Verkaufskalkulation
    - Implementiere: Selbstkostenpreis = Bezugspreis × (1 + HKZ/100), Barverkaufspreis = Selbstkostenpreis × (1 + Gewinn/100)
    - Implementiere Hundert-im-Hundert-Rechnung: Zielverkaufspreis = Barverkaufspreis / (1 - Skonto/100), Listenverkaufspreis = Zielverkaufspreis / (1 - Rabatt/100)
    - Baue das `steps`-Array mit allen 15 Schritten (deutsche Labels) auf
    - Erstelle `docs/meilenstein-3.md` als Anleitung mit: Erklärung der Hundert-im-Hundert-Rechnung und warum Division statt Multiplikation, Verweis auf das zentrale Glossar mit Liste der neuen Begriffe, Mermaid-Diagramm des vollständigen Kalkulationsschemas (Listeneinkaufspreis → ... → Listenverkaufspreis) mit Rückwärtskalkulation als umgekehrtem Pfad, Abschnitt „Was hat sich im Code geändert?" mit Dateiübersicht und Erklärung der neuen/geänderten Dateien
    - Erweitere `docs/glossar.md` (alphabetisch sortiert) um neue Begriffe: Array, Assertion, Hundert-im-Hundert-Rechnung, Objekt/Object, Property-Based Test, Testframework, Unit-Test
    - Aktualisiere `docs/naechste-schritte.md` mit: aktuellem Stand (Meilenstein 3 ✅), Vorschau auf Meilenstein 4 (welche Dateien, welche Konzepte, wie man startet)
    - _Requirements: 2.1, 2.3, 3.1_

  - [x] 4.2 Implementiere die Rückwärtskalkulation
    - Erstelle `calculateBackward(input)` in `backend/src/calculation.js`
    - Implementiere die umgekehrten Formeln: Listenverkaufspreis → Listeneinkaufspreis
    - Baue das `steps`-Array in umgekehrter Reihenfolge auf
    - _Requirements: 4.1, 4.2_

  - [x] 4.3 Implementiere die Differenzkalkulation
    - Erstelle `calculateDifference(input)` in `backend/src/calculation.js`
    - Berechne Einkaufsseite (→ Selbstkostenpreis) und Verkaufsseite (→ Barverkaufspreis)
    - Berechne Gewinn = Barverkaufspreis - Selbstkostenpreis und Gewinn% = (Gewinn / Selbstkostenpreis) × 100
    - _Requirements: 5.1, 5.2_

  - [x] 4.4 Schreibe Unit-Tests für Verkaufs-, Rückwärts- und Differenzkalkulation
    - Teste Vorwärtskalkulation komplett mit bekanntem Beispiel
    - Teste Rückwärtskalkulation mit bekanntem Beispiel
    - Teste Differenzkalkulation mit bekanntem Beispiel
    - _Requirements: 2.1, 4.1, 5.1_

  - [x] 4.5 Schreibe Property-Test: Round-Trip Vorwärts/Rückwärts
    - **Property 1: Round-Trip Vorwärts-/Rückwärtskalkulation**
    - **Validates: Requirements 1.1, 2.1, 3.1, 4.1**

  - [x] 4.6 Schreibe Property-Test: Hundert-im-Hundert-Rechnung
    - **Property 2: Hundert-im-Hundert-Rechnung für Skonto und Rabatt**
    - **Validates: Requirements 2.3**

  - [x] 4.7 Schreibe Property-Test: Differenzkalkulation Gewinn
    - **Property 3: Differenzkalkulation Gewinnberechnung**
    - **Validates: Requirements 5.1**

  - [x] 4.8 Schreibe Property-Test: Rundung auf zwei Nachkommastellen
    - **Property 4: Rundung auf zwei Nachkommastellen**
    - **Validates: Requirements 6.2**

  - [x] 4.9 Schreibe Property-Test: Ergebnis enthält alle Schritte
    - **Property 8: Ergebnis enthält alle erwarteten Schritte**
    - **Validates: Requirements 1.2, 2.2, 4.2**

  - [x] 4.10 Schreibe Property-Test: JSON Round-Trip
    - **Property 7: JSON-Serialisierung Round-Trip**
    - **Validates: Requirements 10.1, 10.2, 10.3**

- [x] 5. Checkpoint — Sicherstellen, dass alle Backend-Tests bestehen
  - Alle Tests ausführen, bei Fragen den Benutzer fragen.

- [x] 6. Meilenstein 4: Frontend-Grundgerüst (v4-frontend-grundgeruest)
  - [x] 6.1 Erstelle die React-App mit Navigation
    - Erstelle `frontend/src/App.jsx` mit einer einfachen Tab-Navigation (Vorwärtskalkulation, Rückwärtskalkulation, Differenzkalkulation)
    - Erstelle `frontend/src/App.css` mit einfachem, sauberem Styling
    - Erstelle `docs/meilenstein-4.md` als Anleitung mit: Erklärung was React ist und wie Komponenten funktionieren, Verweis auf das zentrale Glossar mit Liste der neuen Begriffe, Mermaid-Diagramm der Komponentenstruktur (App → Navigation → Seiten → Formular/Tabelle), Abschnitt „Was hat sich im Code geändert?" mit Dateiübersicht und Erklärung der neuen/geänderten Dateien
    - Erweitere `docs/glossar.md` (alphabetisch sortiert) um neue Begriffe: JSX, Komponente, Props, Selektor (CSS), State, useState
    - Aktualisiere `docs/naechste-schritte.md` mit: aktuellem Stand (Meilenstein 4 ✅), Vorschau auf Meilenstein 5 (welche Dateien, welche Konzepte, wie man startet)
    - _Requirements: 7.1, 9.6_

  - [x] 6.2 Erstelle die wiederverwendbaren Komponenten
    - Erstelle `frontend/src/components/InputField.jsx` — Eingabefeld mit Label und Fehlermeldung
    - Erstelle `frontend/src/components/ResultTable.jsx` — Tabelle zur Anzeige des `steps`-Arrays mit Euro- und Prozent-Formatierung
    - Erstelle `frontend/src/components/ErrorDisplay.jsx` — Anzeige von Backend-Fehlermeldungen
    - _Requirements: 7.2, 7.4, 7.5_

  - [x] 6.3 Erstelle die API-Hilfsfunktion
    - Erstelle `frontend/src/api.js` mit der `calculate(calculationType, input)` Funktion
    - Konfiguriere den Vite-Proxy in `frontend/vite.config.js` um `/api` Requests an `localhost:3001` weiterzuleiten
    - _Requirements: 6.1, 10.1, 10.2_

- [x] 7. Meilenstein 5: Vorwärtskalkulation komplett (v5-vorwaerts-komplett)
  - [x] 7.1 Erstelle die Vorwärtskalkulation-Seite
    - Erstelle `frontend/src/pages/ForwardPage.jsx` mit Formular (8 Eingabefelder) und Ergebnis-Tabelle
    - Verbinde das Formular mit dem Backend-Endpunkt `/api/forward`
    - Zeige das Ergebnis in der `ResultTable`-Komponente an
    - Erstelle `docs/meilenstein-5.md` als Anleitung mit: Erklärung von fetch und async/await und wie Frontend und Backend zusammenarbeiten, Verweis auf das zentrale Glossar mit Liste der neuen Begriffe, Mermaid-Sequenzdiagramm des Datenflusses (Benutzer → Formular → fetch → Express → Berechnung → JSON → Tabelle), Abschnitt „Was hat sich im Code geändert?" mit Dateiübersicht und Erklärung der neuen/geänderten Dateien
    - Erweitere `docs/glossar.md` (alphabetisch sortiert) um neue Begriffe: async/await, Event-Handler, fetch, onSubmit, preventDefault, Promise
    - Aktualisiere `docs/naechste-schritte.md` mit: aktuellem Stand (Meilenstein 5 ✅), Vorschau auf Meilenstein 6 (welche Dateien, welche Konzepte, wie man startet)
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 7.2, 7.3_

  - [x] 7.2 Verdrahte den Backend-Endpunkt `/api/forward`
    - Implementiere den POST-Handler in `backend/src/routes.js` der `calculateForward` aufruft und das Ergebnis zurückgibt
    - _Requirements: 6.1, 6.4_

- [x] 8. Meilenstein 6: Rückwärtskalkulation komplett (v6-rueckwaerts)
  - [x] 8.1 Erstelle die Rückwärtskalkulation-Seite
    - Erstelle `frontend/src/pages/BackwardPage.jsx` mit Formular und Ergebnis-Tabelle
    - Verbinde mit Backend-Endpunkt `/api/backward`
    - Aktualisiere `docs/naechste-schritte.md` mit: aktuellem Stand (Meilenstein 6 ✅), Vorschau auf Meilenstein 7 (welche Dateien, welche Konzepte, wie man startet)
    - _Requirements: 4.1, 4.2, 7.2, 7.3_

  - [x] 8.2 Verdrahte den Backend-Endpunkt `/api/backward`
    - Implementiere den POST-Handler in `backend/src/routes.js`
    - _Requirements: 6.1, 6.4_

- [ ] 9. Meilenstein 7: Differenzkalkulation komplett (v7-differenz)
  - [ ] 9.1 Erstelle die Differenzkalkulation-Seite
    - Erstelle `frontend/src/pages/DifferencePage.jsx` mit Formular und Ergebnis-Tabelle
    - Verbinde mit Backend-Endpunkt `/api/difference`
    - Aktualisiere `docs/naechste-schritte.md` mit: aktuellem Stand (Meilenstein 7 ✅), Vorschau auf Meilenstein 8 (welche Dateien, welche Konzepte, wie man startet)
    - _Requirements: 5.1, 5.2, 7.2, 7.3_

  - [ ] 9.2 Verdrahte den Backend-Endpunkt `/api/difference`
    - Implementiere den POST-Handler in `backend/src/routes.js`
    - _Requirements: 6.1, 6.4_

- [ ] 10. Checkpoint — Sicherstellen, dass alle drei Kalkulationsarten funktionieren
  - Alle Tests ausführen, bei Fragen den Benutzer fragen.

- [ ] 11. Meilenstein 8: Eingabevalidierung (v8-validierung)
  - [ ] 11.1 Implementiere die Backend-Validierung
    - Erstelle `backend/src/validation.js` mit `validateInput(data, fields)` Funktion
    - Implementiere Regeln: Pflichtfelder, numerische Werte, keine negativen Beträge, Prozentwerte 0–100
    - Integriere die Validierung in alle drei Route-Handler (vor der Berechnung aufrufen, bei Fehler HTTP 400 zurückgeben)
    - Erstelle `docs/meilenstein-8.md` als Anleitung mit: Erklärung was Validierung ist und warum sie im Backend stattfinden muss, Verweis auf das zentrale Glossar mit Liste der neuen Begriffe, Mermaid-Diagramm des Validierungsflusses (Eingabe → Frontend-Check → Backend-Validierung → Berechnung oder Fehler), Abschnitt „Was hat sich im Code geändert?" mit Dateiübersicht und Erklärung der neuen/geänderten Dateien
    - Erweitere `docs/glossar.md` (alphabetisch sortiert) um neue Begriffe: Bedingung/if-else, Fehlerbehandlung, HTTP-Statuscode 400/500, try/catch, Validierung
    - Aktualisiere `docs/naechste-schritte.md` mit: aktuellem Stand (Meilenstein 8 ✅), Vorschau auf Meilenstein 9 (welche Dateien, welche Konzepte, wie man startet)
    - _Requirements: 1.3, 1.4, 6.3, 8.1, 8.2, 8.3, 8.4_

  - [ ] 11.2 Schreibe Unit-Tests für die Validierung
    - Teste: leeres Feld, nicht-numerischer Wert, negativer Wert, Prozentwert > 100
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [ ] 11.3 Schreibe Property-Test: Validierung lehnt ungültige Eingaben ab
    - **Property 5: Validierung lehnt ungültige Eingaben ab**
    - **Validates: Requirements 1.3, 6.3, 8.1, 8.2, 8.3**

  - [ ] 11.4 Schreibe Property-Test: Prozentwerte nur 0–100
    - **Property 6: Prozentwerte nur im Bereich 0–100**
    - **Validates: Requirements 1.4, 8.4**

  - [ ] 11.5 Implementiere minimale Frontend-Validierung
    - Füge in jeder Seiten-Komponente eine einfache Prüfung hinzu: Sind alle Felder ausgefüllt?
    - Zeige Backend-Fehlermeldungen neben den betroffenen Feldern an (über `ErrorDisplay` oder direkt in `InputField`)
    - _Requirements: 8.1, 7.3_

- [ ] 12. Meilenstein 9: Feinschliff und Styling (v9-fertig)
  - [ ] 12.1 Verbessere das CSS-Styling
    - Gestalte die Formulare übersichtlich und schülerfreundlich
    - Stelle sicher, dass die Ergebnis-Tabelle gut lesbar ist
    - Füge Farben für Zwischenergebnisse hinzu (z.B. Grün für Endwerte)
    - _Requirements: 7.1, 7.2_

  - [ ] 12.2 Schreibe Property-Test: Formatierung von Beträgen und Prozenten
    - **Property 9: Formatierung von Beträgen und Prozenten**
    - Erstelle eine Hilfsfunktion `formatCurrency(value)` und `formatPercent(value)` und teste sie
    - **Validates: Requirements 7.4, 7.5**

  - [ ] 12.3 Erstelle die finale README und Projektdokumentation
    - Aktualisiere `README.md` mit vollständiger Projektbeschreibung
    - Liste alle Meilensteine und Git-Tags auf
    - Beschreibe wie man das Projekt startet und testet
    - Aktualisiere `docs/naechste-schritte.md` mit: Projekt ist fertig ✅, Ideen für Erweiterungen
    - _Requirements: 9.1, 9.4, 9.5, 9.6_

- [ ] 13. Finaler Checkpoint — Alle Tests bestehen, Projekt ist vollständig
  - Alle Tests ausführen, bei Fragen den Benutzer fragen.

## Hinweise

- Alle Aufgaben sind verpflichtend (Tests eingeschlossen)
- Jede Aufgabe referenziert spezifische Anforderungen für Nachvollziehbarkeit
- Checkpoints stellen sicher, dass der aktuelle Stand funktioniert, bevor es weitergeht
- Property-Tests validieren universelle Korrektheitseigenschaften
- Unit-Tests validieren spezifische Beispiele und Edge-Cases
- Git-Commits innerhalb jedes Meilensteins sollen klein und auf Deutsch sein
