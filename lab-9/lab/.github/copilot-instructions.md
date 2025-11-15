- [x] Verify that the copilot-instructions.md file in the .github directory is created. Completed by generating the checklist file.

- [x] Clarify Project Requirements
	Confirmed Next.js App Router project with NextAuth providers per user brief.

- [x] Scaffold the Project
	Created Next.js App Router project via `npx create-next-app@latest . --ts --app --tailwind --eslint --use-npm --yes`.

- [x] Customize the Project
	Plan: add NextAuth configuration with Google/GitHub providers, create server-protected route group with shared layout and navbar, build /signin redirect logic, implement server-fetched /main and /post/[id] pages, and supply deployment-focused docs/env templates.
	Implemented Google & GitHub NextAuth setup, server-only protected route group with navbar, `/signin` redirect logic, server-rendered `/main` and `/post/[id]` pages, and updated docs/env templates.

- [x] Install Required Extensions
	No additional extensions required beyond default workspace setup.

- [x] Compile the Project
	Ran `npm run lint` and `npm run build` successfully after installing NextAuth dependencies and again after the latest UI refresh.

- [x] Create and Run Task
	Skipped: npm scripts cover all build/run workflows, no custom VS Code task required.

- [x] Launch the Project
	Started `npm run dev` for local testing.

- [x] Ensure Documentation is Complete
	Updated README.md, provided .env template, and removed HTML comments from this tracker.

- Work through each checklist item systematically.
- Keep communication concise and focused.
- Follow development best practices.
