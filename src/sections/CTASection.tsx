import { ArrowRight, BookOpen, Cast, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export function CTASection() {
  return (
    <section className="py-24">
      <div className="section-wrapper rounded-2xl bg-brand-gradient p-8 text-white shadow-elevated sm:grid sm:grid-cols-2 sm:gap-8">
        <motion.div initial={{ opacity: 0, x: -26 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-300">AI Strategic Consulting</p>
          <h3 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">I help founders and engineering leaders integrate generative AI into their product strategy.</h3>
          <ul className="mb-5 space-y-2 text-sm text-cyan-200">
            <li className="flex gap-3"><Cast size={20} className="text-cyan-300" /> Go-to-market readiness</li>
            <li className="flex gap-3"><Globe size={20} className="text-cyan-300" /> Systems architecture resilience</li>
            <li className="flex gap-3"><BookOpen size={20} className="text-cyan-300" /> ROI-driven implementation sprints</li>
          </ul>
          <Button onClick={() => window.location.assign('#contact')} className="text-sm" variant="primary">
            Book a Strategy Call <ArrowRight size={16} />
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 26 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-soft backdrop-blur-sm">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-cyan-200">Mentorship Program</p>
            <h4 className="mb-3 text-xl font-bold text-white">Accelerate your AI engineering career</h4>
            <p className="mb-4 text-sm text-cyan-200">A 12-week cohort for experienced engineers to master product-grade AI systems and leadership through real engagement.</p>
            <Button variant="secondary" onClick={() => window.location.assign('#contact')}>
              Apply for Mentorship
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
