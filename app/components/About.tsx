import { aboutText } from "@/app/content";
import { Reveal } from "@/app/components/Reveal"

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-stone-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-300">
              Get to know me better — my background, passions, and what drives me.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="prose prose-stone dark:prose-invert max-w-none">
            {aboutText.map((paragraph, index) => (
              <p key={index} className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6 text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}