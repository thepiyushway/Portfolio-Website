import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Rocket } from 'lucide-react';
import { cardVariant } from '../animations';
import { MENTORSHIP_ITEMS, MENTORSHIP_URL } from '../content';

export function MentorshipCard() {
  return (
    <motion.div
      variants={cardVariant}
      className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-soft"
    >
      <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
        <Rocket size={22} className="text-brand-primary" />
      </span>

      <h3 className="mb-2 text-2xl font-bold text-slate-900">Mentorship Services</h3>
      <p className="mb-6 text-sm leading-6 text-slate-500">
        Accelerate your career with personalized, tactical guidance from someone who's been through it.
      </p>

      <ul className="mb-8 space-y-3.5">
        {MENTORSHIP_ITEMS.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <CheckCircle2 size={18} className="shrink-0 text-green-500" />
            <span className="text-sm font-medium text-slate-700">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <a
          href={MENTORSHIP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition-colors duration-200 hover:text-brand-hover"
        >
          View All Services
          <ArrowRight size={15} />
        </a>
      </div>
    </motion.div>
  );
}
