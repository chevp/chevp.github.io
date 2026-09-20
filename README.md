<a name="readme-top"></a>

<div align="center">

<h1>chevp.github.io</h1>

Der zentrale Projekt-Hub von **chevp** — eine durchsuchbare Übersicht aller öffentlichen Repositories, Tools und Demos

[![][github-license-shield]][github-license-link]
[![][github-pages-shield]][github-pages-link]
[![][vite-shield]][vite-link]

</div>

<details>
<summary><kbd>Inhaltsverzeichnis</kbd></summary>

#### TOC

- [✨ Über das Projekt](#-über-das-projekt)
- [📦 Featured Projects](#-featured-projects)
- [🚀 Installation](#-installation)
- [⌨️ Entwicklung](#️-entwicklung)
- [📁 Projektstruktur](#-projektstruktur)
- [🔧 Konfiguration](#-konfiguration)
- [🔗 Links](#-links)

####

</details>

## ✨ Über das Projekt

`chevp.github.io` ist eine Single-Page-Anwendung, die alle öffentlichen und privaten Repositories von **chevp** kategorisiert, durchsuchbar und filterbar auflistet — von ECS-Tooling über KI-gestützte Entwicklungs-Frameworks bis hin zu Web Components, Tutorials und Grafik-/Gamedev-Experimenten.

Die Seite ist unter [chevp.github.io](https://chevp.github.io) erreichbar und dient als zentraler Einstiegspunkt in das gesamte Projekt-Ökosystem.

**Highlights:**
- 🔍 Live-Suche und Kategoriefilter über alle Repositories
- 🗂️ Gruppierung nach Kategorien (Projects, Development, Engine, Frameworks, Gaming, Graphics, Platform, Tools, Web, Assets, Data)
- 📱 Responsives, Mobile-First-Design
- ⚡ Gebaut mit [Vite](https://vitejs.dev) für schnelle Entwicklung und optimierte Production-Builds

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 📦 Featured Projects

| Projekt | Beschreibung |
|---------|-------------|
| [Projects Hub (antarctica.io)](https://chevp.github.io/antarctica.io/projects) | Erklärseiten zu allen privaten Projekten, gruppiert nach Status |
| [ECS Configurator](https://chevp.github.io/ecs-configurator-site/) | Visuelle Konfiguration & strukturiertes Asset-Management für ECS-Systeme |
| [chevp-ai-framework](https://chevp.github.io/chevp-ai-framework/) | Strukturierter Lifecycle für KI-gestützte Softwareentwicklung |
| [Prompt Guide](https://chevp.github.io/prompt-guide/) | Leitfaden für AI-Prompt-Engineering in Programmierung und Gamedev |
| [Programming Tutorials](https://chevp.github.io/tutorials/) | Kuratierte Code-Beispiele zu Grafik, Tools und Performance |
| [chevp-components](https://chevp.github.io/chevp-components/docs/demo.html) | Framework-agnostische Vanilla Web Components |

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🚀 Installation

> \[!IMPORTANT]\
> Dieses Projekt benötigt Node.js sowie npm.

```bash
$ git clone https://github.com/chevp/chevp.github.io.git
$ cd chevp.github.io
$ npm install
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Entwicklung

```bash
# Entwicklungsserver starten
$ npm run dev
```

Öffne anschließend [http://localhost:3000](http://localhost:3000).

```bash
# Production-Build erstellen
$ npm run build

# Build lokal als Vorschau ausliefern
$ npm run preview
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 📁 Projektstruktur

```
chevp.github.io/
├── index.html          # Einstiegspunkt der Single-Page-Anwendung
├── main.js             # Projektdaten & App-Bootstrapping
├── script.js            # Such-, Filter- und UI-Interaktionslogik
├── style.css            # Styling & responsives Layout
├── public/
│   ├── assets/          # Statische Assets (Bilder, Icons)
│   ├── avatar.png
│   ├── llms.txt          # Maschinenlesbare Projektübersicht für LLMs
│   ├── robots.txt        # Crawler-Policy
│   └── sitemap.xml       # Sitemap
├── context/
│   └── plans/            # Planungs- und Kontextdokumente
├── vite.config.js        # Vite-Build-Konfiguration
└── package.json
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔧 Konfiguration

Die Liste der angezeigten Projekte und Kategorien wird in `main.js` gepflegt (Objekt `projectData`). Neue Einträge werden dort der passenden Kategorie hinzugefügt:

```js
"Projects": [
  { name: "Projektname", desc: "Kurzbeschreibung", url: "https://...", text: "Link-Text →" }
]
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔗 Links

- **[GitHub: chevp](https://github.com/chevp)** — Quellcode aller öffentlichen Repositories
- **[sitemap.xml](https://chevp.github.io/sitemap.xml)** — Maschinenlesbarer Site-Index
- **[robots.txt](https://chevp.github.io/robots.txt)** — Crawler-Policy
- **[Site Policy](https://chevp.github.io/site-policy/)** — AGB, Datenschutz, Impressum

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

<details><summary><h4>📝 Lizenz</h4></summary>

Dieses Projekt ist [MIT](./LICENSE)-lizenziert.

</details>

Copyright © 2026 chevp

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[github-license-link]: https://github.com/chevp/chevp.github.io/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/badge/license-MIT-white?labelColor=black&style=flat-square
[github-pages-link]: https://chevp.github.io
[github-pages-shield]: https://img.shields.io/badge/github%20pages-live-43853d?labelColor=black&logo=github&logoColor=white&style=flat-square
[vite-link]: https://vitejs.dev/
[vite-shield]: https://img.shields.io/badge/vite-5.4-646cff?labelColor=black&logo=vite&logoColor=white&style=flat-square
