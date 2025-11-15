## NextAuth Lab

Full-stack Next.js 14 App Router project that demonstrates multi-provider OAuth with Google and GitHub using NextAuth, fully server-protected routes, and server-rendered data fetching.

### Features
- `/signin` route group that redirects authenticated users away from the sign-in screen.
- Server-enforced session protection for the dashboard (`/`), `/main`, and dynamic `/post/[id]` routes.
- Server-only data fetching from the JSONPlaceholder API with graceful error handling.
- Responsive navbar with conditional UI (sign-in link vs. user avatar/name and sign-out action).
- Ready for Vercel deployment with environment variable templates for both OAuth providers.

### Prerequisites
- Node.js 18.18 or later
- OAuth credentials for Google and GitHub

### Environment Variables
Copy `.env.example` to `.env.local` and set the values before running the app locally or deploying to Vercel.

```bash
cp .env.example .env.local
# then edit .env.local with provider credentials and AUTH_SECRET
```

Required variables:

- `AUTH_SECRET` – secure random string for session encryption (use `openssl rand -hex 32`).
- `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET`
- `AUTH_GITHUB_ID` / `AUTH_GITHUB_SECRET`
- `NEXTAUTH_URL` – set to your local URL for development and Vercel production domain in deployment settings.

### Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The app runs on [http://localhost:3000](http://localhost:3000). All protected routes enforce authentication on the server; unauthenticated visitors are redirected to `/signin`.

### Key Routes
- `/signin` – Sign-in screen with Google and GitHub options.
- `/` – Authenticated landing page with quick links to other protected pages.
- `/main` – Server-rendered list of users fetched from JSONPlaceholder.
- `/post/[id]` – Dynamic, server-rendered post detail page with author lookup.

### Deployment Checklist (Vercel)
1. Push the project to GitHub.
2. Create a new Vercel project from the repository.
3. Configure all environment variables listed above in the Vercel dashboard.
4. For each OAuth provider, add the production callback URL: `https://<your-vercel-domain>/api/auth/callback/<provider>`.
5. Trigger a deployment; verify that sign-in flows and protected pages work end-to-end.

### Testing OAuth Providers Locally
1. Register `http://localhost:3000/api/auth/callback/<provider>` as an authorized redirect URI with each provider.
2. Fill in `.env.local` with the development credentials.
3. Run `npm run dev` and confirm that all providers complete the sign-in flow.

### Useful Commands
- `npm run lint` – Run ESLint checks.
- `npm run build` – Create an optimized production build.
- `npm run start` – Run the production build locally (after `npm run build`).
