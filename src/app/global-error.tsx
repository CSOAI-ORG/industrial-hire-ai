'use client';

export default function GlobalError({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="max-w-[600px] mx-auto my-[100px] px-5 text-center bg-background text-foreground">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="text-muted-foreground mb-6">An unexpected error occurred. Please refresh the page.</p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-lg bg-brand-500 text-white border-none cursor-pointer hover:opacity-90 transition-opacity"
        >
          Refresh
        </button>
      </body>
    </html>
  );
}