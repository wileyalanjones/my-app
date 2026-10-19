import Link from "next/link";
import { siteConfig } from "@/app/content";
import { ArrowRightIcon, GithubIcon, LinkedInIcon, EmailIcon, ArrowDownIcon } from "@/app/components/Icons";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-200/30 via-transparent to-transparent dark:from-zinc-800/30 dark:via-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
            {siteConfig.name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            {siteConfig.title}
          </p>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {siteConfig.tagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              View My Work
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            aria-label="Email"
          >
            <EmailIcon className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ArrowDownIcon className="h-6 w-6 text-zinc-400 dark:text-zinc-500" />
      </div>
    </section>
  );
}