# Anforderungen: Kalkulationsrechner

## Was ist der Kalkulationsrechner?

Der Kalkulationsrechner ist eine Webanwendung für Schüler der 9. Klasse an der Wirtschaftsschule. Er hilft dabei, die Handelskalkulation zu verstehen und zu üben — also die Berechnung von Einkaufs- und Verkaufspreisen im Handel.

Die Anwendung zeigt jeden Rechenschritt einzeln an, damit du nachvollziehen kannst, wie sich der Preis zusammensetzt.

## Hintergrund: Was ist Handelskalkulation?

Wenn ein Händler eine Ware einkauft und weiterverkauft, muss er den Verkaufspreis berechnen. Dabei spielen viele Faktoren eine Rolle:

- Rabatte und Skonti vom Lieferanten
- Transportkosten
- Gemeinkosten des Händlers (Miete, Personal, etc.)
- Gewinnaufschlag
- Rabatte und Skonti für den Kunden

Die Handelskalkulation ist das Verfahren, mit dem all diese Faktoren berücksichtigt werden, um vom Einkaufspreis zum Verkaufspreis zu kommen — oder umgekehrt.

## Das Kalkulationsschema

Das vollständige Schema sieht so aus:

```
  Listeneinkaufspreis                    (Preis laut Lieferant)
- Liefererrabatt                         (% vom Listeneinkaufspreis)
= Zieleinkaufspreis
- Liefererskonto                         (% vom Zieleinkaufspreis)
= Bareinkaufspreis
+ Bezugskosten                           (Transport, Verpackung, etc.)
= Bezugspreis (Einstandspreis)
+ Handlungskostenzuschlag                (% vom Bezugspreis)
= Selbstkostenpreis
+ Gewinnzuschlag                         (% vom Selbstkostenpreis)
= Barverkaufspreis
+ Kundenskonto                           (Hundert-im-Hundert-Rechnung)
= Zielverkaufspreis
+ Kundenrabatt                           (Hundert-im-Hundert-Rechnung)
= Listenverkaufspreis                    (Preis für den Kunden)
```

### Besonderheit: Hundert-im-Hundert-Rechnung

Bei Kundenskonto und Kundenrabatt wird nicht einfach ein Prozentsatz aufgeschlagen. Stattdessen wird die sogenannte „Hundert-im-Hundert-Rechnung" verwendet:

- Zielverkaufspreis = Barverkaufspreis ÷ (1 − Skontosatz ÷ 100)
- Listenverkaufspreis = Zielverkaufspreis ÷ (1 − Rabattsatz ÷ 100)

Der Grund: Wenn der Kunde später Skonto oder Rabatt abzieht, soll genau der Barverkaufspreis übrig bleiben. Deshalb wird rückwärts gerechnet — man teilt statt zu multiplizieren.

## Die drei Kalkulationsarten

### 1. Vorwärtskalkulation

Du kennst den Einkaufspreis und willst den Verkaufspreis berechnen.

**Eingaben:**

| Feld | Beschreibung | Beispiel |
| ---- | ------------ | -------- |
| Listeneinkaufspreis | Preis laut Lieferant | 100,00 € |
| Liefererrabatt | Rabatt des Lieferanten | 10 % |
| Liefererskonto | Skonto des Lieferanten | 2 % |
| Bezugskosten | Transport, Verpackung etc. | 5,00 € |
| Handlungskostenzuschlag | Gemeinkosten des Händlers | 25 % |
| Gewinnzuschlag | Gewünschter Gewinn | 10 % |
| Kundenskonto | Skonto für den Kunden | 3 % |
| Kundenrabatt | Rabatt für den Kunden | 5 % |

**Ergebnis:** Eine Tabelle mit allen 15 Rechenschritten vom Listeneinkaufspreis bis zum Listenverkaufspreis.

**Beispielrechnung:**

| Schritt | Betrag |
| ------- | ------ |
| Listeneinkaufspreis | 100,00 € |
| − Liefererrabatt (10 %) | 10,00 € |
| = Zieleinkaufspreis | 90,00 € |
| − Liefererskonto (2 %) | 1,80 € |
| = Bareinkaufspreis | 88,20 € |
| + Bezugskosten | 5,00 € |
| = Bezugspreis | 93,20 € |
| + Handlungskostenzuschlag (25 %) | 23,30 € |
| = Selbstkostenpreis | 116,50 € |
| + Gewinnzuschlag (10 %) | 11,65 € |
| = Barverkaufspreis | 128,15 € |
| + Kundenskonto (3 %) | 3,96 € |
| = Zielverkaufspreis | 132,11 € |
| + Kundenrabatt (5 %) | 6,95 € |
| = Listenverkaufspreis | 139,06 € |

### 2. Rückwärtskalkulation

Du kennst den Verkaufspreis (z.B. den Marktpreis) und willst wissen, wie hoch der Einkaufspreis maximal sein darf.

**Eingaben:**

| Feld | Beschreibung |
| ---- | ------------ |
| Listenverkaufspreis | Gewünschter oder vorgegebener Verkaufspreis |
| Kundenrabatt | Rabatt für den Kunden (%) |
| Kundenskonto | Skonto für den Kunden (%) |
| Gewinnzuschlag | Gewünschter Gewinn (%) |
| Handlungskostenzuschlag | Gemeinkosten (%) |
| Bezugskosten | Transport, Verpackung etc. (€) |
| Liefererskonto | Skonto des Lieferanten (%) |
| Liefererrabatt | Rabatt des Lieferanten (%) |

**Ergebnis:** Eine Tabelle mit allen Rechenschritten in umgekehrter Reihenfolge — vom Listenverkaufspreis zurück zum Listeneinkaufspreis.

### 3. Differenzkalkulation

Du kennst sowohl den Einkaufspreis als auch den Verkaufspreis und willst wissen, wie viel Gewinn übrig bleibt.

**Eingaben:**

| Feld | Beschreibung |
| ---- | ------------ |
| Listeneinkaufspreis | Preis laut Lieferant (€) |
| Liefererrabatt | Rabatt des Lieferanten (%) |
| Liefererskonto | Skonto des Lieferanten (%) |
| Bezugskosten | Transport, Verpackung etc. (€) |
| Handlungskostenzuschlag | Gemeinkosten (%) |
| Listenverkaufspreis | Vorgegebener Verkaufspreis (€) |
| Kundenrabatt | Rabatt für den Kunden (%) |
| Kundenskonto | Skonto für den Kunden (%) |

**Ergebnis:** Der Selbstkostenpreis, der Barverkaufspreis, der Gewinn in Euro und der Gewinn als Prozentsatz.

## Bedienung der Anwendung

### Navigation

Die Anwendung hat oben eine Navigation mit drei Reitern:

1. **Vorwärtskalkulation** — Einkaufspreis → Verkaufspreis
2. **Rückwärtskalkulation** — Verkaufspreis → Einkaufspreis
3. **Differenzkalkulation** — Gewinn ermitteln

### Eingabe

Jede Kalkulationsart hat ein Formular mit den passenden Eingabefeldern. Alle Felder müssen ausgefüllt werden. Beträge werden in Euro eingegeben, Prozentsätze als Zahl zwischen 0 und 100.

### Berechnung

Nach dem Absenden des Formulars wird das Ergebnis als Tabelle angezeigt. Jeder Rechenschritt ist einzeln aufgeführt, damit du die Berechnung nachvollziehen kannst.

### Fehlermeldungen

Wenn etwas nicht stimmt, zeigt die Anwendung verständliche Fehlermeldungen:

| Fehler | Meldung |
| ------ | ------- |
| Feld ist leer | „Bitte gib einen Wert ein" |
| Keine gültige Zahl | „Bitte gib eine gültige Zahl ein" |
| Negativer Wert | „Der Wert darf nicht negativ sein" |
| Prozentwert über 100 | „Der Prozentwert darf nicht größer als 100 sein" |

## Formatierung

- Alle Beträge werden mit zwei Nachkommastellen und dem Euro-Zeichen angezeigt (z.B. „93,20 €")
- Alle Prozentwerte werden mit dem Prozentzeichen angezeigt (z.B. „10 %")
- Zwischenergebnisse (Zieleinkaufspreis, Bareinkaufspreis, etc.) und Endergebnisse sind in der Tabelle klar erkennbar

## Technischer Aufbau (vereinfacht)

Die Anwendung besteht aus zwei Teilen:

```
┌──────────────────────┐         ┌──────────────────────┐
│      Frontend        │  HTTP   │      Backend         │
│   (React im Browser) │ ──────→ │  (Node.js Server)    │
│                      │ ←────── │                      │
│  - Formulare         │  JSON   │  - Berechnungslogik  │
│  - Ergebnis-Tabelle  │         │  - Validierung       │
│  - Fehlermeldungen   │         │  - REST-API          │
└──────────────────────┘         └──────────────────────┘
```

1. Du gibst Werte in ein Formular ein (Frontend)
2. Das Frontend schickt die Werte als JSON an den Server (Backend)
3. Der Server prüft die Eingaben und berechnet das Ergebnis
4. Der Server schickt das Ergebnis als JSON zurück
5. Das Frontend zeigt das Ergebnis als Tabelle an

Dieser Ablauf ist ein typisches Muster in der Webentwicklung und wird dir in vielen Anwendungen begegnen.
