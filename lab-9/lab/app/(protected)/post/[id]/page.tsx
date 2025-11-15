import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";

interface PostPayload {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface UserPayload {
  id: number;
  name: string;
  email: string;
}

async function getPost(id: number): Promise<PostPayload> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to load post");
  }

  return response.json();
}

async function getAuthor(userId: number): Promise<UserPayload | null> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  const { id } = await params;
  const postId = Number(id);

  if (!Number.isInteger(postId) || postId <= 0) {
    notFound();
  }

  const post = await getPost(postId);
  const author = await getAuthor(post.userId);

  return (
    <article className="mx-auto max-w-3xl space-y-8 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-800 p-10 shadow-2xl">
      <header className="space-y-4 border-b border-slate-700/50 pb-6">
        <div className="inline-block rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
          Post #{post.id}
        </div>
        <h1 className="text-4xl font-bold leading-tight text-slate-100">{post.title}</h1>
        {author ? (
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white shadow-lg">
              {author.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-300">{author.name}</p>
              <p className="text-xs text-slate-500">{author.email}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-slate-400">Unknown author</p>
        )}
      </header>
      <div className="prose prose-invert prose-slate max-w-none">
        <p className="text-lg leading-relaxed text-slate-300 whitespace-pre-line">{post.body}</p>
      </div>
    </article>
  );
}
