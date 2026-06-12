import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { fadeInUp } from '@/lib/motion';
import type { HeroHeadingLine } from '@/content/site';

type HeroContentProps = {
  availabilityLabel: string;
  headingLines: HeroHeadingLine[];
  tagline: string;
};

const headingToneClass: Record<HeroHeadingLine['tone'], string> = {
  default: 'text-slate-900',
  brand: 'text-brand-600',
  accent: 'text-[#0063c2]'
};

export function HeroContent({ availabilityLabel, headingLines, tagline }: HeroContentProps) {
  return (
    <>
      <motion.div variants={fadeInUp} className="mb-4">
        <Badge variant="success">
          <span className="relative inline-flex h-2.5 w-2.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          {availabilityLabel}
        </Badge>
      </motion.div>

      <motion.h1 variants={fadeInUp} className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
        {headingLines.map((line) => (
          <span key={line.text} className={`block ${headingToneClass[line.tone]}`}>
            {line.text}
          </span>
        ))}
      </motion.h1>

      <motion.p variants={fadeInUp} className="mb-8 max-w-2xl text-lg leading-7 text-slate-600">
        {tagline}
      </motion.p>
    </>
  );
}
