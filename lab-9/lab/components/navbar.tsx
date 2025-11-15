import Image from "next/image";
import Link from "next/link";
import type { Session } from "next-auth";
import { signOut } from "@/auth";

interface NavbarProps {
  user?: Session["user"];
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-950/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2 text-xl font-bold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg transition-transform group-hover:scale-110">
            <span className="text-sm font-bold text-white">N</span>
          </div>
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            NextAuth Lab
          </span>
        </Link>
        {user ? (
          <div className="flex items-center gap-4">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name ?? user.email ?? "User avatar"}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-slate-600 object-cover ring-2 ring-blue-500/20"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold uppercase text-white shadow-lg">
                {(user.name ?? user.email ?? "?").charAt(0).toUpperCase()}
              </div>
            )}
            <span className="hidden text-sm font-medium text-slate-200 sm:inline">
              {user.name ?? user.email}
            </span>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/signin" });
              }}
            >
              <button
                type="submit"
                className="rounded-lg border border-slate-600/50 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-800"
              >
                Sign out
              </button>
            </form>
          </div>
        ) : (
          <Link
            href="/signin"
            className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Sign in
          </Link>
        )}
      </nav>
    </header>
  );
}
