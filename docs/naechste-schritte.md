# Nächste Schritte

Diese Datei zeigt dir, wo du gerade stehst und was als Nächstes kommt. Nach jedem Meilenstein wird sie aktualisiert.

## Aktueller Stand: Meilenstein 5 — Vorwärtskalkulation komplett ✅

Du hast Frontend und Backend verbunden:

- `ForwardPage.jsx` mit Formular (8 Eingabefelder) und Ergebnis-Tabelle
- POST-Handler in `routes.js` ruft `calculateForward` auf und gibt das Ergebnis zurück
- Datenfluss: Formular → fetch → Express → Berechnung → JSON → Tabelle
- Glossar um 6 neue Begriffe erweitert (async/await, Event-Handler, fetch, onSubmit, preventDefault, Promise)

## Nächster Schritt: Meilenstein 6 — Rückwärtskalkulation komplett

### Ziel

Du erstellst die Rückwärtskalkulation-Seite nach dem gleichen Muster wie die Vorwärtskalkulation. Diesmal gibt der Benutzer den Listenverkaufspreis ein und bekommt den Listeneinkaufspreis berechnet.

### Was du tun musst

#### Schritt 1: Rückwärtskalkulation-Seite

Erstelle `BackwardPage.jsx` mit einem Formular und der Ergebnis-Tabelle. Verbinde das Formular mit dem Backend-Endpunkt `/api/backward`.

#### Schritt 2: Backend-Endpunkt verdrahten

Implementiere den POST-Handler in `routes.js`, der `calculateBackward` aufruft und das Ergebnis zurückgibt.

### Welche Dateien werden verändert?

| Datei | Status | Beschreibung |
| --- | --- | --- |
| `frontend/src/pages/BackwardPage.jsx` | Neu | Formular und Ergebnis für Rückwärtskalkulation |
| `backend/src/routes.js` | Erweitert | POST-Handler für `/api/backward` |

### Neue Konzepte

In Meilenstein 6 kommen keine neuen Konzepte dazu — du wendest das Gelernte aus Meilenstein 5 an (fetch, async/await, Event-Handler). Der Fokus liegt auf dem Wiederholen und Festigen.

### Wie du startest

1. Erstelle `frontend/src/pages/BackwardPage.jsx` (orientiere dich an `ForwardPage.jsx`)
2. Implementiere den POST-Handler in `backend/src/routes.js`
3. Importiere `BackwardPage` in `App.jsx` und ersetze den Platzhalter
4. Starte Backend und Frontend und teste die Rückwärtskalkulation
