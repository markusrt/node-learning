# Nächste Schritte

Diese Datei zeigt dir, wo du gerade stehst und was als Nächstes kommt. Nach jedem Meilenstein wird sie aktualisiert.

## Aktueller Stand: Meilenstein 1 — Backend-Grundgerüst ✅

Du hast das Backend-Grundgerüst aufgebaut:

- Express-Server mit cors-Middleware und JSON-Body-Parser
- Router in eigener Datei (`routes.js`) mit sauberer Trennung
- Status-Endpunkt `GET /api/status` gibt `{ "status": "ok" }` zurück
- Drei Platzhalter-Endpunkte für die Kalkulationsarten (POST, HTTP 501)
- Glossar um 7 neue Begriffe erweitert (Endpunkt, HTTP, Request, Response, REST-API, Router, Statuscode)

## Nächster Schritt: Meilenstein 2 — Einkaufskalkulation

### Ziel

Die erste echte Berechnungslogik wird implementiert: Die Einkaufskalkulation berechnet den Bezugspreis aus dem Listeneinkaufspreis. Dazu schreibst du deine erste JavaScript-Funktion mit Parametern und Rückgabewerten — und testest sie mit automatischen Tests.

### Was du tun musst

#### Schritt 1: Kalkulationsmodul erstellen (`backend/src/calculation.js`)

Erstelle eine neue Datei mit der Funktion `calculateForward(input)`. Zunächst implementierst du nur den Einkaufsteil:

```
Listeneinkaufspreis
- Liefererrabatt (% vom Listeneinkaufspreis)
= Zieleinkaufspreis
- Liefererskonto (% vom Zieleinkaufspreis)
= Bareinkaufspreis
+ Bezugskosten
= Bezugspreis
```

#### Schritt 2: Hilfsfunktion für Rundung

Erstelle eine Funktion `roundToTwo(value)`, die Werte auf zwei Nachkommastellen rundet. Diese wird in allen Berechnungen verwendet.

#### Schritt 3: Unit-Tests schreiben (`backend/tests/calculation.test.js`)

Schreibe Tests mit bekannten Beispielrechnungen, um sicherzustellen, dass die Formeln korrekt sind.

#### Schritt 4: Dokumentation

- Erstelle `docs/meilenstein-2.md` mit Erklärung der Kalkulationsformeln
- Erweitere das Glossar um neue Begriffe (Funktion, Variable, Parameter, etc.)

### Welche Dateien werden verändert?

| Datei | Status | Beschreibung |
|-------|--------|-------------|
| `backend/src/calculation.js` | Neu | Einkaufskalkulationslogik |
| `backend/tests/calculation.test.js` | Neu | Unit-Tests für die Berechnung |
| `docs/meilenstein-2.md` | Neu | Anleitung für diesen Meilenstein |
| `docs/glossar.md` | Erweitert | Neue Begriffe (Funktion, Variable, etc.) |
| `docs/naechste-schritte.md` | Aktualisiert | Vorschau auf Meilenstein 3 |

### Neue Konzepte

| Konzept | Kurz erklärt |
|---------|-------------|
| Funktion | Ein wiederverwendbarer Code-Block mit Namen, Parametern und Rückgabewert |
| Variable | Ein benannter Speicherplatz für Werte (`const`, `let`) |
| Modul | Eine Datei, die Funktionen exportiert und von anderen Dateien importiert werden kann |
| Unit-Test | Ein automatischer Test, der prüft ob eine einzelne Funktion korrekt arbeitet |

### Wie du startest

1. Öffne das Projekt in VS Code
2. Erstelle die Datei `backend/src/calculation.js`
3. Implementiere `roundToTwo` und den Einkaufsteil von `calculateForward`
4. Erstelle `backend/tests/calculation.test.js` und schreibe Tests
5. Führe die Tests aus mit `cd backend && npm test`
6. Wenn alle Tests grün sind: Git-Commit und weiter zur Dokumentation
