# AGEND.md — Oberhof Website Rebuild
**Projekt:** Marketing-Website (Frontend only)  
**Stack:** Vite · React · TypeScript · shadcn/ui · Tailwind  
**Inspiration:** moderne, ruhige, warme Hof-/Natur-Websites (z. B. ebengut.com)

---

## 1) Ziel & Leitbild

### Ziel
Eine **moderne, ruhige Marketing-Website**, die:
- Vertrauen aufbaut
- Wärme & Gemütlichkeit eines Bauernhofs vermittelt
- klar, übersichtlich und zeitlos wirkt
- den Oberhof als Ort (Produkte · Vermietung) emotional transportiert

Die bestehende Website dient **ausschließlich als inhaltliches Rohmaterial**,  
**nicht** als Design-, Layout- oder Strukturvorlage.

---

## 2) Design-Leitlinien (verbindlich)

### Atmosphäre
- ruhig, entschleunigt
- naturverbunden
- warm & einladend
- nicht technisch, nicht verspielt, nicht rustikal

### Layout-Prinzipien
- viel Weißraum
- klare Sektionen
- wenige, starke Bilder
- ruhiger Textfluss
- kaum visuelle Trennlinien → stattdessen Abstand & Farbe

### Farben (Richtung, nicht exakt)
- **Neutrals:** warmes Off-White, Sand, Stein
- **Akzent:** Waldgrün / Honig / gedecktes Kupfer
- **Text:** dunkles Braun-Grau (kein Schwarz)

### Typografie
- Serif für Headlines (Wärme, Charakter)
- Sans-Serif für Body (Ruhe, Lesbarkeit)
- große Zeilenhöhe, großzügige Abstände

---

## 3) Seitenstruktur (neu gedacht)

- `/` — Startseite
- `/the-farm`
- `/products`
- `/rentals`
- `/contact`

---

## 4) Seiten-Blueprints

### Startseite
- Hero mit Claim
- 3 Themen-Kacheln
- Kurze Ortsbeschreibung
- CTA

### Der Hof
- Geschichte & Haltung
- 3 Säulen
- Bilder
- CTA

### Produkte
- Philosophie
- Kuratierte Auswahl
- Ablauf
- CTA

### Vermietung
- Raum & Facts
- Nutzung
- Bilder
- CTA

### Kontakt
- Kontaktinfos
- Anfahrt
- Credits

---

## 5) Komponenten

- AppShell
- Header / Footer
- Hero
- Section
- FeatureList
- ImageGrid
- FactsRow
- CTA
- FAQ (optional)

---

## 6) Content-Strategie

- Alt-Content nur als Rohmaterial
- Neu formulieren & strukturieren
- Kein HTML-Copy
- Klar, ruhig, menschlich

---

## 7) Projektstruktur

```
src/
  pages/
  components/
  content/
  styles/
```

---

## 8) Umsetzung (lokal)

1. AppShell + Routing
2. Design Tokens
3. Page Layouts
4. Content
5. Bilder
6. Mobile
7. Cleanup

---

## 9) Qualitätskriterien

- ruhig & modern
- warm & natürlich
- klare Botschaft pro Seite
- ein CTA
- keine Altseiten-Anmutung

---

## 10) Codex-Arbeitsmodus

- Layout → Copy → Bilder
- kleine Schritte
- kein Overengineering
