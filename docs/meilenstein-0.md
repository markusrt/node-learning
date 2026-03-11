# Meilenstein 0: Projektstruktur aufsetzen

In diesem Meilenstein lernst du, wie man ein Webprojekt von Grund auf aufsetzt. Am Ende hast du eine funktionierende Projektstruktur mit einem Backend und einem Frontend.

## Was du in diesem Schritt lernst

- Wie man Software installiert, die Entwickler brauchen
- Was ein Terminal ist und wie man es benutzt
- Wie man ein Projekt mit npm einrichtet
- Wie Git funktioniert und warum man es braucht

## Schritt-für-Schritt-Installationsanleitung

### 1. Node.js installieren

1. Gehe auf [nodejs.org](https://nodejs.org/)
2. Lade die **LTS-Version** herunter (die linke, grüne Schaltfläche)
3. Führe den Installer aus und klicke dich durch
4. Prüfe die Installation im Terminal:

```bash
node --version
npm --version
```

Beide Befehle sollten eine Versionsnummer anzeigen.

### 2. Git installieren

1. Gehe auf [git-scm.com](https://git-scm.com/)
2. Lade den Installer für dein Betriebssystem herunter
3. Führe den Installer aus (die Standardeinstellungen sind in Ordnung)
4. Prüfe die Installation:

```bash
git --version
```

### 3. VS Code installieren

1. Gehe auf [code.visualstudio.com](https://code.visualstudio.com/)
2. Lade den Installer herunter und installiere VS Code
3. Öffne VS Code und mache dich mit der Oberfläche vertraut

### 4. Projekt einrichten

1. Öffne ein Terminal (in VS Code: `Strg + Ö` oder über das Menü *Terminal → Neues Terminal*)
2. Navigiere zum Projektordner
3. Installiere die Abhängigkeiten:

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 5. Prüfen ob alles funktioniert

Starte den Backend-Server:

```bash
cd backend
npm start
```

Du solltest sehen: `Server läuft auf http://localhost:3001`

Öffne in einem neuen Terminal das Frontend:

```bash
cd frontend
npm run dev
```

Der Browser sollte sich öffnen und „Kalkulationsrechner" anzeigen.

## Was hat sich im Code geändert?

In diesem Meilenstein wurde noch keine Anwendungslogik geschrieben. Stattdessen haben wir die Grundstruktur des Projekts erstellt:

### Neue Dateien

```
kalkulationsrechner/
├── backend/
│   ├── package.json          ← Projektdefinition für das Backend
│   └── src/
│       └── server.js         ← Minimaler Express-Server (Port 3001)
├── frontend/
│   ├── package.json          ← Projektdefinition für das Frontend
│   ├── index.html            ← HTML-Einstiegspunkt
│   ├── vite.config.js        ← Vite-Konfiguration mit Proxy
│   └── src/
│       ├── main.jsx          ← React-Einstiegspunkt
│       ├── App.jsx           ← Haupt-Komponente (Platzhalter)
│       └── index.css         ← Basis-Styling
├── docs/
│   └── meilenstein-0.md      ← Diese Anleitung
├── README.md                 ← Projektbeschreibung und Startanleitung
└── .gitignore                ← Dateien, die Git ignorieren soll
```

### backend/package.json

Definiert das Backend-Projekt und seine Abhängigkeiten:
- `express` — das Web-Framework für unseren Server
- `cors` — erlaubt dem Frontend, auf den Server zuzugreifen
- `vitest` — Testframework (brauchen wir ab Meilenstein 2)
- `fast-check` — Property-Based Testing (brauchen wir ab Meilenstein 3)

### backend/src/server.js

Ein minimaler Server mit nur einem Endpunkt (`/api/status`), der `{ "status": "ok" }` zurückgibt. Das reicht, um zu prüfen, ob der Server läuft. Die eigentliche Logik kommt in den nächsten Meilensteinen.

### frontend/vite.config.js

Enthält eine Proxy-Konfiguration: Wenn das Frontend eine Anfrage an `/api/...` schickt, leitet Vite sie automatisch an `http://localhost:3001` weiter. So müssen wir uns nicht um unterschiedliche Ports kümmern.

### frontend/src/App.jsx

Eine einfache React-Komponente, die nur eine Überschrift anzeigt. Sie wird in den nächsten Meilensteinen Schritt für Schritt erweitert.

## Neue Begriffe in diesem Meilenstein

In diesem Meilenstein werden folgende Begriffe eingeführt — alle Erklärungen findest du im zentralen [Glossar](glossar.md):

- **Abhängigkeit (Dependency)** — externe Code-Pakete, die dein Projekt braucht
- **Backend** — der Server-Teil der Anwendung
- **Build-Tool** — bereitet deinen Code für den Browser vor
- **CSS** — Sprache für das Aussehen von Webseiten
- **Express** — Web-Framework für Node.js
- **Frontend** — der Browser-Teil der Anwendung
- **Git** — Versionsverwaltung für deinen Code
- **JSON** — Textformat für Daten
- **LTS** — stabile Langzeit-Version von Node.js
- **Middleware** — Code, der bei jeder Anfrage automatisch läuft
- **Node.js** — JavaScript außerhalb des Browsers ausführen
- **npm** — Paketmanager für JavaScript
- **package.json** — Konfigurationsdatei des Projekts
- **Port** — Nummer, über die ein Programm erreichbar ist
- **Proxy** — leitet Anfragen automatisch weiter
- **React** — Bibliothek für Benutzeroberflächen
- **Repository** — von Git verwalteter Projektordner
- **Server** — Programm, das auf Anfragen wartet
- **Terminal / Kommandozeile** — Textfenster für Befehle
- **Vite** — modernes Build-Tool
- **VS Code** — Code-Editor
