import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '@/content/projects';

export function ProjectsSection() {
  return (
    <section id="work" className="py-8 md:py-2">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold leading-tight text-text-primary sm:text-4xl">Featured Projects</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
            Practical solutions delivered for real-world impact.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-surface-base shadow-elevated"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-bold text-text-primary shadow-soft backdrop-blur-sm">
                  {project.title}
                </span>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
                <p className="mt-2 leading-relaxed text-text-secondary">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 pt-6">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:bg-slate-50"
                  >
                    <Github size={15} /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
