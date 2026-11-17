import { ExternalLink, FolderKanban, Github, Lock } from 'lucide-react';
import { projects, type Project } from '@/config/site';
import { useReveal } from '@/hooks/useReveal';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useReveal(0.1);
  const unclickable = project.liveUrl === '#' && project.repoUrl === '#';

  return (
    <article
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} reveal-delay-${Math.min(index + 1, 4)} group grid gap-8 border-t border-neutral-200 pt-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14`}
    >
      <a
        href={project.liveUrl !== '#' ? project.liveUrl : undefined}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={project.liveUrl !== '#' ? `Open live demo of ${project.name}` : undefined}
        className={`relative block overflow-hidden rounded-2xl bg-neutral-100 ${project.liveUrl !== '#' ? 'cursor-pointer' : 'cursor-default'}`}
        onClick={(e) => {
          if (project.liveUrl === '#') e.preventDefault();
        }}
      >
        <img
          src={project.imageUrl}
          alt={`Preview of ${project.name}`}
          width={1200}
          height={750}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
      </a>

      <div className="flex flex-col justify-center">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-3 leading-relaxed text-ink-soft">{project.description}</p>

        <div className="mt-5 rounded-xl bg-neutral-50 p-4 text-sm leading-relaxed text-ink-soft">
          <span className="font-medium text-ink">Problem it solves: </span>
          {project.problem}
        </div>

        <ul className="mt-5 space-y-2 text-sm text-ink-soft">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
              {feature}
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-neutral-200 px-3.5 py-1 text-xs font-medium uppercase tracking-wide text-ink-mute"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {project.repoUrl !== '#' ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-neutral-300 px-5 py-2.5 text-sm text-ink-mute">
              <Lock className="h-4 w-4" />
              Private repository
            </span>
          )}
        </div>

        {unclickable && (
          <p className="mt-3 text-xs text-ink-mute">
            Placeholder project — set live and repository links for it to go live.
          </p>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink-mute">
          <FolderKanban className="h-3.5 w-3.5" />
          Featured Projects
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          Selected work, built
          <br />
          to solve real problems.
        </h2>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
