# Nächste Schritte

Diese Datei zeigt dir, wo du gerade stehst und was als Nächstes kommt. Nach jedem Meilenstein wird sie aktualisiert.

## Aktueller Stand: Meilenstein 2 — Einkaufskalkulation ✅

Du hast die erste echte Berechnungslogik implementiert:

- Kalkulationsmodul (`backend/src/calculation.js`) mit `roundToTwo()` und `calculateForward()`
- Einkaufskalkulation berechnet: Listeneinkaufspreis → Zieleinkaufspreis → Bareinkaufspreis → Bezugspreis
- Unit-Tests mit bekannten Beispielrechnungen und Edge-Cases
- Glossar um 8 neue Begriffe erweitert (const/let, Datentyp Number, Funktion, Modul, Parameter, require/module.exports, Rückgabewert, Variable)

## Nächster Schritt: Meilenstein 3 — Verkaufskalkulation

### Ziel

Die Berechnungslogik wird vervollständigt: Die Verkaufskalkulation berechnet den Listenverkaufspreis aus dem Bezugspreis. Außerdem kommen die Rückwärtskalkulation und die Differenzkalkulation dazu. Du lernst die „Hundert-im-Hundert-Rechnung" kennen und schreibst Property-Based Tests.

### Was du tun musst

#### Schritt 1: Verkaufskalkulation erweitern

Erweitere `calculateForward()` um den Verkaufsteil:

```
Bezugspreis
+ Handlungskostenzuschlag (% vom Bezugspreis)
= Selbstkostenpreis
+ Gewinnzuschlag (% vom Selbstkostenpreis)
= Barverkaufspreis
+ Kundenskonto → Zielverkaufspreis (Hundert-im-Hundert!)
+ Kundenrabatt → Listenverkaufspreis (Hundert-im-Hundert!)
```

#### Schritt 2: Rückwärtskalkulation

Erstelle `calculateBackward()` — die umgekehrte Richtung: Vom Listenverkaufspreis zurück zum Listeneinkaufspreis.

#### Schritt 3: Differenzkalkulation

Erstelle `calculateDifference()` — berechnet den Gewinn bei gegebenem Einkaufs- und Verkaufspreis.

#### Schritt 4: Tests

Schreibe Unit-Tests und Property-Based Tests für alle drei Kalkulationsarten.

### Welche Dateien werden verändert?

| Datei | Status | Beschreibung |
|-------|--------|-------------|
| `backend/src/calculation.js` | Erweitert | Verkaufs-, Rückwärts- und Differenzkalkulation |
| `backend/tests/calculation.test.js` | Erweitert | Unit-Tests für alle Kalkulationsarten |
| `backend/tests/calculation.prop.test.js` | Neu | Property-Based Tests |
| `docs/meilenstein-3.md` | Neu | Anleitung für diesen Meilenstein |
| `docs/glossar.md` | Erweitert | Neue Begriffe (Array, Assertion, etc.) |
| `docs/naechste-schritte.md` | Aktualisiert | Vorschau auf Meilenstein 4 |

### Neue Konzepte

| Konzept | Kurz erklärt |
|---------|-------------|
| Hundert-im-Hundert-Rechnung | Division statt Multiplikation bei Skonto/Rabatt auf der Verkaufsseite |
| Array | Eine geordnete Liste von Werten |
| Property-Based Test | Ein Test, der universelle Eigenschaften über viele zufällige Eingaben prüft |
| Unit-Test | Ein Test, der ein spezifisches Beispiel prüft |

### Wie du startest

1. Öffne `backend/src/calculation.js`
2. Erweitere `calculateForward()` um den Verkaufsteil
3. Implementiere `calculateBackward()` und `calculateDifference()`
4. Schreibe Tests in `backend/tests/`
5. Führe die Tests aus mit `cd backend && npm test`
