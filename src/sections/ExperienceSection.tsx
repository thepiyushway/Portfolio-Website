import { motion } from 'framer-motion';
import { Briefcase, MapPin, Sparkles } from 'lucide-react';
import { experienceTimeline } from '../data/siteContent';

export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,99,194,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.09),transparent_32%)]" />

      <div className="section-wrapper relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
            <Sparkles size={14} /> Experience
          </p>
          <h2 className="text-3xl font-bold leading-tight text-text-primary sm:text-4xl">Professional Experience</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            A timeline of product engineering, applied AI, and research work shaped by execution, ownership, and real-world delivery.
          </p>
        </motion.div>

        <div className="relative mt-12 space-y-8">
          <div className="absolute bottom-0 top-0 hidden w-px bg-gradient-to-b from-brand-100/20 via-brand-primary/70 to-brand-100/20 md:block md:left-[17.25rem] xl:left-[19.5rem]" />

          {experienceTimeline.map((item, index) => {
            const isCurrent = item.status === 'Working';

            return (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="grid gap-5 md:grid-cols-[16rem_2.5rem_minmax(0,1fr)] md:items-start xl:grid-cols-[18rem_3rem_minmax(0,1fr)]"
              >
                <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft md:border-transparent md:bg-transparent md:p-0 md:text-right md:shadow-none">
                  <p className="text-lg font-semibold text-text-primary">{item.period}</p>
                  <p className="mt-2 text-2xl font-bold text-text-primary">{item.company}</p>

                  <div className="mt-5 space-y-3 text-sm text-text-secondary md:ml-auto">
                    <div className="flex items-center gap-2 md:justify-end">
                      <MapPin size={15} className="text-brand-primary" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <Briefcase size={15} className="text-brand-primary" />
                      <span className="whitespace-nowrap">{item.track}</span>
                    </div>
                  </div>

                  <span
                    className={`mt-5 inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold md:ml-auto ${
                      isCurrent
                        ? 'border-brand-100 bg-brand-50 text-brand-primary'
                        : 'border-slate-200 bg-surface-subtle text-text-secondary'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="relative hidden h-full md:flex md:justify-center">
                  <span className="relative z-10 mt-2 h-5 w-5 rounded-full border-4 border-surface-base bg-brand-primary shadow-[0_0_0_10px_rgba(0,99,194,0.14)]" />
                </div>

                <div className="rounded-[30px] border border-slate-200 bg-surface-base p-6 shadow-elevated sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">{item.role}</h3>
                      <p className="mt-2 max-w-3xl text-base leading-7 text-text-secondary">{item.summary}</p>
                    </div>
                    <div className="flex h-11 min-w-32 items-center justify-center rounded-xl border border-slate-200 bg-white px-3">
                      <img src={item.companyLogo} alt={item.company} className="max-h-6 w-auto object-contain" loading="lazy" />
                    </div>
                  </div>

                  <ul className="mt-6 space-y-4 text-base leading-8 text-text-secondary">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-brand-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-primary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}