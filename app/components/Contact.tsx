import { siteConfig } from "@/app/content";
import { EmailIcon, GithubIcon, LinkedInIcon } from "@/app/components/Icons";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex flex-col items-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
              <EmailIcon className="h-6 w-6 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">Email</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">{siteConfig.email}</p>
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
              <GithubIcon className="h-6 w-6 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">GitHub</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">View my code</p>
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
              <LinkedInIcon className="h-6 w-6 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">LinkedIn</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Connect with me</p>
          </a>
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-500 dark:text-zinc-400">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your team.
          </p>
        </div>
      </div>
    </section>
  );
}