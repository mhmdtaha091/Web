import { auth } from "@/auth";
import { redirect } from "next/navigation";

interface ApiUser {
  id: number;
  name: string;
  email: string;
  company?: {
    name?: string;
  };
  website?: string;
}

async function getUsers(): Promise<ApiUser[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

export default async function MainPage() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  let users: ApiUser[] = [];
  let error: Error | null = null;

  try {
    users = await getUsers();
  } catch (err) {
    error = err instanceof Error ? err : new Error("Unknown error");
  }

  if (error) {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Server Data Gallery</h1>
        <p className="rounded-md border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
          We could not load user data right now. Please try again later.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <header className="space-y-3 text-center">
        <h1 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent">
          Server Data Gallery
        </h1>
        <p className="mx-auto max-w-2xl text-slate-400">
          All data is fetched securely on the server before rendering, ensuring optimal performance and security
        </p>
      </header>
      <ul className="grid gap-6 md:grid-cols-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-bold text-white shadow-lg">
                {user.name.charAt(0)}
              </div>
              <h2 className="mb-1 text-xl font-bold text-slate-100">{user.name}</h2>
              <p className="mb-3 text-sm text-slate-400">{user.email}</p>
              {user.company?.name ? (
                <p className="mb-2 inline-block rounded-full bg-slate-800/50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
                  {user.company.name}
                </p>
              ) : null}
              {user.website ? (
                <p className="mt-2 text-xs text-slate-500">{user.website}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
