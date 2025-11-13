# Lab 7 — Next.js (Consolidated Solutions)

This repository packages the Lab 7 exercises (7a–7d) into a single Next.js 14 application using the App Router and handcrafted CSS.

## Project Layout
- `app/` — route files, global layout, and shared stylesheet.
- `components/` — grouped React components for each lab task.

## Getting Started
1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` to view the labs.

3. Build for production:

   ```bash
   npm run build
   npm start
   ```

## Notes
- Interactive modules are Client Components and include the `"use client"` directive as required by Next.js.
- Dark mode, background theme selection, and shopping list state persist via `localStorage`.
- Styles now live in `app/globals.css`; Tailwind and Vite-specific files have been removed.
