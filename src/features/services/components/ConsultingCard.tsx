import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cardVariant } from '../animations';
import { AI_CONSULTING_ITEMS, STRATEGY_CALL_URL } from '../content';

export function ConsultingCard() {
  return (
    <motion.div
      variants={cardVariant}
      className="flex flex-col rounded-2xl bg-[linear-gradient(145deg,#0f172a_0%,#0b2f58_55%,#1e1b4b_100%)] p-8 shadow-elevated"
    >
      <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
        <BrainCircuit size={22} aria-hidden="true" className="text-cyan-300" />
      </span>

      <h3 className="mb-3 text-2xl font-bold text-white">AI Consulting &amp; Strategy</h3>
      <p className="mb-6 text-sm leading-7 text-cyan-100/95">
        Whether you want to ship a product powered by AI, embed intelligence into what you've already built,
        or just need a sharp technical mind in the room — I can help.
      </p>

      <ul className="mb-8 space-y-3">
        {AI_CONSULTING_ITEMS.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-3 text-sm text-cyan-100/90">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <Icon size={14} aria-hidden="true" className="shrink-0 text-white" />
            </span>
            {text}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Button
          href={STRATEGY_CALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="md"
        >
          Book a Strategy Call
        </Button>
      </div>
    </motion.div>
  );
}
