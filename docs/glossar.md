# Glossar

Dieses Glossar wird mit jedem Meilenstein erweitert. Neue Begriffe sind mit dem Meilenstein markiert, in dem sie eingeführt werden.

## A

### async/await `Meilenstein 5`

Schlüsselwörter in JavaScript für asynchrone Programmierung. `async` markiert eine Funktion als asynchron, `await` pausiert die Ausführung, bis ein Promise aufgelöst ist. Statt verschachtelter `.then()`-Ketten schreibst du flachen, lesbaren Code: `const data = await fetch('/api/forward')`. `await` darf nur innerhalb einer `async`-Funktion verwendet werden.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Learn/JavaScript/Asynchronous/Promises)

### Array `Meilenstein 3`

Eine geordnete Liste von Werten in JavaScript. Ein Array wird mit eckigen Klammern erstellt: `const zahlen = [1, 2, 3]`. Jedes Element hat einen Index (Position), der bei 0 beginnt. In unserem Projekt verwenden wir Arrays für das `steps`-Array, das alle Berechnungsschritte enthält.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Abhängigkeit (Dependency) `Meilenstein 0`

Ein externes Code-Paket, das dein Projekt braucht, um zu funktionieren. In der `package.json` stehen alle Abhängigkeiten aufgelistet. npm lädt sie automatisch herunter, wenn du `npm install` ausführst.

→ [Mehr erfahren (npm Docs)](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)

### Assertion (Behauptung) `Meilenstein 3`

Eine Aussage in einem Test, die wahr sein muss, damit der Test besteht. Beispiel: `expect(result).toBe(93.2)` behauptet, dass `result` den Wert `93.2` hat. Wenn die Behauptung falsch ist, schlägt der Test fehl und zeigt dir, was schiefgelaufen ist.

→ [Mehr erfahren (Vitest Docs)](https://vitest.dev/api/expect.html)

## B

### Bedingung/if-else `Meilenstein 8`

Eine Kontrollstruktur in JavaScript, mit der du Entscheidungen im Code triffst. `if` prüft eine Bedingung — ist sie wahr, wird der Code-Block ausgeführt. Mit `else` kannst du einen alternativen Block definieren, der ausgeführt wird, wenn die Bedingung falsch ist. Beispiel: `if (value < 0) { /* Fehler */ } else { /* OK */ }`. Validierung besteht im Kern aus vielen if-else-Prüfungen.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/if...else)

### Backend `Meilenstein 0`

Der Teil einer Webanwendung, der auf dem Server läuft und für den Benutzer unsichtbar ist. Das Backend verarbeitet Daten, führt Berechnungen durch und schickt Ergebnisse an das Frontend. In unserem Projekt ist das Backend ein Node.js-Server mit Express.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction)

### Build-Tool `Meilenstein 0`

Ein Programm, das deinen Quellcode für den Browser vorbereitet. Es bündelt Dateien, wandelt modernen Code um und optimiert die Ladezeit. In unserem Projekt verwenden wir Vite als Build-Tool.

→ [Mehr erfahren (Vite Docs)](https://vite.dev/guide/why.html)

## C

### const/let `Meilenstein 2`

Schlüsselwörter in JavaScript, um Variablen zu erstellen. `const` erstellt eine Variable, deren Wert sich nicht mehr ändern darf (Konstante). `let` erstellt eine Variable, die später einen neuen Wert bekommen kann. Faustregel: Verwende immer `const`, es sei denn, du musst den Wert später ändern — dann nimm `let`.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/const)

### CSS (Cascading Style Sheets) `Meilenstein 0`

Eine Sprache, mit der du das Aussehen von Webseiten gestaltest — Farben, Schriftarten, Abstände, Layouts. CSS-Regeln werden in `.css`-Dateien geschrieben und vom Browser angewendet.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Learn/CSS/First_steps/What_is_CSS)

## D

### Datentyp Number `Meilenstein 2`

In JavaScript gibt es verschiedene Datentypen. `Number` ist der Typ für Zahlen — egal ob Ganzzahlen (42) oder Dezimalzahlen (3.14). JavaScript unterscheidet nicht zwischen ganzen Zahlen und Kommazahlen, alles ist ein `Number`. Achtung: Dezimalzahlen können Rundungsfehler haben (z.B. `0.1 + 0.2` ergibt `0.30000000000000004`), deshalb runden wir in der Kalkulation immer auf zwei Nachkommastellen.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number)

## E

### Endpunkt (Endpoint) `Meilenstein 1`

Eine bestimmte URL auf dem Server, an die man Anfragen schicken kann. Jeder Endpunkt hat eine Adresse (z.B. `/api/status`) und reagiert auf eine bestimmte HTTP-Methode (GET, POST, etc.). Endpunkte sind die „Türen" deiner API.

→ [Mehr erfahren (Express Docs)](https://expressjs.com/de/guide/routing.html)

### Event-Handler (Ereignisbehandler) `Meilenstein 5`

Eine Funktion, die aufgerufen wird, wenn ein bestimmtes Ereignis eintritt — z.B. ein Klick auf einen Button oder das Absenden eines Formulars. In React übergibt man Event-Handler als Props: `<form onSubmit={handleSubmit}>`. Der Event-Handler empfängt ein Event-Objekt mit Informationen über das Ereignis.

→ [Mehr erfahren (React Docs)](https://react.dev/learn/responding-to-events)

### Express `Meilenstein 0`

Ein Web-Framework für Node.js, das es einfach macht, einen Server zu bauen. Express stellt Funktionen bereit, um auf HTTP-Anfragen zu reagieren und Antworten zu schicken. Es ist das beliebteste Framework für Node.js-Server.

→ [Mehr erfahren (expressjs.com)](https://expressjs.com/de/)

## F

### Frontend `Meilenstein 0`

Der Teil einer Webanwendung, den der Benutzer im Browser sieht und mit dem er interagiert — Formulare, Buttons, Tabellen. In unserem Projekt ist das Frontend eine React-App, die mit Vite gebaut wird.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer)

### Fehlerbehandlung (Error Handling) `Meilenstein 8`

Der Umgang mit Fehlern im Code. Statt das Programm abstürzen zu lassen, fängt man Fehler ab und reagiert sinnvoll darauf — z.B. mit einer verständlichen Fehlermeldung für den Benutzer. In JavaScript verwendet man dafür `try/catch` und im Backend HTTP-Statuscodes (400 für ungültige Eingaben, 500 für Serverfehler). Gute Fehlerbehandlung macht Software robuster und benutzerfreundlicher.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements)

### fetch `Meilenstein 5`

Eine eingebaute Browser-Funktion, die HTTP-Requests an einen Server sendet. `fetch` gibt ein Promise zurück, das die Antwort des Servers enthält. In unserem Projekt verwenden wir `fetch`, um Kalkulationsdaten an das Backend zu senden: `fetch('/api/forward', { method: 'POST', body: JSON.stringify(input) })`.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/API/Fetch_API/Using_Fetch)

### Funktion (Function) `Meilenstein 2`

Ein wiederverwendbarer Code-Block, der einen Namen hat, Eingaben (Parameter) entgegennimmt und ein Ergebnis (Rückgabewert) zurückgibt. Funktionen helfen, Code übersichtlich zu halten und Wiederholungen zu vermeiden. In JavaScript definiert man sie mit dem Schlüsselwort `function`.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Functions)

## G

### Git `Meilenstein 0`

Ein Versionsverwaltungssystem. Es speichert die Geschichte deines Codes, sodass du jederzeit zu einem früheren Stand zurückkehren kannst. Stell es dir vor wie „Speicherpunkte" in einem Spiel.

→ [Mehr erfahren (git-scm.com)](https://git-scm.com/book/de/v2/Erste-Schritte-Was-ist-Versionsverwaltung%3F)

## H

### HTTP-Statuscode 400/500 `Meilenstein 8`

Spezielle HTTP-Statuscodes für Fehlerfälle. **400 (Bad Request)** bedeutet: Der Client (Browser/Frontend) hat ungültige Daten gesendet — z.B. ein leeres Pflichtfeld oder einen negativen Betrag. Der Fehler liegt beim Benutzer. **500 (Internal Server Error)** bedeutet: Im Server ist ein unerwarteter Fehler aufgetreten — z.B. ein Programmierfehler. Der Fehler liegt beim Server. Die Unterscheidung ist wichtig, damit das Frontend dem Benutzer die richtige Meldung zeigen kann.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/HTTP/Status)

### Hundert-im-Hundert-Rechnung `Meilenstein 3`

Eine kaufmännische Rechenmethode, bei der man dividiert statt multipliziert. Sie wird bei der Verkaufskalkulation für Kundenskonto und Kundenrabatt verwendet. Der Grund: Der Prozentsatz bezieht sich auf den höheren Wert (z.B. Zielverkaufspreis), nicht auf den niedrigeren (Barverkaufspreis). Formel: `Zielverkaufspreis = Barverkaufspreis / (1 - Skontosatz/100)`.

### HTTP (Hypertext Transfer Protocol) `Meilenstein 1`

Das Protokoll (die „Sprache"), über das Browser und Server miteinander kommunizieren. Wenn du eine Webseite aufrufst, schickt dein Browser einen HTTP-Request an den Server, und der Server antwortet mit einer HTTP-Response. Es gibt verschiedene Methoden: GET (Daten abrufen), POST (Daten senden), PUT (Daten ändern), DELETE (Daten löschen).

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/HTTP/Overview)

## J

### JSX (JavaScript XML) `Meilenstein 4`

Eine Syntaxerweiterung für JavaScript, die es erlaubt, HTML-ähnlichen Code direkt in JavaScript zu schreiben. Statt HTML und JavaScript getrennt zu halten, schreibst du beides zusammen: `return <h1>Hallo</h1>;`. Der Browser versteht JSX nicht direkt — Vite wandelt es automatisch in normales JavaScript um. JSX-Dateien haben die Endung `.jsx`.

→ [Mehr erfahren (React Docs)](https://react.dev/learn/writing-markup-with-jsx)

### JSON (JavaScript Object Notation) `Meilenstein 0`

Ein Textformat zum Speichern und Übertragen von Daten. JSON sieht aus wie ein JavaScript-Objekt mit Schlüssel-Wert-Paaren in geschweiften Klammern: `{ "name": "Wert" }`. Es wird verwendet, um Daten zwischen Frontend und Backend auszutauschen.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Learn/JavaScript/Objects/JSON)

### Komponente (Component) `Meilenstein 4`

Ein wiederverwendbarer Baustein der Benutzeroberfläche in React. Eine Komponente ist eine JavaScript-Funktion, die JSX zurückgibt. Jede Komponente kümmert sich um einen bestimmten Teil der Seite — z.B. ein Eingabefeld, eine Tabelle oder die Navigation. Komponenten können ineinander verschachtelt werden, wie Bausteine.

→ [Mehr erfahren (React Docs)](https://react.dev/learn/your-first-component)

## L

### LTS (Long Term Support) `Meilenstein 0`

Eine Version von Node.js, die über einen längeren Zeitraum mit Sicherheitsupdates versorgt wird. Für Projekte sollte man immer die LTS-Version verwenden, weil sie stabiler ist als die neueste Version.

→ [Mehr erfahren (nodejs.org)](https://nodejs.org/en/about/previous-releases)

## M

### Middleware `Meilenstein 0`

Code, der bei jeder Anfrage an den Server automatisch ausgeführt wird, bevor die eigentliche Verarbeitung beginnt. Beispiele: `cors()` erlaubt Zugriffe von anderen Domains, `express.json()` wandelt den Anfrage-Body von Text in ein JavaScript-Objekt um.

→ [Mehr erfahren (Express Docs)](https://expressjs.com/de/guide/using-middleware.html)

### Modul (Module) `Meilenstein 2`

Eine JavaScript-Datei, die Funktionen oder Werte exportiert, damit andere Dateien sie verwenden können. Module helfen, den Code in kleine, übersichtliche Einheiten aufzuteilen. In Node.js exportiert man mit `module.exports` und importiert mit `require()`.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Modules)

## N

### Node.js `Meilenstein 0`

Eine Laufzeitumgebung, die es ermöglicht, JavaScript außerhalb des Browsers auszuführen — zum Beispiel auf einem Server. Damit können wir unser Backend in JavaScript schreiben, derselben Sprache wie das Frontend.

→ [Mehr erfahren (nodejs.org)](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)

### npm (Node Package Manager) `Meilenstein 0`

Ein Paketmanager für JavaScript. Damit kannst du fertige Code-Pakete (Bibliotheken) herunterladen und in deinem Projekt verwenden. Der Befehl `npm install` liest die `package.json` und installiert alle dort aufgelisteten Pakete.

→ [Mehr erfahren (npmjs.com)](https://docs.npmjs.com/about-npm)

## O

### Objekt/Object `Meilenstein 3`

Ein Datentyp in JavaScript, der mehrere zusammengehörige Werte unter einem Namen speichert. Ein Objekt besteht aus Schlüssel-Wert-Paaren in geschweiften Klammern: `const person = { name: 'Max', alter: 15 }`. In unserem Projekt verwenden wir Objekte für die Eingabedaten und Ergebnisse der Kalkulation.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object)

## O — Fortsetzung

### onSubmit `Meilenstein 5`

Ein Event (Ereignis), das ausgelöst wird, wenn ein HTML-Formular abgesendet wird — entweder durch Klick auf den Submit-Button oder durch Drücken der Enter-Taste. In React übergibt man eine Handler-Funktion: `<form onSubmit={handleSubmit}>`. Im Handler ruft man typischerweise `e.preventDefault()` auf, um das Standard-Verhalten (Seite neu laden) zu verhindern.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/API/HTMLFormElement/submit_event)

## P

### Parameter `Meilenstein 2`

Ein Platzhalter in einer Funktionsdefinition, der beim Aufruf der Funktion einen konkreten Wert erhält. Parameter stehen in den runden Klammern nach dem Funktionsnamen: `function roundToTwo(value)` — hier ist `value` der Parameter. Beim Aufruf `roundToTwo(3.456)` bekommt `value` den Wert `3.456`.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Glossary/Parameter)

### package.json `Meilenstein 0`

Die zentrale Konfigurationsdatei eines Node.js-Projekts. Sie enthält den Projektnamen, die Version, Skripte (z.B. `npm start`) und die Liste aller Abhängigkeiten. Jedes Node.js-Projekt hat eine `package.json`.

→ [Mehr erfahren (npm Docs)](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)

### preventDefault `Meilenstein 5`

Eine Methode des Event-Objekts, die das Standard-Verhalten des Browsers verhindert. Beim Absenden eines Formulars würde der Browser normalerweise die Seite neu laden — `e.preventDefault()` verhindert das, damit wir die Daten stattdessen mit `fetch` an das Backend senden können.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/API/Event/preventDefault)

### Promise `Meilenstein 5`

Ein Objekt in JavaScript, das ein zukünftiges Ergebnis repräsentiert. Wenn du `fetch` aufrufst, kommt die Antwort nicht sofort — stattdessen bekommst du ein Promise, das sich später „auflöst" (mit dem Ergebnis) oder „abgelehnt" wird (bei einem Fehler). Mit `await` kannst du auf das Ergebnis warten: `const response = await fetch(...)`.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### Props (Properties) `Meilenstein 4`

Daten, die von einer Eltern-Komponente an eine Kind-Komponente übergeben werden. Props sind wie Funktionsparameter für Komponenten. Beispiel: `<InputField label="Preis" value={100} />` übergibt die Props `label` und `value` an die `InputField`-Komponente. Props sind schreibgeschützt — die Kind-Komponente darf sie nicht verändern.

→ [Mehr erfahren (React Docs)](https://react.dev/learn/passing-props-to-a-component)

### Port `Meilenstein 0`

Eine Nummer, über die ein Programm auf dem Computer erreichbar ist. Unser Backend läuft auf Port 3001 (`http://localhost:3001`), das Frontend auf Port 5173. Verschiedene Programme verwenden verschiedene Ports, damit sie sich nicht gegenseitig stören.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/Port)

### Proxy `Meilenstein 0`

Ein Vermittler, der Anfragen weiterleitet. In unserem Projekt leitet der Vite-Proxy alle Anfragen an `/api/...` automatisch an den Backend-Server auf Port 3001 weiter. So muss das Frontend nicht wissen, auf welchem Port das Backend läuft.

→ [Mehr erfahren (Vite Docs)](https://vite.dev/config/server-options.html#server-proxy)

### Property-Based Test `Meilenstein 3`

Ein Test, der nicht ein einzelnes Beispiel prüft, sondern eine universelle Eigenschaft über viele zufällig generierte Eingaben. Statt zu sagen „für Eingabe X erwarte ich Y", sagt man „für alle gültigen Eingaben muss Eigenschaft Z gelten". Die Bibliothek fast-check generiert automatisch hunderte Testfälle und sucht nach Gegenbeispielen.

→ [Mehr erfahren (fast-check Docs)](https://fast-check.dev/docs/core-blocks/properties/)

## R

### React `Meilenstein 0`

Eine JavaScript-Bibliothek zum Bauen von Benutzeroberflächen. React teilt die Oberfläche in kleine, wiederverwendbare Bausteine auf, die „Komponenten" heißen. Jede Komponente kümmert sich um einen Teil der Seite.

→ [Mehr erfahren (react.dev)](https://react.dev/learn)

### Repository (Repo) `Meilenstein 0`

Ein Projektordner, der von Git verwaltet wird. Es enthält deinen Code und die gesamte Änderungshistorie. Wenn du `git init` ausführst, wird ein normaler Ordner zu einem Repository.

→ [Mehr erfahren (GitHub Docs)](https://docs.github.com/de/repositories/creating-and-managing-repositories/about-repositories)

### require/module.exports `Meilenstein 2`

Das Import/Export-System von Node.js (CommonJS). Mit `module.exports = { meineFunction }` machst du eine Funktion für andere Dateien verfügbar. Mit `const { meineFunction } = require('./datei')` importierst du sie in einer anderen Datei. So können Module miteinander kommunizieren.

→ [Mehr erfahren (Node.js Docs)](https://nodejs.org/api/modules.html#modules-commonjs-modules)

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

### Rückgabewert (Return Value) `Meilenstein 2`

Das Ergebnis, das eine Funktion mit dem Schlüsselwort `return` zurückgibt. Der Rückgabewert kann eine Zahl, ein Text, ein Objekt oder jeder andere Datentyp sein. Beispiel: `return Math.round(value * 100) / 100;` gibt eine gerundete Zahl zurück.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Learn/JavaScript/Building_blocks/Return_values)

## S

### Selektor (CSS) `Meilenstein 4`

Ein Muster in CSS, das bestimmt, welche HTML-Elemente gestylt werden sollen. Es gibt verschiedene Arten: `.klasse` wählt Elemente mit einer bestimmten CSS-Klasse, `#id` wählt ein Element mit einer bestimmten ID, und `element` wählt alle Elemente eines Typs (z.B. `h1`). In unserem Projekt verwenden wir hauptsächlich Klassen-Selektoren wie `.tab-button` oder `.result-table`.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/CSS/CSS_selectors)

### Server `Meilenstein 0`

Ein Programm, das auf Anfragen wartet und Antworten zurückschickt. In unserem Projekt ist der Server ein Node.js-Programm mit Express, das auf Port 3001 läuft und Kalkulationen berechnet.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)

### State (Zustand) `Meilenstein 4`

Daten innerhalb einer Komponente, die sich im Laufe der Zeit ändern können. Wenn sich der State ändert, rendert React die Komponente automatisch neu, damit die Anzeige aktuell bleibt. Beispiel: Der aktive Tab in der Navigation ist ein State — wenn der Benutzer auf einen anderen Tab klickt, ändert sich der State und React zeigt den neuen Tab an.

→ [Mehr erfahren (React Docs)](https://react.dev/learn/state-a-components-memory)

### Statuscode `Meilenstein 1`

Eine dreistellige Zahl in der HTTP-Response, die angibt, ob eine Anfrage erfolgreich war. Wichtige Statuscodes: 200 (OK — alles hat funktioniert), 400 (Bad Request — ungültige Eingabe), 404 (Not Found — URL nicht gefunden), 501 (Not Implemented — Funktion noch nicht programmiert), 500 (Server Error — unerwarteter Fehler).

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/HTTP/Status)

## T

### try/catch `Meilenstein 8`

Eine Kontrollstruktur in JavaScript zum Abfangen von Fehlern. Code im `try`-Block wird normal ausgeführt. Wenn ein Fehler auftritt, springt die Ausführung sofort in den `catch`-Block, wo du auf den Fehler reagieren kannst. Beispiel: `try { berechne(); } catch (err) { zeigeFehler(err); }`. Ohne try/catch würde ein Fehler das ganze Programm zum Absturz bringen.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/try...catch)

### Terminal / Kommandozeile `Meilenstein 0`

Ein Textfenster, in dem du Befehle eingeben kannst, um Programme zu starten, Dateien zu verwalten oder Code auszuführen. Statt mit der Maus zu klicken, tippst du Befehle ein. In VS Code erreichst du es über `Strg + Ö`.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)

### Testframework `Meilenstein 3`

Eine Software-Bibliothek, die das Schreiben und Ausführen von Tests vereinfacht. Ein Testframework stellt Funktionen wie `describe()`, `it()` und `expect()` bereit, mit denen du Tests strukturieren und Ergebnisse prüfen kannst. In unserem Projekt verwenden wir Vitest als Testframework.

→ [Mehr erfahren (Vitest Docs)](https://vitest.dev/guide/)

## U

### Unit-Test `Meilenstein 3`

Ein Test, der eine einzelne Funktion oder ein kleines Code-Stück mit einem konkreten Beispiel prüft. Du gibst bekannte Eingabewerte vor und prüfst, ob das Ergebnis dem erwarteten Wert entspricht. Unit-Tests sind die einfachste Form von Tests und helfen, Fehler früh zu finden.

→ [Mehr erfahren (Vitest Docs)](https://vitest.dev/guide/)

### useState `Meilenstein 4`

Ein React-Hook (eine spezielle Funktion), mit dem du State in einer Komponente verwalten kannst. `useState` gibt ein Array mit zwei Elementen zurück: den aktuellen Wert und eine Funktion zum Ändern. Beispiel: `const [count, setCount] = useState(0)` erstellt einen State `count` mit dem Startwert `0` und die Funktion `setCount` zum Ändern.

→ [Mehr erfahren (React Docs)](https://react.dev/reference/react/useState)

## V

### Validierung (Validation) `Meilenstein 8`

Das Prüfen von Eingabedaten, bevor sie verarbeitet werden. Validierung stellt sicher, dass nur gültige Daten in die Berechnung gelangen — z.B. keine leeren Felder, keine negativen Beträge, keine Buchstaben statt Zahlen. In einer Webanwendung findet die Validierung immer im Backend statt (als „Single Source of Truth"), optional zusätzlich im Frontend (für schnelleres Feedback).

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Learn/Forms/Form_validation)

### Variable `Meilenstein 2`

Ein benannter Speicherplatz, in dem du einen Wert ablegen kannst. In JavaScript erstellst du Variablen mit `const` (unveränderlich) oder `let` (veränderlich). Beispiel: `const price = 100;` erstellt eine Variable namens `price` mit dem Wert `100`.

→ [Mehr erfahren (MDN)](https://developer.mozilla.org/de/docs/Learn/JavaScript/First_steps/Variables)

### Vite `Meilenstein 0`

Ein modernes Build-Tool für Webprojekte. Vite startet einen Entwicklungsserver, der Änderungen sofort im Browser anzeigt (ohne Neuladen). Es ist schneller als ältere Tools wie Webpack.

→ [Mehr erfahren (vite.dev)](https://vite.dev/guide/)

### VS Code (Visual Studio Code) `Meilenstein 0`

Ein kostenloser Code-Editor von Microsoft. Er bietet Syntax-Hervorhebung, ein eingebautes Terminal und viele Erweiterungen, die das Programmieren einfacher machen.

→ [Mehr erfahren (code.visualstudio.com)](https://code.visualstudio.com/docs/getstarted/introvideos)
