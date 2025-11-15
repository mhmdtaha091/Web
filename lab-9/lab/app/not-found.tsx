import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
      <section className="mx-auto flex max-w-lg flex-col items-center gap-6 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-center shadow-2xl">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-pink-600 shadow-lg">
          <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent">
          Page Not Found
        </h1>
        <p className="text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          Back to Dashboard
        </Link>
      </section>
    </div>
  );
}
