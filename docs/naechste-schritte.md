# Nächste Schritte

Diese Datei zeigt dir, wo du gerade stehst und was als Nächstes kommt. Nach jedem Meilenstein wird sie aktualisiert.

## Aktueller Stand: Meilenstein 6 — Rückwärtskalkulation komplett ✅

Du hast die Rückwärtskalkulation nach dem gleichen Muster wie die Vorwärtskalkulation umgesetzt:

- `BackwardPage.jsx` mit Formular (8 Eingabefelder) und Ergebnis-Tabelle
- POST-Handler in `routes.js` ruft `calculateBackward` auf und gibt das Ergebnis zurück
- Navigation in `App.jsx` zeigt jetzt die Rückwärtskalkulation-Seite statt des Platzhalters
- Keine neuen Konzepte — Wiederholung und Festigung von fetch, async/await, Event-Handler

## Nächster Schritt: Meilenstein 7 — Differenzkalkulation komplett

### Ziel

Du erstellst die Differenzkalkulation-Seite. Der Benutzer gibt sowohl den Listeneinkaufspreis als auch den Listenverkaufspreis ein und bekommt den Gewinn berechnet.

### Was du tun musst

#### Schritt 1: Differenzkalkulation-Seite

Erstelle `DifferencePage.jsx` mit einem Formular und der Ergebnis-Tabelle. Verbinde das Formular mit dem Backend-Endpunkt `/api/difference`.

#### Schritt 2: Backend-Endpunkt verdrahten

Implementiere den POST-Handler in `routes.js`, der `calculateDifference` aufruft und das Ergebnis zurückgibt.

### Welche Dateien werden verändert?

| Datei | Status | Beschreibung |
| --- | --- | --- |
| `frontend/src/pages/DifferencePage.jsx` | Neu | Formular und Ergebnis für Differenzkalkulation |
| `backend/src/routes.js` | Erweitert | POST-Handler für `/api/difference` |

### Neue Konzepte

In Meilenstein 7 kommen keine neuen Konzepte dazu — du wendest das Gelernte erneut an. Der Unterschied ist, dass die Differenzkalkulation zwei Preise als Eingabe braucht (Einkaufs- und Verkaufspreis) und der Gewinn als Ergebnis berechnet wird.

### Wie du startest

1. Erstelle `frontend/src/pages/DifferencePage.jsx` (orientiere dich an `ForwardPage.jsx` und `BackwardPage.jsx`)
2. Implementiere den POST-Handler in `backend/src/routes.js`
3. Importiere `DifferencePage` in `App.jsx` und ersetze den Platzhalter
4. Starte Backend und Frontend und teste die Differenzkalkulation
