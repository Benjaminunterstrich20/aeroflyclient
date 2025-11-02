# Aerofly Client Display

Dies ist ein **Browser-basierter Aerofly FS Client**, der Instrumente und Horizon-Display auf Tablet oder Handy anzeigen kann.

## Setup

1. Aerofly FS konfigurieren:
   - Settings → Miscellaneous → "Send flight data to FSWidgets apps" aktivieren
   - UDP oder TCP Port (z.B. 8080) merken

2. Bridge-Server auf PC starten:
   - UDP Daten von Aerofly → WebSocket für Browser konvertieren

3. Repository auf Handy/Tablet öffnen:
   - Browser → `index.html`
   - IP deines PCs / Port in `app.js` eintragen

## Features
- Horizon Display (Pitch/Roll)
- Geschwindigkeit, Höhe, Kurs
- Funktioniert auf Tablet/Handy, Multi-Monitor ready
