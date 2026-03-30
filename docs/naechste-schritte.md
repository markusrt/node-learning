# Nächste Schritte

Diese Datei zeigt dir, wo du gerade stehst und was als Nächstes kommt. Nach jedem Meilenstein wird sie aktualisiert.

## Aktueller Stand: Meilenstein 7 — Differenzkalkulation komplett ✅

Du hast die Differenzkalkulation nach dem gleichen Muster wie die Vorwärts- und Rückwärtskalkulation umgesetzt:

- `DifferencePage.jsx` mit Formular (8 Eingabefelder: Einkaufs- und Verkaufsseite) und Ergebnis-Tabelle
- POST-Handler in `routes.js` ruft `calculateDifference` auf und gibt das Ergebnis zurück
- Navigation in `App.jsx` zeigt jetzt alle drei Kalkulationsarten
- Der Unterschied: Zwei Preise als Eingabe (Einkaufs- und Verkaufspreis), Gewinn als Ergebnis

## Nächster Schritt: Meilenstein 8 — Eingabevalidierung

### Ziel

Du implementierst die Eingabevalidierung im Backend und eine minimale Prüfung im Frontend. Der Benutzer bekommt hilfreiche Fehlermeldungen bei falschen Eingaben.

### Was du tun musst

#### Schritt 1: Backend-Validierung

Erstelle `backend/src/validation.js` mit einer `validateInput(data, fields)` Funktion. Implementiere Regeln für Pflichtfelder, numerische Werte, keine negativen Beträge und Prozentwerte zwischen 0 und 100. Integriere die Validierung in alle drei Route-Handler.

#### Schritt 2: Unit-Tests für die Validierung

Schreibe Tests für die Validierungsfunktion: leeres Feld, nicht-numerischer Wert, negativer Wert, Prozentwert > 100.

#### Schritt 3: Property-Tests für die Validierung

Schreibe Property-Tests, die prüfen, dass ungültige Eingaben immer abgelehnt werden und Prozentwerte nur im Bereich 0–100 akzeptiert werden.

#### Schritt 4: Minimale Frontend-Validierung

Füge in jeder Seiten-Komponente eine einfache Prüfung hinzu: Sind alle Felder ausgefüllt? Zeige Backend-Fehlermeldungen neben den betroffenen Feldern an.

### Welche Dateien werden verändert?

| Datei | Status | Beschreibung |
| --- | --- | --- |
| `backend/src/validation.js` | Neu | Validierungsfunktion für Eingabedaten |
| `backend/src/routes.js` | Erweitert | Validierung vor der Berechnung aufrufen |
| `backend/tests/validation.test.js` | Neu | Unit-Tests für Validierung |
| `backend/tests/validation.prop.test.js` | Neu | Property-Tests für Validierung |
| `frontend/src/pages/ForwardPage.jsx` | Erweitert | Minimale Frontend-Prüfung |
| `frontend/src/pages/BackwardPage.jsx` | Erweitert | Minimale Frontend-Prüfung |
| `frontend/src/pages/DifferencePage.jsx` | Erweitert | Minimale Frontend-Prüfung |

### Neue Konzepte

- **Bedingung/if-else** — Entscheidungen im Code treffen
- **Fehlerbehandlung** — try/catch und HTTP-Statuscodes
- **Validierung** — Eingaben prüfen, bevor sie verarbeitet werden
- **HTTP-Statuscode 400/500** — Unterschied zwischen Client- und Serverfehlern

### Wie du startest

1. Erstelle `backend/src/validation.js` mit der Validierungsfunktion
2. Integriere die Validierung in `backend/src/routes.js`
3. Schreibe die Tests in `backend/tests/validation.test.js` und `backend/tests/validation.prop.test.js`
4. Füge minimale Frontend-Prüfungen in die Seiten-Komponenten ein
5. Starte Backend und Frontend und teste mit ungültigen Eingaben
