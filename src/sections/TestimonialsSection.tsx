import { motion } from 'framer-motion';
import { testimonialFeed } from '../data/siteContent';
import { Card } from '../components/Card';

export function TestimonialsSection() {
  const doubledFeed = [...testimonialFeed, ...testimonialFeed];

  return (
    <section id="testimonials" className="bg-slate-50 py-1.5">
      <div className="section-wrapper testimonials-section-wrapper py-1.5 md:py-2">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">What My Mentees and Colleagues Say</h2>
        <div className="relative overflow-hidden">
          <div className="testimonial-track flex w-max gap-6 pr-6">
            {doubledFeed.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="w-80 shrink-0 sm:w-96"
              >
                <Card className="border border-slate-100 bg-surface-base/95 p-6 shadow-soft">
                  <blockquote className="flex min-h-52 flex-col">
                    <p className="leading-7 text-text-secondary">&ldquo;{item.quote}&rdquo;</p>
                    <footer className="mt-auto pt-5 text-right text-sm font-semibold text-text-primary">- {item.name}</footer>
                  </blockquote>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:hidden" aria-hidden="true">
          {testimonialFeed.slice(0, 3).map((item) => (
            <Card key={`mobile-${item.name}`} className="border border-slate-100 bg-surface-base/95 p-6">
              <blockquote className="flex min-h-48 flex-col">
                <p className="leading-7 text-text-secondary">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-auto pt-5 text-right text-sm font-semibold text-text-primary">- {item.name}</footer>
              </blockquote>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          Have a feedback for me?{' '}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdpJMwZJsFaG7WXWNMsQOItdl0NZHrVq8_3mjngVGPjR0iOFw/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-slate-600 transition-colors"
          >
            Click here to share it.
          </a>
        </p>
      </div>
    </section>
  );
}
