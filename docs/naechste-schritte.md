# Nächste Schritte

Diese Datei zeigt dir, wo du gerade stehst und was als Nächstes kommt. Nach jedem Meilenstein wird sie aktualisiert.

## Aktueller Stand: Meilenstein 0 — Projektstruktur ✅

Du hast die Grundstruktur des Projekts aufgesetzt:

- Backend mit Express-Server (läuft auf Port 3001)
- Frontend mit React und Vite
- Git-Repository ist eingerichtet
- Zentrales Glossar unter `docs/glossar.md` angelegt

## Nächster Schritt: Meilenstein 1 — Backend-Grundgerüst

### Ziel

Das Backend bekommt eine richtige Struktur: Ein Router verteilt eingehende Anfragen an die richtigen Funktionen. Am Ende hast du drei API-Endpunkte (noch ohne Logik), die du im Browser oder Terminal testen kannst.

### Was du tun musst

#### Schritt 1: Router erstellen (`backend/src/routes.js`)

Erstelle eine neue Datei `backend/src/routes.js`. Der Router definiert, welche URL welche Funktion aufruft. Zunächst sind die drei Kalkulations-Endpunkte nur Platzhalter, die eine „Noch nicht implementiert"-Meldung zurückgeben.

```javascript
// Beispiel: So sieht ein Platzhalter-Endpunkt aus
router.post('/forward', (req, res) => {
  res.status(501).json({ message: 'Noch nicht implementiert' });
});
```

→ Mehr über Express-Router: [Express Routing Guide](https://expressjs.com/de/guide/routing.html)

#### Schritt 2: Server erweitern (`backend/src/server.js`)

Binde den neuen Router in den bestehenden Server ein. Der Server delegiert dann alle `/api/...`-Anfragen an den Router.

```javascript
// So bindet man einen Router ein
const routes = require('./routes');
app.use('/api', routes);
```

→ Mehr über `app.use()`: [Express API Reference](https://expressjs.com/de/api.html#app.use)

#### Schritt 3: Testen ob alles funktioniert

Auch wenn die Endpunkte noch keine Berechnung durchführen, kannst du prüfen, ob sie erreichbar sind. Starte den Server und teste im Terminal:

```bash
# Server starten
cd backend
npm start

# In einem neuen Terminal: Status-Endpunkt testen
curl http://localhost:3001/api/status
# Erwartete Antwort: {"status":"ok"}

# Platzhalter-Endpunkt testen (POST-Request)
curl -X POST http://localhost:3001/api/forward
# Erwartete Antwort: {"message":"Noch nicht implementiert"} mit Status 501
```

Falls du `curl` nicht installiert hast, kannst du auch im Browser `http://localhost:3001/api/status` aufrufen.

→ Mehr über curl: [curl Dokumentation](https://curl.se/docs/manual.html)

#### Schritt 4: Dokumentation

- Erstelle `docs/meilenstein-1.md` mit einer Erklärung, was ein Server ist und wie Express funktioniert
- Erweitere das [Glossar](glossar.md) um die neuen Begriffe (Endpunkt, HTTP, Request, Response, REST-API, Router, Statuscode)

### Welche Dateien werden verändert?

| Datei | Was passiert |
| ----- | ----------- |
| `backend/src/server.js` | Wird erweitert: Router einbinden |
| `backend/src/routes.js` | Neu: API-Endpunkte (Platzhalter) |
| `docs/meilenstein-1.md` | Neu: Anleitung für diesen Meilenstein |
| `docs/glossar.md` | Erweitert: 7 neue Begriffe |
| `docs/naechste-schritte.md` | Aktualisiert: Vorschau auf Meilenstein 2 |

### Neue Begriffe (→ [Glossar](glossar.md))

| Begriff | Kurz erklärt |
| ------- | ------------ |
| Endpunkt | Eine URL, an die man Anfragen schicken kann (z.B. `/api/status`) |
| HTTP | Das Protokoll, über das Browser und Server kommunizieren |
| Request | Eine Anfrage, die der Browser an den Server schickt |
| Response | Die Antwort, die der Server zurückschickt |
| REST-API | Ein Muster, um Daten über HTTP auszutauschen |
| Router | Verteilt eingehende Anfragen an die richtige Funktion |
| Statuscode | Eine Zahl, die angibt ob eine Anfrage erfolgreich war (200 = OK, 404 = nicht gefunden, 501 = nicht implementiert) |

### Wie du startest

1. Öffne das Projekt in VS Code
2. Öffne ein Terminal (`Strg + Ö`)
3. Erstelle die Datei `backend/src/routes.js`
4. Erweitere `backend/src/server.js` um den Router
5. Starte den Server mit `cd backend && npm start`
6. Teste die Endpunkte mit `curl` (siehe Schritt 3)
7. Wenn alles funktioniert: Git-Commit und weiter zur Dokumentation
