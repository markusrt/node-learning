# Nächste Schritte

Diese Datei zeigt dir, wo du gerade stehst und was als Nächstes kommt. Nach jedem Meilenstein wird sie aktualisiert.

## Aktueller Stand: Meilenstein 4 — Frontend-Grundgerüst ✅

Du hast die Benutzeroberfläche aufgebaut:

- `App.jsx` mit Tab-Navigation für die drei Kalkulationsarten
- `App.css` mit sauberem Styling für Navigation, Formulare, Tabellen und Fehleranzeige
- Wiederverwendbare Komponenten: `InputField`, `ResultTable`, `ErrorDisplay`
- `api.js` als Hilfsfunktion für API-Aufrufe an das Backend
- Vite-Proxy leitet `/api`-Requests an den Backend-Server weiter
- Glossar um 6 neue Begriffe erweitert (JSX, Komponente, Props, Selektor, State, useState)

## Nächster Schritt: Meilenstein 5 — Vorwärtskalkulation komplett

### Ziel

Jetzt verbindest du Frontend und Backend! Du erstellst die Vorwärtskalkulation-Seite mit einem Formular, das die Eingaben an das Backend sendet und das Ergebnis als Tabelle anzeigt.

### Was du tun musst

#### Schritt 1: Vorwärtskalkulation-Seite

Erstelle `ForwardPage.jsx` mit einem Formular (8 Eingabefelder) und der Ergebnis-Tabelle. Verbinde das Formular mit dem Backend-Endpunkt `/api/forward`.

#### Schritt 2: Backend-Endpunkt verdrahten

Implementiere den POST-Handler in `routes.js`, der `calculateForward` aufruft und das Ergebnis zurückgibt.

### Welche Dateien werden verändert?

| Datei | Status | Beschreibung |
| --- | --- | --- |
| `frontend/src/pages/ForwardPage.jsx` | Neu | Formular und Ergebnis für Vorwärtskalkulation |
| `backend/src/routes.js` | Erweitert | POST-Handler für `/api/forward` |
| `docs/meilenstein-5.md` | Neu | Anleitung für diesen Meilenstein |
| `docs/glossar.md` | Erweitert | Neue Begriffe (async/await, fetch, Promise, etc.) |

### Neue Konzepte

| Konzept | Kurz erklärt |
| --- | --- |
| async/await | Asynchrone Programmierung — auf Antworten warten |
| fetch | Browser-Funktion zum Senden von HTTP-Requests |
| Promise | Ein Objekt, das ein zukünftiges Ergebnis repräsentiert |
| Event-Handler | Funktion, die auf Benutzeraktionen reagiert |
| onSubmit | Event, das beim Absenden eines Formulars ausgelöst wird |
| preventDefault | Verhindert das Standard-Verhalten des Browsers |

### Wie du startest

1. Erstelle `frontend/src/pages/ForwardPage.jsx`
2. Implementiere den POST-Handler in `backend/src/routes.js`
3. Starte Backend und Frontend und teste die Vorwärtskalkulation
