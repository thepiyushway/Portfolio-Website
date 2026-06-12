import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { companyExperiences, type CompanyExperience, type ExperienceRole } from '@/content/experience';
import { skillCategories } from '@/content/skills';

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">{children}</p>
  );
}

function RoleDetail({ role }: { role: ExperienceRole }) {
  return (
    <div className="space-y-5">
      <div>
        <p className="mt-1 text-sm text-text-primary">{role.track}</p>
      </div>

      {/* Impact */}
      <div>
        <SectionLabel>Highlights</SectionLabel>
        <ul className="mt-2 space-y-2 text-sm leading-7 text-text-secondary">
          {role.highlights.map((highlight) => (
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
        <p className="mt-1.5 text-sm font-medium leading-7 text-text-secondary">
          {role.tools.join(' · ')}
        </p>
      </div>
    </div>
  );
}

function CompanyCard({ item }: { item: CompanyExperience }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `company-panel-${item.id}`;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition-shadow hover:shadow-elevated">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-start gap-3.5 p-4 text-left sm:gap-4 sm:p-5"
      >
        <img
          src={item.companyLogo}
          alt={item.company}
          className="h-[42px] w-[42px] flex-shrink-0 object-contain"
          loading="lazy"
        />

        <div className="min-w-0 flex-1">
          {/* Company name + chevron — primary row */}
          <div className="flex items-center justify-between gap-2">
            <p className="text-xl font-bold leading-tight text-text-primary sm:text-2xl">{item.company}</p>
            <ChevronDown
              size={20}
              aria-hidden="true"
              className={`flex-shrink-0 text-brand-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>

          {/* Metadata block: role · duration · location */}
          <div className="mt-1.5 space-y-1">
            {item.roles.map((role) => (
              <div key={role.id} className="space-y-0.5">
                <p className="text-[15px] font-semibold leading-snug text-text-primary">{role.role}</p>
                <p className="text-[13px] font-medium leading-snug text-text-muted">{role.period}</p>
              </div>
            ))}
            <p className="inline-flex items-center gap-1 text-[13px] font-medium leading-snug text-text-muted">
              <MapPin size={13} className="flex-shrink-0 text-brand-primary" />
              {item.location}
            </p>
          </div>
        </div>
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
            <div className="space-y-6 border-t border-slate-100 px-4 pb-5 pt-4 sm:px-5">
              {item.roles.map((role, i) => (
                <div key={role.id} className={i > 0 ? 'border-t border-slate-100 pt-6' : ''}>
                  <RoleDetail role={role} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SkillsPanel() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="border-l-4 border-brand-primary pl-3 text-xl font-bold text-text-primary">Expertise</h3>

      <div className="mt-6 space-y-6">
        {skillCategories.map((category) => (
          <div key={category.id}>
            <p className="text-sm font-bold text-text-primary">{category.category}</p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-text-secondary"
                >
                  {skill.name}
                </span>
              ))}
            </div>
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
          <div className="order-1 lg:order-none">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold leading-tight text-text-primary sm:text-4xl">Professional Journey</h2>
            </motion.div>

            <div className="relative mt-8 lg:pl-9">
              <div
                className="absolute bottom-6 left-[7px] top-6 hidden w-px bg-gradient-to-b from-brand-100/20 via-brand-primary/60 to-brand-100/20 lg:block"
                aria-hidden="true"
              />

              <div className="space-y-4">
                {companyExperiences.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative"
                  >
                    <span
                      className="absolute -left-9 top-9 hidden h-4 w-4 rounded-full border-4 border-surface-base bg-brand-primary shadow-[0_0_0_8px_rgba(0,99,194,0.14)] lg:block"
                      aria-hidden="true"
                    />
                    <CompanyCard item={item} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
