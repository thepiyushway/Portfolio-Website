import { memo } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';
import { openSocialWithMobileFallback } from '@/lib/socials';
import { socialHoverAnimation, socialTapAnimation } from './animations';

type HeroSocialLink = {
  name: string;
  href: string;
  label: string;
  logo: string;
  imgClass: string;
};

type HeroSocialsProps = {
  prompt: string;
  links: HeroSocialLink[];
};

function HeroSocialsBase({ prompt, links }: HeroSocialsProps) {
  return (
    <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-3">
      <p className="text-sm font-medium text-slate-500">{prompt}</p>
      <div className="flex flex-wrap items-center gap-3">
        {links.map(({ name, href, label, logo, imgClass }) => (
          <motion.a
            key={name}
            href={href}
            onClick={(event) => openSocialWithMobileFallback(event, href)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={socialHoverAnimation}
            whileTap={socialTapAnimation}
            className="group relative flex cursor-pointer items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/25"
          >
            <img src={logo} alt="" className={imgClass} />
            <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 opacity-0 shadow-soft transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
              {label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export const HeroSocials = memo(HeroSocialsBase);
