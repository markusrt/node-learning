# Nächste Schritte

Diese Datei zeigt dir, wo du gerade stehst und was als Nächstes kommt. Nach jedem Meilenstein wird sie aktualisiert.

## Aktueller Stand: Meilenstein 8 — Eingabevalidierung ✅

Du hast die Eingabevalidierung im Backend und eine minimale Prüfung im Frontend implementiert:

- `backend/src/validation.js` mit `validateInput(data, fields)` — prüft Pflichtfelder, numerische Werte, negative Beträge und Prozentwerte 0–100
- Alle drei Route-Handler in `routes.js` rufen die Validierung auf, bevor die Berechnung startet
- Bei ungültigen Eingaben gibt das Backend HTTP 400 mit verständlichen Fehlermeldungen zurück
- Die Frontend-Seiten prüfen, ob alle Felder ausgefüllt sind, und zeigen Backend-Fehler neben den betroffenen Feldern an
- Unit-Tests und Property-Tests stellen sicher, dass die Validierung korrekt funktioniert

## Nächster Schritt: Meilenstein 9 — Feinschliff und Styling

### Ziel

Du verbesserst das Aussehen der Anwendung und erstellst die finale Dokumentation. Das Projekt wird fertiggestellt.

### Was du tun musst

#### Schritt 1: CSS-Styling verbessern

Gestalte die Formulare übersichtlich und schülerfreundlich. Stelle sicher, dass die Ergebnis-Tabelle gut lesbar ist. Füge Farben für Zwischenergebnisse hinzu (z.B. Grün für Endwerte).

#### Schritt 2: Formatierungs-Property-Test

Erstelle Hilfsfunktionen `formatCurrency(value)` und `formatPercent(value)` und schreibe Property-Tests dafür.

#### Schritt 3: Finale README und Dokumentation

Aktualisiere die README mit vollständiger Projektbeschreibung, liste alle Meilensteine und Git-Tags auf, und beschreibe wie man das Projekt startet und testet.

### Welche Dateien werden verändert?

| Datei | Status | Beschreibung |
| --- | --- | --- |
| `frontend/src/App.css` | Erweitert | Verbessertes Styling |
| `README.md` | Erweitert | Vollständige Projektbeschreibung |
| `docs/naechste-schritte.md` | Aktualisiert | Projekt ist fertig |

### Neue Konzepte

- CSS-Styling und Farbgestaltung
- Formatierungsfunktionen für Beträge und Prozente

### Wie du startest

1. Verbessere das CSS in `frontend/src/App.css`
2. Erstelle Formatierungsfunktionen und Property-Tests
3. Aktualisiere die README und Dokumentation
4. Führe alle Tests aus und stelle sicher, dass alles funktioniert
