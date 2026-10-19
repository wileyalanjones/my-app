import Link from "next/link";
import { resume, siteConfig } from "@/app/content";

export function Resume() {
  return (
    <section id="resume" className="py-20 sm:py-28 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            {resume.title}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
            {resume.description}
          </p>

          <Link
            href={siteConfig.resumePath}
            download={resume.fileName}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 dark:bg-white px-8 py-4 text-base font-medium text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Download Resume (PDF)
          </Link>

          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Or view it directly in your browser by clicking the link above.
          </p>
        </div>
      </div>
    </section>
  );
}