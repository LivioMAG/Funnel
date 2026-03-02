# Funnel

JSON-gesteuerter Recruiting-Funnel als statische Website.

## Starten

Da die Seite eine JSON-Datei lädt, sollte sie über einen lokalen Server ausgeführt werden:

```bash
python3 -m http.server 8000
```

Dann im Browser öffnen: `http://localhost:8000`

## Konfiguration anpassen

Alle Inhalte befinden sich in `funnel-config.json`.

Dort kannst du unter anderem ändern:

- Firmenname, Headline, Beschreibung
- Benefits
- CTA-Text
- Fragen und Antwortoptionen inkl. Score
- Ergebnistexte
- Labels für Name/E-Mail und Erfolgsmeldung

Nach dem Speichern der JSON-Datei Seite neu laden, dann sind die neuen Texte direkt sichtbar.
