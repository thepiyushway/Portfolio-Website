import { memo } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';

type HeroCompany = {
  name: string;
  logo: string;
};

type HeroLogosProps = {
  companies: HeroCompany[];
};

function HeroLogosBase({ companies }: HeroLogosProps) {
  return (
    <motion.div variants={fadeInUp} className="mb-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Worked at</p>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8" aria-label="Companies worked at">
        {companies.map((company) => (
          <li key={company.name} className="flex items-center">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              loading="lazy"
              decoding="async"
              className="h-6 w-auto opacity-80 transition duration-300 hover:opacity-100"
              onError={(e) => {
                const logo = e.currentTarget;
                logo.style.display = 'none';
                const fallback = logo.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = 'inline-flex';
              }}
            />
            <span className="hidden text-sm font-medium text-slate-500">{company.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export const HeroLogos = memo(HeroLogosBase);
