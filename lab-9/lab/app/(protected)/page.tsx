import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  const displayName = session.user?.name ?? session.user?.email ?? "there";

  return (
    <section className="space-y-10">
      <header className="space-y-4 text-center">
        <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent">
          Welcome back, {displayName}!
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400">
          Explore protected server-rendered pages powered by multi-provider OAuth authentication
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2">
        <Link
          href="/main"
          className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50 hover:shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-slate-100">Server Data Gallery</h2>
            <p className="text-slate-400">
              Explore server-fetched data from a public API with seamless authentication
            </p>
          </div>
        </Link>
        <Link
          href="/post/1"
          className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/50 hover:shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-slate-100">Dynamic Post Example</h2>
            <p className="text-slate-400">
              Discover dynamic server-rendered routes with real-time data fetching
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
