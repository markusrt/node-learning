# Nächste Schritte

Diese Datei zeigt dir, wo du gerade stehst und was als Nächstes kommt. Nach jedem Meilenstein wird sie aktualisiert.

## Aktueller Stand: Meilenstein 3 — Verkaufskalkulation ✅

Du hast die komplette Berechnungslogik implementiert:

- `calculateForward()` berechnet jetzt die vollständige Kalkulation (15 Schritte: Listeneinkaufspreis → Listenverkaufspreis)
- `calculateBackward()` berechnet die Rückwärtskalkulation (Listenverkaufspreis → Listeneinkaufspreis)
- `calculateDifference()` ermittelt den Gewinn bei gegebenem Einkaufs- und Verkaufspreis
- Hundert-im-Hundert-Rechnung für Kundenskonto und Kundenrabatt
- Unit-Tests und Property-Based Tests für alle drei Kalkulationsarten
- Glossar um 7 neue Begriffe erweitert (Array, Assertion, Hundert-im-Hundert-Rechnung, Objekt/Object, Property-Based Test, Testframework, Unit-Test)

## Nächster Schritt: Meilenstein 4 — Frontend-Grundgerüst

### Ziel

Jetzt bauen wir die Benutzeroberfläche! Du erstellst eine React-App mit Navigation und wiederverwendbaren Komponenten. Am Ende dieses Meilensteins kannst du zwischen den drei Kalkulationsarten wechseln und siehst die Formulare.

### Was du tun musst

#### Schritt 1: React-App mit Navigation

Erstelle `App.jsx` mit einer Tab-Navigation für die drei Kalkulationsarten (Vorwärtskalkulation, Rückwärtskalkulation, Differenzkalkulation).

#### Schritt 2: Wiederverwendbare Komponenten

Erstelle Komponenten, die in allen drei Seiten verwendet werden:
- `InputField.jsx` — Eingabefeld mit Label und Fehlermeldung
- `ResultTable.jsx` — Tabelle zur Anzeige des `steps`-Arrays
- `ErrorDisplay.jsx` — Anzeige von Backend-Fehlermeldungen

#### Schritt 3: API-Hilfsfunktion

Erstelle `api.js` mit einer Funktion, die Kalkulationsanfragen an das Backend sendet.

### Welche Dateien werden verändert?

| Datei | Status | Beschreibung |
| ----- | ------ | ------------ |
| `frontend/src/App.jsx` | Erweitert | Navigation und Seitenstruktur |
| `frontend/src/App.css` | Neu | Styling für die App |
| `frontend/src/components/InputField.jsx` | Neu | Wiederverwendbares Eingabefeld |
| `frontend/src/components/ResultTable.jsx` | Neu | Ergebnis-Tabelle |
| `frontend/src/components/ErrorDisplay.jsx` | Neu | Fehleranzeige |
| `frontend/src/api.js` | Neu | API-Hilfsfunktion |
| `frontend/vite.config.js` | Erweitert | Proxy-Konfiguration |
| `docs/meilenstein-4.md` | Neu | Anleitung für diesen Meilenstein |
| `docs/glossar.md` | Erweitert | Neue Begriffe (JSX, Komponente, Props, State, etc.) |

### Neue Konzepte

| Konzept | Kurz erklärt |
| ------- | ------------ |
| JSX | HTML-ähnliche Syntax in JavaScript |
| Komponente | Ein wiederverwendbarer Baustein der Benutzeroberfläche |
| Props | Daten, die von einer Eltern-Komponente an eine Kind-Komponente übergeben werden |
| State | Daten innerhalb einer Komponente, die sich ändern können |
| useState | Ein React-Hook zum Verwalten von State |

### Wie du startest

1. Öffne `frontend/src/App.jsx`
2. Erstelle die Navigation mit Tabs
3. Erstelle die Komponenten in `frontend/src/components/`
4. Erstelle `frontend/src/api.js`
5. Starte das Frontend mit `cd frontend && npm run dev`
