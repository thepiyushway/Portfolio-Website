import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { openSocialWithMobileFallback, SOCIAL_LOGOS, type SocialId } from '@/lib/socials';

type AboutSocial = {
  id: SocialId;
  href: string;
  label: string;
  logo: string;
  imgClass: string;
};

const SOCIALS = [
  {
    id: 'youtube',
    href: 'https://www.youtube.com/@ThePiyushWay?sub_confirmation=1',
    label: 'Subscribe on YouTube',
    logo: SOCIAL_LOGOS.youtube,
    imgClass: 'h-[40px] w-[55px] rounded-m object-contain'
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/thepiyushway/',
    label: 'Connect on LinkedIn',
    logo: SOCIAL_LOGOS.linkedin,
    imgClass: 'h-[40px] w-[40px] rounded-m object-contain'
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/thepiyushway/',
    label: 'Follow on Instagram',
    logo: SOCIAL_LOGOS.instagram,
    imgClass: 'h-[40px] w-[40px] rounded-m object-contain'
  },
  {
    id: 'twitter',
    href: 'https://x.com/thepiyushway',
    label: 'Follow on X',
    logo: SOCIAL_LOGOS.twitter,
    imgClass: 'h-[40px] w-[40px] rounded-m object-contain'
  }
] as const satisfies readonly AboutSocial[];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 md:scroll-mt-28">
      <div className="section-wrapper !pb-16 !pt-24 md:!pt-28">
        <div className="grid items-stretch gap-10 lg:grid-cols-[5fr_7fr] lg:gap-12">

          {/* Heading — shown first on mobile only, hidden on desktop (desktop version is inside Content below) */}
          <div className="lg:hidden">
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                OPEN FOR MENTORSHIP
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-primary">
                AI STRATEGIST
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
              Hey! I'm{' '}
              <span className="text-brand-primary">Piyush Sharma</span>
            </h1>
          </div>

          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full overflow-hidden rounded-3xl border border-slate-200 shadow-elevated">
              <img
                src="/images/about-photo.jpg"
                alt="Piyush Sharma"
                className="h-80 w-full object-cover object-bottom sm:h-96 lg:h-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <div className="hidden lg:block">
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                  OPEN FOR MENTORSHIP
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-primary">
                  AI STRATEGIST
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
                Hey! I'm{' '}
                <span className="text-brand-primary">Piyush Sharma</span>
              </h1>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-base leading-8 text-text-secondary">
              <p>I build products, design systems, and explore how AI can solve real-world problems.</p>
              <p>
                Since graduating from{' '}
                <strong className="font-semibold text-text-primary">Punjab Engineering College</strong>, I've
                worked across <strong className="font-semibold text-text-primary">Microsoft</strong>,{' '}
                <strong className="font-semibold text-text-primary">Amazon</strong>, and{' '}
                <strong className="font-semibold text-text-primary">American Express</strong>, contributing to
                everything from full-stack applications to AI-powered solutions.
              </p>
              <p>
                Today, I work with companies to turn AI into practical business value, and with engineers to turn
                potential into careers - helping them learn, grow, and break into top tech roles.
              </p>
              <p>
                What makes me different is simple - I care about outcomes, not noise. I focus on clear thinking,
                honest execution and solutions that hold up in the real world.
              </p>
              <p>
                This website is a collection of the projects, experiments, and lessons that have shaped my journey
                so far. Hope you like it :)
              </p>
            </div>

            {/* Social links + CTA */}
            <div className="mt-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                {SOCIALS.map(({ id, href, label, logo, imgClass }) => (
                  <a
                    key={id}
                    href={href}
                    onClick={(e) => openSocialWithMobileFallback(e, href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-md transition-transform duration-150 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                  >
                    <img src={logo} alt="" className={imgClass} />
                  </a>
                ))}
              </div>

              <a
                href="#work"
                className="inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-brand-primary transition-colors hover:text-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
              >
                View My Work <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
