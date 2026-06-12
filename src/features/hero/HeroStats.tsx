import { memo } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';
import type { HeroStat } from '@/content/site';

type HeroStatsProps = {
  stats: HeroStat[];
};

function HeroStatsBase({ stats }: HeroStatsProps) {
  return (
    <motion.div variants={fadeInUp} className="mb-8 grid max-w-xl grid-cols-3 gap-3 sm:gap-6">
      {stats.map((item, index) => (
        <div key={item.label} className={index < stats.length - 1 ? 'border-r border-slate-200 pr-3 sm:pr-6' : ''}>
          <p className="text-3xl font-extrabold leading-none text-slate-900 sm:text-4xl">{item.value}</p>
          <p className="mt-2 text-sm text-slate-500">{item.label}</p>
        </div>
      ))}
    </motion.div>
  );
}

export const HeroStats = memo(HeroStatsBase);
