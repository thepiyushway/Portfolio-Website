import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { companyExperiences, type CompanyExperience } from '@/content/experience';
import { skillCategories, skillsIntro } from '@/content/skills';

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">{children}</p>
  );
}

function CompanyCard({ item, isCurrent }: { item: CompanyExperience; isCurrent: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `company-panel-${item.id}`;
  const primaryRole = item.roles[0]!;
  const allHighlights = item.roles.flatMap((role) => role.highlights);
  const allTools = Array.from(new Set(item.roles.flatMap((role) => role.tools)));

  return (
    <div
      className={`overflow-hidden rounded-l border shadow-soft transition-shadow hover:shadow-elevated ${
        isCurrent ? 'border-brand-primary/30 bg-brand-50/30' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="flex items-start gap-4 p-5">
        <img
          src={item.companyLogo}
          alt={item.company}
          className="h-14 w-14 flex-shrink-0 border border-slate-100 bg-white object-contain"
          loading="lazy"
        />

        <div className="min-w-0 flex-1">
          {/* Company name + location — primary row */}
          <div className="flex flex-wrap items-start justify-between gap-2">
            <p className="text-xl font-bold leading-tight text-text-primary sm:text-2xl">{item.company}</p>
            <p className="inline-flex items-center gap-1 text-[14px] font-medium leading-snug text-text-muted">
              <MapPin size={14} className="flex-shrink-0 text-brand-primary" />
              {item.location}
            </p>
          </div>

          {/* Roles + current badge */}
          <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
            {item.roles.map((role) => (
              <span key={role.id} className="text-[15px] font-semibold leading-snug text-brand-primary">
                {role.role}
                {item.roles.length > 1 && (
                  <span className="ml-1.5 text-[12px] font-medium text-text-muted">{role.period}</span>
                )}
              </span>
            ))}
            {isCurrent && (
              <Badge variant="success" className="px-0.5 text-[12px]">
                Current
              </Badge>
            )}
          </div>

          {/* Key Impact */}
          <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-text-secondary">
            <TrendingUp size={16} className="mt-0.5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
            <span>
              <span className="font-semibold text-emerald-700">Key Impact: </span>
              {primaryRole.keyImpact}
            </span>
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-center gap-1.5 border-t border-slate-100 text-xs font-semibold text-brand-primary transition hover:bg-surface-subtle"
      >
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
            <div className="space-y-5 border-t border-slate-100 px-4 pb-4 pt-4">
              {/* Summary */}
              <div>
                <p className="text-sm leading-7 text-text-secondary">{primaryRole.summary}</p>
              </div>

              {/* Highlights */}
              <div>
                <SectionLabel>Highlights</SectionLabel>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-text-secondary">
                  {allHighlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-[11px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-primary" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <SectionLabel>Tech Stack</SectionLabel>
                <p className="mt-1.5 text-sm font-medium leading-7 text-text-secondary">{allTools.join(' · ')}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SkillsPanel() {
  return (
    <div>
      <h3 className="border-l-4 border-brand-primary pl-3 text-xl font-bold text-text-primary">Skills</h3>

      <p className="mt-4 text-sm leading-7 text-text-secondary">{skillsIntro}</p>

      <div className="mt-6 space-y-4">
        {skillCategories.map((category) => (
          <div key={category.id}>
            <SectionLabel>{category.category}</SectionLabel>
            <p className="mt-1 text-sm font-medium leading-6 text-text-secondary">
              {category.skills.join(' · ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden py-12 md:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,99,194,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.09),transparent_32%)]" />

      <div className="section-wrapper relative">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-8">
          {/* Expertise — left on desktop, below journey on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-2 lg:order-none lg:sticky lg:top-24 lg:self-start"
          >
            <SkillsPanel />
          </motion.div>

          {/* Professional Journey — right on desktop, top on mobile */}
          <div className="order-1 lg:order-none pt-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="border-l-4 border-brand-primary pl-3 sm:pl-4 text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:translate-x-12">
                Professional Journey
              </h2>
            </motion.div>

            <div className="mt-8 space-y-5">
              {companyExperiences.map((item, index) => {
                const [start, end] = item.period.split(' - ');
                const isCurrent = end === 'Present';
                const topLabel = isCurrent ? 'Present' : end;
                const bottomLabel = start;
                const isLast = index === companyExperiences.length - 1;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative flex gap-4 lg:gap-6"
                  >
                    {/* Timeline column */}
                    <div className="relative hidden flex-shrink-0 lg:block lg:w-16">
                      <div className="pt-6 text-right">
                        <p
                          className={`text-[11px] font-bold uppercase tracking-wide ${
                            isCurrent ? 'text-emerald-600' : 'text-text-muted'
                          }`}
                        >
                          {topLabel}
                        </p>
                        <p className="mt-0.5 text-[11px] font-medium text-text-muted">{bottomLabel}</p>
                      </div>
                      <span
                        className="absolute right-[-18px] top-7 h-3 w-3 rounded-full border-[3px] border-surface-base bg-brand-primary shadow-[0_0_0_4px_rgba(0,99,194,0.14)]"
                        aria-hidden="true"
                      />
                      {!isLast && (
                        <span
                          className="absolute bottom-[-20px] right-[-13px] top-10 w-px bg-gradient-to-b from-brand-primary/40 to-brand-100/20"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <CompanyCard item={item} isCurrent={isCurrent} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
