# Kalkulationsrechner — Lernprojekt Handelskalkulation

Eine Webanwendung für Schüler der 9. Klasse (Wirtschaftsschule), die die Handelskalkulation Schritt für Schritt vermittelt. Das Projekt ist so aufgebaut, dass ein Programmieranfänger es schrittweise nachbauen und dabei JavaScript, React und Node.js lernen kann.

## Funktionen

- **Vorwärtskalkulation**: Berechnet den Listenverkaufspreis aus dem Listeneinkaufspreis (komplettes Kalkulationsschema)
- **Rückwärtskalkulation**: Berechnet den Listeneinkaufspreis aus dem Listenverkaufspreis
- **Differenzkalkulation**: Ermittelt den Gewinn bei gegebenem Einkaufs- und Verkaufspreis
- **Eingabevalidierung**: Prüft alle Eingaben im Backend und zeigt verständliche Fehlermeldungen an
- **Schrittweise Darstellung**: Alle Zwischenergebnisse werden übersichtlich in einer Tabelle angezeigt

## Technologie-Stack

| Bereich | Technologie |
|---------|-------------|
| Frontend | React (mit Vite) |
| Backend | Node.js mit Express |
| Sprache | JavaScript |
| Tests | Vitest + fast-check (Property-Based Tests) |
| Styling | CSS (ohne Framework) |

## Was wird benötigt?

| Programm | Wozu? | Download |
|----------|-------|----------|
| Node.js (Version 18+) | Führt JavaScript außerhalb des Browsers aus | [nodejs.org](https://nodejs.org/) |
| npm | Paketmanager (wird mit Node.js mitinstalliert) | — |
| Git | Versionsverwaltung | [git-scm.com](https://git-scm.com/) |
| VS Code | Code-Editor | [code.visualstudio.com](https://code.visualstudio.com/) |

## Projekt starten

### 1. Repository klonen

```bash
git clone <repository-url>
cd kalkulationsrechner
```

### 2. Backend installieren und starten

```bash
cd backend
npm install
npm start
```

Der Server läuft auf `http://localhost:3001`.

### 3. Frontend installieren und starten

In einem neuen Terminal:

```bash
cd frontend
npm install
npm run dev
```

Das Frontend öffnet sich im Browser (normalerweise `http://localhost:5173`).

## Tests ausführen

```bash
cd backend
npm test
```

Die Tests umfassen:
- Unit-Tests für Berechnungslogik und Validierung
- Property-Based Tests (mit fast-check) für Korrektheitseigenschaften wie Round-Trip, Rundung, Formatierung und Validierung

## Projektstruktur

```
├── backend/
│   ├── src/
│   │   ├── server.js          # Express-Server (Port 3001)
│   │   ├── routes.js          # REST-API-Endpunkte
│   │   ├── calculation.js     # Berechnungslogik
│   │   └── validation.js      # Eingabevalidierung
│   └── tests/
│       ├── calculation.test.js       # Unit-Tests Berechnung
│       ├── calculation.prop.test.js  # Property-Tests Berechnung
│       ├── validation.test.js        # Unit-Tests Validierung
│       ├── validation.prop.test.js   # Property-Tests Validierung
│       └── format.prop.test.js       # Property-Tests Formatierung
├── frontend/
│   ├── src/
│   │   ├── App.jsx            # Hauptkomponente mit Navigation
│   │   ├── App.css            # Styling
│   │   ├── api.js             # API-Aufrufe ans Backend
│   │   ├── format.js          # Formatierungsfunktionen (€, %)
│   │   ├── components/        # Wiederverwendbare Komponenten
│   │   │   ├── InputField.jsx
│   │   │   ├── ResultTable.jsx
│   │   │   └── ErrorDisplay.jsx
│   │   └── pages/             # Seiten-Komponenten
│   │       ├── ForwardPage.jsx
│   │       ├── BackwardPage.jsx
│   │       └── DifferencePage.jsx
│   └── vite.config.js
└── docs/                      # Meilenstein-Anleitungen und Glossar
```

## API-Endpunkte

| Endpunkt | Methode | Beschreibung |
|----------|---------|-------------|
| `/api/forward` | POST | Vorwärtskalkulation |
| `/api/backward` | POST | Rückwärtskalkulation |
| `/api/difference` | POST | Differenzkalkulation |
| `/api/status` | GET | Server-Status |

## Meilensteine (Git-Tags)

Das Projekt wurde schrittweise aufgebaut. Jeder Meilenstein ist als Git-Tag gespeichert:

| Tag | Meilenstein | Beschreibung |
|-----|-------------|-------------|
| `v0-projektstart` | 0 | Projektstruktur aufgesetzt |
| `v1-backend-grundgeruest` | 1 | Express-Server mit Test-Endpunkt |
| `v2-einkaufskalkulation` | 2 | Einkaufskalkulation im Backend + Tests |
| `v3-verkaufskalkulation` | 3 | Verkaufs-, Rückwärts- und Differenzkalkulation + Property-Tests |
| `v4-frontend-grundgeruest` | 4 | React-App mit Navigation und Komponenten |
| `v5-vorwaerts-komplett` | 5 | Vorwärtskalkulation Frontend + Backend verbunden |
| `v6-rueckwaerts` | 6 | Rückwärtskalkulation komplett |
| `v7-differenz` | 7 | Differenzkalkulation komplett |
| `v8-validierung` | 8 | Eingabevalidierung Frontend + Backend |
| `v9-fertig` | 9 | Feinschliff, Styling, finale Version |

Jeder Meilenstein hat eine eigene Anleitung im `docs/`-Ordner.

## Lizenz

Lernprojekt — frei verwendbar für Unterrichtszwecke.
