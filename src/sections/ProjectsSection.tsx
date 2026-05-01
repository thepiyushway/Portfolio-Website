import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/siteContent';

export function ProjectsSection() {
  return (
    <section id="work" className="py-24">
      <div className="section-wrapper">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">Featured Projects</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg leading-7 text-slate-600">Practical solutions delivered for real-world impact.</p>

        <div className="grid gap-7 xl:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden rounded-2xl border border-slate-200/60 bg-surface-base shadow-elevated"
            >
              <a href={project.link} target="_blank" rel="noreferrer" className="relative block h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
              </a>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
                  <ExternalLink size={18} className="text-text-muted" />
                </div>
                <p className="mb-5 leading-relaxed text-text-secondary">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-text-primary">Impact: <span className="text-brand-primary">{project.impact}</span></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
