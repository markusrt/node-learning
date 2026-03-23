# Glossar

Dieses Glossar wird mit jedem Meilenstein erweitert. Neue Begriffe sind mit dem Meilenstein markiert, in dem sie eingeführt werden.

## A

### Abhängigkeit (Dependency) `Meilenstein 0`

Ein externes Code-Paket, das dein Projekt braucht, um zu funktionieren. In der `package.json` stehen alle Abhängigkeiten aufgelistet. npm lädt sie automatisch herunter, wenn du `npm install` ausführst.

→ [Mehr erfahren (npm Docs)](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)

## B

### Backend `Meilenstein 0`

Der Teil einer Webanwendung, der auf dem Server läuft und für den Benutzer unsichtbar ist. Das Backend verarbeitet Daten, führt Berechnungen durch und schickt Ergebnisse an das Frontend. In unserem Projekt ist das Backend ein Node.js-Server mit Express.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction)

### Build-Tool `Meilenstein 0`

Ein Programm, das deinen Quellcode für den Browser vorbereitet. Es bündelt Dateien, wandelt modernen Code um und optimiert die Ladezeit. In unserem Projekt verwenden wir Vite als Build-Tool.

→ [Mehr erfahren (Vite Docs)](https://vite.dev/guide/why.html)

## C

### CSS (Cascading Style Sheets) `Meilenstein 0`

Eine Sprache, mit der du das Aussehen von Webseiten gestaltest — Farben, Schriftarten, Abstände, Layouts. CSS-Regeln werden in `.css`-Dateien geschrieben und vom Browser angewendet.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Learn/CSS/First_steps/What_is_CSS)

## E

### Endpunkt (Endpoint) `Meilenstein 1`

Eine bestimmte URL auf dem Server, an die man Anfragen schicken kann. Jeder Endpunkt hat eine Adresse (z.B. `/api/status`) und reagiert auf eine bestimmte HTTP-Methode (GET, POST, etc.). Endpunkte sind die „Türen" deiner API.

→ [Mehr erfahren (Express Docs)](https://expressjs.com/de/guide/routing.html)

### Express `Meilenstein 0`

Ein Web-Framework für Node.js, das es einfach macht, einen Server zu bauen. Express stellt Funktionen bereit, um auf HTTP-Anfragen zu reagieren und Antworten zu schicken. Es ist das beliebteste Framework für Node.js-Server.

→ [Mehr erfahren (expressjs.com)](https://expressjs.com/de/)

## F

### Frontend `Meilenstein 0`

Der Teil einer Webanwendung, den der Benutzer im Browser sieht und mit dem er interagiert — Formulare, Buttons, Tabellen. In unserem Projekt ist das Frontend eine React-App, die mit Vite gebaut wird.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer)

## G

### Git `Meilenstein 0`

Ein Versionsverwaltungssystem. Es speichert die Geschichte deines Codes, sodass du jederzeit zu einem früheren Stand zurückkehren kannst. Stell es dir vor wie „Speicherpunkte" in einem Spiel.

→ [Mehr erfahren (git-scm.com)](https://git-scm.com/book/de/v2/Erste-Schritte-Was-ist-Versionsverwaltung%3F)

## H

### HTTP (Hypertext Transfer Protocol) `Meilenstein 1`

Das Protokoll (die „Sprache"), über das Browser und Server miteinander kommunizieren. Wenn du eine Webseite aufrufst, schickt dein Browser einen HTTP-Request an den Server, und der Server antwortet mit einer HTTP-Response. Es gibt verschiedene Methoden: GET (Daten abrufen), POST (Daten senden), PUT (Daten ändern), DELETE (Daten löschen).

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/HTTP/Overview)

## J

### JSON (JavaScript Object Notation) `Meilenstein 0`

Ein Textformat zum Speichern und Übertragen von Daten. JSON sieht aus wie ein JavaScript-Objekt mit Schlüssel-Wert-Paaren in geschweiften Klammern: `{ "name": "Wert" }`. Es wird verwendet, um Daten zwischen Frontend und Backend auszutauschen.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Learn/JavaScript/Objects/JSON)

## L

### LTS (Long Term Support) `Meilenstein 0`

Eine Version von Node.js, die über einen längeren Zeitraum mit Sicherheitsupdates versorgt wird. Für Projekte sollte man immer die LTS-Version verwenden, weil sie stabiler ist als die neueste Version.

→ [Mehr erfahren (nodejs.org)](https://nodejs.org/en/about/previous-releases)

## M

### Middleware `Meilenstein 0`

Code, der bei jeder Anfrage an den Server automatisch ausgeführt wird, bevor die eigentliche Verarbeitung beginnt. Beispiele: `cors()` erlaubt Zugriffe von anderen Domains, `express.json()` wandelt den Anfrage-Body von Text in ein JavaScript-Objekt um.

→ [Mehr erfahren (Express Docs)](https://expressjs.com/de/guide/using-middleware.html)

## N

### Node.js `Meilenstein 0`

Eine Laufzeitumgebung, die es ermöglicht, JavaScript außerhalb des Browsers auszuführen — zum Beispiel auf einem Server. Damit können wir unser Backend in JavaScript schreiben, derselben Sprache wie das Frontend.

→ [Mehr erfahren (nodejs.org)](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)

### npm (Node Package Manager) `Meilenstein 0`

Ein Paketmanager für JavaScript. Damit kannst du fertige Code-Pakete (Bibliotheken) herunterladen und in deinem Projekt verwenden. Der Befehl `npm install` liest die `package.json` und installiert alle dort aufgelisteten Pakete.

→ [Mehr erfahren (npmjs.com)](https://docs.npmjs.com/about-npm)

## P

### package.json `Meilenstein 0`

Die zentrale Konfigurationsdatei eines Node.js-Projekts. Sie enthält den Projektnamen, die Version, Skripte (z.B. `npm start`) und die Liste aller Abhängigkeiten. Jedes Node.js-Projekt hat eine `package.json`.

→ [Mehr erfahren (npm Docs)](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)

### Port `Meilenstein 0`

Eine Nummer, über die ein Programm auf dem Computer erreichbar ist. Unser Backend läuft auf Port 3001 (`http://localhost:3001`), das Frontend auf Port 5173. Verschiedene Programme verwenden verschiedene Ports, damit sie sich nicht gegenseitig stören.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/Port)

### Proxy `Meilenstein 0`

Ein Vermittler, der Anfragen weiterleitet. In unserem Projekt leitet der Vite-Proxy alle Anfragen an `/api/...` automatisch an den Backend-Server auf Port 3001 weiter. So muss das Frontend nicht wissen, auf welchem Port das Backend läuft.

→ [Mehr erfahren (Vite Docs)](https://vite.dev/config/server-options.html#server-proxy)

## R

### React `Meilenstein 0`

Eine JavaScript-Bibliothek zum Bauen von Benutzeroberflächen. React teilt die Oberfläche in kleine, wiederverwendbare Bausteine auf, die „Komponenten" heißen. Jede Komponente kümmert sich um einen Teil der Seite.

→ [Mehr erfahren (react.dev)](https://react.dev/learn)

### Repository (Repo) `Meilenstein 0`

Ein Projektordner, der von Git verwaltet wird. Es enthält deinen Code und die gesamte Änderungshistorie. Wenn du `git init` ausführst, wird ein normaler Ordner zu einem Repository.

→ [Mehr erfahren (GitHub Docs)](https://docs.github.com/de/repositories/creating-and-managing-repositories/about-repositories)

### Request (Anfrage) `Meilenstein 1`

Eine Nachricht, die der Browser (oder ein anderes Programm) an den Server schickt. Ein Request enthält die URL (wohin), die Methode (GET, POST, etc.) und optional Daten (z.B. Formulareingaben als JSON). Der Server verarbeitet den Request und schickt eine Response zurück.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/HTTP/Messages)

### Response (Antwort) `Meilenstein 1`

Die Antwort, die der Server auf einen Request zurückschickt. Eine Response enthält einen Statuscode (z.B. 200 für OK), Header (Metadaten) und optional einen Body (z.B. JSON-Daten). Das Frontend wertet die Response aus und zeigt die Daten an.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/HTTP/Messages)

### REST-API `Meilenstein 1`

Ein Architekturmuster für Web-APIs. REST steht für „Representational State Transfer". Eine REST-API verwendet HTTP-Methoden (GET, POST, PUT, DELETE) und URLs, um Daten auszutauschen. In unserem Projekt hat die REST-API Endpunkte wie `/api/forward` und `/api/backward`.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/REST)

### Router `Meilenstein 1`

Ein Modul in Express, das eingehende Anfragen an die richtige Funktion weiterleitet. Statt alle Routen in einer Datei zu definieren, kann man sie mit einem Router in eigene Dateien auslagern. Das hält den Code übersichtlich und wartbar.

→ [Mehr erfahren (Express Docs)](https://expressjs.com/de/guide/routing.html)

## S

### Server `Meilenstein 0`

Ein Programm, das auf Anfragen wartet und Antworten zurückschickt. In unserem Projekt ist der Server ein Node.js-Programm mit Express, das auf Port 3001 läuft und Kalkulationen berechnet.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)

### Statuscode `Meilenstein 1`

Eine dreistellige Zahl in der HTTP-Response, die angibt, ob eine Anfrage erfolgreich war. Wichtige Statuscodes: 200 (OK — alles hat funktioniert), 400 (Bad Request — ungültige Eingabe), 404 (Not Found — URL nicht gefunden), 501 (Not Implemented — Funktion noch nicht programmiert), 500 (Server Error — unerwarteter Fehler).

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/HTTP/Status)

## T

### Terminal / Kommandozeile `Meilenstein 0`

Ein Textfenster, in dem du Befehle eingeben kannst, um Programme zu starten, Dateien zu verwalten oder Code auszuführen. Statt mit der Maus zu klicken, tippst du Befehle ein. In VS Code erreichst du es über `Strg + Ö`.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)

## V

### Vite `Meilenstein 0`

Ein modernes Build-Tool für Webprojekte. Vite startet einen Entwicklungsserver, der Änderungen sofort im Browser anzeigt (ohne Neuladen). Es ist schneller als ältere Tools wie Webpack.

→ [Mehr erfahren (vite.dev)](https://vite.dev/guide/)

### VS Code (Visual Studio Code) `Meilenstein 0`

Ein kostenloser Code-Editor von Microsoft. Er bietet Syntax-Hervorhebung, ein eingebautes Terminal und viele Erweiterungen, die das Programmieren einfacher machen.

→ [Mehr erfahren (code.visualstudio.com)](https://code.visualstudio.com/docs/getstarted/introvideos)
