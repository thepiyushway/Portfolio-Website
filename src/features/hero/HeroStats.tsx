import { memo } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';
import type { HeroStat } from '@/content/site';

type HeroStatsProps = {
  stats: HeroStat[];
};

function HeroStatsBase({ stats }: HeroStatsProps) {
  return (
    // Columns size to their content instead of splitting the width into equal
    // thirds — otherwise a wide value like "1,000+" overflows its column and
    // collides with the divider/next stat (narrow phones, and the two-column
    // hero layout around 1024px).
    <motion.dl
      variants={fadeInUp}
      className="mb-8 grid max-w-xl grid-cols-[repeat(3,auto)] justify-start gap-3 sm:gap-6"
    >
      {stats.map((item, index) => (
        // flex-col-reverse keeps the value visually on top while preserving a
        // valid dt → dd reading order ("<label>, <value>") for assistive tech.
        // justify-end (= top, in a reversed column) keeps values aligned when
        // one label wraps to more lines than its neighbours.
        <div
          key={item.label}
          className={`flex flex-col-reverse justify-end ${index < stats.length - 1 ? 'border-r border-slate-200 pr-3 sm:pr-6' : ''}`}
        >
          <dt className="mt-2 text-sm text-slate-500">{item.label}</dt>
          <dd className="whitespace-nowrap text-[clamp(1.5rem,7.5vw,1.875rem)] font-extrabold leading-none text-slate-900 sm:text-4xl">{item.value}</dd>
        </div>
      ))}
    </motion.dl>
  );
}

export const HeroStats = memo(HeroStatsBase);
