import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, MapPin, Sparkles } from 'lucide-react';
import { experienceTimeline, type ExperienceEntry } from '../data/siteContent';

function ExperienceAccordionCard({ item, index }: { item: ExperienceEntry; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `experience-panel-${index}`;

  return (
    <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-soft">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center gap-4 p-5 text-left"
      >
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white">
          <img src={item.companyLogo} alt={item.company} className="max-h-6 w-auto object-contain" loading="lazy" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-base font-bold text-text-primary">{item.company}</p>
          <p className="text-sm text-text-secondary">{item.role}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">{item.period}</p>
        </div>

        <ChevronDown
          size={20}
          aria-hidden="true"
          className={`flex-shrink-0 text-brand-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-slate-100 px-5 pb-6 pt-4">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-secondary">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-brand-primary" />
                  {item.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Briefcase size={15} className="text-brand-primary" />
                  {item.track}
                </span>
              </div>

              <p className="text-sm leading-7 text-text-secondary">{item.summary}</p>

              <ul className="space-y-3 text-sm leading-7 text-text-secondary">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-primary"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
            <Sparkles size={14} /> WORK HISTORY
          </p>
          <h2 className="text-3xl font-bold leading-tight text-text-primary sm:text-4xl">Professional Experience</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            Where I’ve worked, what I’ve built, and the impact I’ve created along the way.
          </p>
        </motion.div>

        {/* Mobile: collapsed accordion — taps reveal location, summary, highlights, and tools */}
        <div className="mt-10 space-y-3 md:hidden">
          {experienceTimeline.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ExperienceAccordionCard item={item} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Desktop: full timeline */}
        <div className="relative mt-12 hidden space-y-8 md:block">
          <div className="absolute bottom-0 top-0 w-px bg-gradient-to-b from-brand-100/20 via-brand-primary/70 to-brand-100/20 md:left-[17.25rem] xl:left-[19.5rem]" />

          {experienceTimeline.map((item, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
