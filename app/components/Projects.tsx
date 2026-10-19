import Link from "next/link";
import { projects } from "@/app/content";
import { VideoModal } from "@/app/components/VideoModal";
import { GithubIcon, ExternalLinkIcon } from "@/app/components/Icons";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            A selection of projects I&apos;ve worked on. Each represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Code
                  </Link>
                )}
                {project.videoId && (
                  <VideoModal videoId={project.videoId} />
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    Live Demo
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}