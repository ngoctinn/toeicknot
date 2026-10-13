import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <main className="max-w-2xl w-full flex flex-col items-center text-center space-y-6 bg-white dark:bg-zinc-900 p-10 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          🎯 Next.js + FastAPI Monorepo
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          ToeicKnot
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg">
          Nền tảng học và luyện thi TOEIC thông minh. Được xây dựng với Next.js (App Router), shadcn/ui và backend FastAPI.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button size="lg" className="px-6">
            Bắt đầu luyện thi
          </Button>
          <a
            href="http://localhost:8000/docs"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg", className: "px-6" })}
          >
            FastAPI Swagger Docs
          </a>
        </div>

        <div className="w-full pt-6 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 flex justify-between items-center">
          <span>Frontend: <code className="font-mono text-zinc-700 dark:text-zinc-300">port 3000</code></span>
          <span>Backend: <code className="font-mono text-zinc-700 dark:text-zinc-300">port 8000</code></span>
        </div>
      </main>
    </div>
  );
}
