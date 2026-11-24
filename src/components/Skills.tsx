
import { Code2, Database, Globe, ShieldCheck, Layers, Layout, Server, Settings } from 'lucide-react';
import { skills } from '@/config/site';

const skillLogos: Record<string, string> = {
  Python: 'python/python-original',
  JavaScript: 'javascript/javascript-original',
  Java: 'java/java-original',
  TypeScript: 'typescript/typescript-original',
  HTML: 'html5/html5-original',
  CSS: 'css3/css3-original',
  'C++': 'cplusplus/cplusplus-original',
  React: 'react/react-original',
  MySQL: 'mysql/mysql-original',
  SQL: 'mysql/mysql-original',
  Git: 'git/git-original',
  GitHub: 'github/github-original',
  'VS Code': 'vscode/vscode-original',
  Vercel: 'vercel/vercel-original',
  Pygame: 'pygame/pygame-original',
  Unity: 'unity/unity-original',
};

const fallbackIcons: Record<string, typeof Code2> = {
  'Responsive UI': Layout,
  'Component-Based Development': Layers,
  APIs: Globe,
  'Database Design': Database,
  Authentication: ShieldCheck,
  'Unity (Learning)': Settings,
};

function SkillIcon({ name }: { name: string }) {
  const logo = skillLogos[name];

  if (logo) {
    return (
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}.svg`}
        alt={`${name} logo`}
        className="h-6 w-6 shrink-0 object-contain"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    );
  }

  const Icon = fallbackIcons[name] || Code2;

  return <Icon className="h-5 w-5 shrink-0 text-neutral-600" />;
}

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="flex items-center gap-3 font-display text-4xl font-bold uppercase leading-none tracking-tight text-ink sm:text-5xl lg:text-6xl">
          <Code2 className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" />
          My Skills
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="border-t-2 border-neutral-900 pt-6"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink">
                {group.category}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm text-ink-soft transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:bg-white hover:shadow-sm"
                  >
                    <SkillIcon name={item} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
