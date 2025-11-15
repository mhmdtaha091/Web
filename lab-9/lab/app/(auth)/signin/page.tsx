import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

const providers = [
  { id: "google", label: "Continue with Google" },
  { id: "github", label: "Continue with GitHub" },
] as const;

export default async function SignInPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex min-h-[calc(100vh-180px)] items-center justify-center">
      <section className="mx-auto w-full max-w-md space-y-8 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-10 shadow-2xl backdrop-blur-sm">
        <header className="space-y-3 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent">
            Welcome Back
          </h1>
          <p className="text-slate-400">
            Sign in with your preferred provider to continue
          </p>
        </header>
        <div className="space-y-3">
          {providers.map((provider) => (
            <form
              key={provider.id}
              action={async () => {
                "use server";
                await signIn(provider.id, { redirectTo: "/" });
              }}
            >
              <button
                type="submit"
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl border border-slate-600/50 bg-slate-800/50 px-6 py-4 text-sm font-semibold text-slate-100 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-slate-500 hover:bg-slate-800 hover:shadow-xl"
              >
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
                {provider.label}
              </button>
            </form>
          ))}
        </div>
        <p className="text-center text-xs text-slate-500">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </section>
    </div>
  );
}
