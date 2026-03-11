# Git-Commit-Regeln für das Lernprojekt

## Sprache

- Alle Commit-Nachrichten werden auf **Deutsch** verfasst.

## Format

Jede Commit-Nachricht folgt diesem Muster:

```
<Typ>: <Kurzbeschreibung>

<Warum wurde diese Änderung gemacht?>
```

- Die erste Zeile ist die Zusammenfassung (max. 72 Zeichen).
- Nach einer Leerzeile folgt der Body, der erklärt **warum** die Änderung nötig war — nicht was geändert wurde (das sieht man im Diff).
- Der Body kann mehrere Zeilen haben, jeweils max. 72 Zeichen breit.

Erlaubte Typen:

- `Feature` — Neue Funktionalität
- `Fix` — Fehlerbehebung
- `Test` — Tests hinzufügen oder ändern
- `Doku` — Dokumentation oder Anleitungen
- `Refactor` — Code-Umstrukturierung ohne Funktionsänderung
- `Style` — CSS oder Formatierung
- `Setup` — Projektkonfiguration, Abhängigkeiten

## Beispiele

```
Setup: Express-Server mit cors und JSON-Body-Parser eingerichtet

Der Server braucht cors, damit das Frontend von einem anderen Port
zugreifen kann. JSON-Body-Parser ist nötig, damit POST-Requests mit
JSON-Daten verarbeitet werden können.
```

```
Fix: Rundungsfehler bei Skonto-Berechnung behoben

Die Skonto-Berechnung hat bei bestimmten Werten (z.B. 3% von 132,11)
auf 3 Nachkommastellen gerundet, was zu falschen Ergebnissen in der
Verkaufskalkulation geführt hat.
```

## Regeln

- Commits sollen klein und nachvollziehbar sein — lieber mehrere kleine als ein großer Commit.
- Jeder Commit soll einen funktionsfähigen Zustand hinterlassen (keine kaputten Zwischenstände).
- Die Kurzbeschreibung beginnt mit einem Großbuchstaben und endet ohne Punkt.
- Maximal 72 Zeichen in der ersten Zeile.

## Git-Tags

Meilensteine werden als annotierte Tags gespeichert:

```
git tag -a v0-projektstart -m "Meilenstein 0: Projektstruktur aufgesetzt"
```

Tag-Format: `v{nummer}-{beschreibung}` (z.B. `v2-einkaufskalkulation`)
