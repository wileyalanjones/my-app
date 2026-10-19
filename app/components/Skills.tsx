import { skills } from "@/app/content";

const skillCategories = [
  { key: "languages", label: "Languages", icon: "code" },
  { key: "frontend", label: "Frontend", icon: "layout" },
  { key: "backend", label: "Backend", icon: "server" },
  { key: "tools", label: "Tools & DevOps", icon: "tool" },
] as const;

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Technologies and tools I work with regularly. Always expanding my toolkit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const categoryKey = category.key as keyof typeof skills;
            const items = skills[categoryKey];
            return (
              <div
                key={category.key}
                className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  {category.label}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" aria-hidden="true" />
                      <span className="text-zinc-600 dark:text-zinc-300 text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}