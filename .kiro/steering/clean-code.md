# Clean-Code-Richtlinien

## Sprachkonvention

- **Code** (Variablen, Funktionen, Dateinamen): Englisch
- **Kommentare**: Deutsch
- **UI-Texte** (Labels, Fehlermeldungen): Deutsch
- **JSON-Schlüssel**: Englisch (`listPurchasePrice`, nicht `listeneinkaufspreis`)

## Benennung

- Variablen und Funktionen: `camelCase` (`calculateForward`, `roundToTwo`)
- Dateien: `kebab-case` oder einfache Kleinschreibung (`calculation.js`, `routes.js`)
- React-Komponenten: `PascalCase` (`ForwardPage.jsx`, `InputField.jsx`)
- Konstanten: `UPPER_SNAKE_CASE` nur bei echten Konstanten (`DEFAULT_PORT`)

## Funktionen

- Jede Funktion macht genau eine Sache.
- Funktionsnamen beschreiben, was die Funktion tut (`calculateForward`, `validateInput`).
- Maximal 3–4 Parameter. Bei mehr: ein Objekt übergeben.
- Rückgabewerte klar dokumentieren (Kommentar über der Funktion).

## Kommentare (auf Deutsch)

- Kommentare erklären das **Warum**, nicht das **Was**.
- Jede exportierte Funktion bekommt einen kurzen Kommentar.
- Kein auskommentierter Code — wenn er nicht gebraucht wird, löschen.

Beispiel:

```javascript
// Rundet auf 2 Nachkommastellen (kaufmännische Rundung)
function roundToTwo(value) {
  return Math.round(value * 100) / 100;
}
```

## Dateistruktur

- Berechnungslogik getrennt vom HTTP-Layer (keine Express-Logik in `calculation.js`).
- Validierung in eigenem Modul (`validation.js`).
- Frontend-Komponenten in `components/` (wiederverwendbar) und `pages/` (seitenspezifisch).

## Fehlerbehandlung

- Keine stillen Fehler — immer eine verständliche Meldung zurückgeben.
- Backend gibt bei Fehlern HTTP 400 mit `{ "errors": [...] }` zurück.
- Frontend zeigt Fehlermeldungen neben den betroffenen Feldern an.

## Formatierung

- 2 Spaces Einrückung (kein Tab).
- Semikolons am Zeilenende.
- Einfache Anführungszeichen für Strings im Code (`'text'`).
- Doppelte Anführungszeichen in JSON (`"key"`).
