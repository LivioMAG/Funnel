# Funnel – Teil 1

Erster Abschnitt des Funnels als statische HTML/CSS/JS-Umsetzung.

## Start

```bash
python3 -m http.server 8000
```

Dann im Browser öffnen: `http://localhost:8000`

## Inhalte pflegen

Alle sichtbaren Texte liegen als Key-Value-Werte in `funnel-config.json` unter `texts`.
Die Seite lädt diese Inhalte beim Start per JavaScript.

Bilder sind aktuell als Platzhalter umgesetzt.
