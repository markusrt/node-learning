# Kalkulationsrechner — Lernprojekt Handelskalkulation

Eine Webanwendung für Schüler der 9. Klasse (Wirtschaftsschule), die die Handelskalkulation Schritt für Schritt vermittelt.

## Was wird benötigt?

Bevor du starten kannst, müssen folgende Programme installiert sein:

| Programm | Wozu? | Download |
|----------|-------|----------|
| **Node.js** (Version 18 oder neuer) | Führt JavaScript außerhalb des Browsers aus | [nodejs.org](https://nodejs.org/) |
| **npm** | Paketmanager für JavaScript (wird mit Node.js mitinstalliert) | — |
| **Git** | Versionsverwaltung für den Code | [git-scm.com](https://git-scm.com/) |
| **VS Code** | Code-Editor | [code.visualstudio.com](https://code.visualstudio.com/) |

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

Der Server läuft dann auf `http://localhost:3001`.

### 3. Frontend installieren und starten

In einem neuen Terminal:

```bash
cd frontend
npm install
npm run dev
```

Das Frontend öffnet sich im Browser (normalerweise `http://localhost:5173`).

## Projekt testen

```bash
cd backend
npm test
```

## Meilensteine

Das Projekt wird schrittweise aufgebaut. Jeder Meilenstein ist als Git-Tag gespeichert:

| Tag | Beschreibung |
|-----|-------------|
| `v0-projektstart` | Projektstruktur aufgesetzt |
| `v1-backend-grundgeruest` | Express-Server mit Test-Endpunkt |
| `v2-einkaufskalkulation` | Einkaufskalkulation im Backend |
| `v3-verkaufskalkulation` | Verkaufskalkulation, Rückwärts- und Differenzkalkulation |
| `v4-frontend-grundgeruest` | React-App mit Navigation |
| `v5-vorwaerts-komplett` | Vorwärtskalkulation Frontend + Backend |
| `v6-rueckwaerts` | Rückwärtskalkulation komplett |
| `v7-differenz` | Differenzkalkulation komplett |
| `v8-validierung` | Eingabevalidierung |
| `v9-fertig` | Feinschliff und finale Version |
