import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Next.js + TypeScript
        </h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          A modern template with Tailwind CSS, ESLint, and Prettier
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
              Read the Docs
            </Button>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              View on GitHub
            </Button>
          </a>
        </div>
      </main>
    </div>
  );
}
