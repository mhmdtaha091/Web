# Lab 7 — React + Vite (Consolidated Solutions)

This repository contains consolidated solutions for Lab 7 (parts 7a–7d) implemented as a small React + Vite project.

Contents
- src/components/Lab7a — Login form (state, validation)
- src/components/Lab7b — Shopping list (CRUD)
- src/components/Lab7c — Tailwind responsive card and sticky navbar
- src/components/Lab7d — Counter and Theme Switcher (Tailwind + React state)

Quick start
1. Install dependencies:

   npm install

2. Initialize Tailwind (if you haven't already) — included here is a config, but if you prefer to re-generate run:

   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

3. Start development server:

   npm run dev

Notes about Tailwind
- The project includes `tailwind.config.js`, `postcss.config.js`, and `src/index.css` with Tailwind directives.
- `darkMode: 'class'` is enabled. The sticky navbar toggles `dark` class on the `html` element.

Files added
- `src/App.jsx` — main app that composes all labs
- `src/main.jsx` — Vite entry
- `src/index.css` — includes Tailwind directives
- `index.html` — Vite HTML file
- Lab components under `src/components/Lab7*`

If you want help wiring this into an existing project or adjusting styling, tell me which files exist already and I will adapt the changes.
