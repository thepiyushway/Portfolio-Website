import { motion } from 'framer-motion';
import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { siteConfig } from '../../config/site';
import { staggerContainer } from '../../lib/motion';
import { heroImageReveal, heroViewport } from './animations';
import { HeroCTA } from './HeroCTA';
import { HeroContent } from './HeroContent';
import { HeroLogos } from './HeroLogos';
import { HeroSocials } from './HeroSocials';
import { HeroStats } from './HeroStats';
import { HeroSubscribe } from './HeroSubscribe';

const hero = siteConfig.hero;

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-4">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" />
      <div className="pointer-events-none absolute -right-44 top-30 h-120 w-120 rounded-full bg-gradient-to-br from-brand-primary/20 via-transparent to-transparent blur-3xl" />

      <SectionWrapper className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={heroViewport} variants={staggerContainer}>
          <HeroContent
            availabilityLabel={hero.availabilityLabel}
            headingLines={hero.headingLines}
            tagline={hero.tagline}
          />
          <HeroStats stats={hero.stats} />
          <HeroLogos companies={hero.workedWith} />
          <HeroCTA primary={hero.cta.primary} secondary={hero.cta.secondary} />
          <HeroSocials prompt={hero.socialPrompt} links={hero.socialLinks} />
        </motion.div>

        <motion.div
          initial={heroImageReveal.initial}
          whileInView={heroImageReveal.whileInView}
          viewport={heroViewport}
          transition={heroImageReveal.transition}
          className="relative"
        >
          <div className="relative rounded-2xl border border-slate-200 bg-gradient-to-br from-surface-base/80 to-brand-50 p-1 shadow-elevated">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/20 via-brand-100/25 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-xl bg-surface-base">
              <img
                src={hero.avatar}
                alt="Profile"
                loading="lazy"
                className="h-120 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          <HeroSubscribe
            label={hero.subscribe.label}
            placeholder={hero.subscribe.placeholder}
            helperText={hero.subscribe.helperText}
            idleLabel={hero.subscribe.idleLabel}
            successLabel={hero.subscribe.successLabel}
          />
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
