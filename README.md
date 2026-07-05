# AUCOSMOS — Organ Days Quiet-Room + Coda Update

Bismillah.

This version turns **The Organ Days** into a true doorway experience and separates the ending so Heart Day does not spoil the coda if opened first.

What changed:

- `organ-days.html` is the entry room / door selection page.
- Each organ has its own quiet page.
- `coda.html` is now a separate final room.
- Heart Day contains only Heart Day.
- Individual organ pages do not have a full top navigation bar.
- Each organ page ends with one small link: **Return to the doors**.
- Door links use a subtle fade-to-dark transition before the next room opens.
- Heart Day keeps the optional soft heartbeat button.

Upload all files in this folder to the root of your GitHub Pages repository.

Required files:

```txt
index.html
organ-days.html
ear-day.html
eyes-day.html
mind-sealed.html
mind-flooded.html
mouth-day.html
heart-day.html
coda.html
```

Start here after uploading:

```txt
https://aucosmos.com/organ-days.html
```

The final room will be here:

```txt
https://aucosmos.com/coda.html
```


Update: `organ-days.html` now includes a `Choose for me` randomizer button. It randomly opens one organ room and excludes `coda.html`, so the ending is never spoiled by the random choice.


Latest small update: `organ-days.html` now uses a **Pick for me** button that suggests one organ room without opening it automatically. The visitor can still choose whether to enter the suggested room or pick another door. The coda is excluded from suggestions.


## Visual experience layer

This version adds subtle sensory visuals to each quiet room:

- Ear Day: soft wave lines and distant ripples.
- Eyes Day: light beam and dust-like particles.
- Mind sealed: enclosed room and faint echo-thoughts.
- Mind flooded: layered signal pulses.
- Mouth Day: breath line and word-vapor.
- Heart Day: room-wide pulse behind the existing heartbeat button.
- Coda: minimal breathing field.

The animations respect `prefers-reduced-motion`, so visitors who disable motion will get a still version.


## Visual Experience v2

This version makes the sensory visuals intentionally visible, not barely-there background decoration. Each room now has a visual installation before the text begins:

- Ear Day: animated sound source, wave lines, and expanding rings.
- Eyes Day: moving light beam, dust particles, and a chair resolving into a named object.
- Mind Sealed: a dark enclosed frame with faint echo-thoughts.
- Mind Flooded: signals and streams arriving toward a central point.
- Mouth Day: breath line, mouth shape, and word-vapor.
- Heart Day: minimal but visible pulse field.
- Coda: almost-empty breathing field.

Upload all files to the GitHub Pages root. Keep `.nojekyll` in the root as a safety measure.
