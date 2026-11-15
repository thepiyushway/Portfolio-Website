import { useState, type PointerEvent } from 'react';
import { motion } from 'framer-motion';
import { Pause, Play, Star } from 'lucide-react';
import { testimonialFeed, type Testimonial } from '@/content/testimonials';
import { Card } from '@/components/ui/Card';
import { useTestimonials } from './hooks/useTestimonials';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4" role="img" aria-label={`Rated ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={15}
          aria-hidden="true"
          className={i < rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}
        />
      ))}
    </div>
  );
}

function getInitials(name: string) {
  if (name.toLowerCase() === 'anonymous') return '?';
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

const avatarColors = [
  'from-violet-500 to-indigo-500',
  'from-rose-500 to-pink-500',
  'from-teal-500 to-cyan-500',
  'from-amber-500 to-orange-500',
  'from-blue-500 to-sky-500',
  'from-emerald-500 to-green-500',
];

function TestimonialCard({ item, colorIndex }: { item: Testimonial; colorIndex: number }) {
  const gradient = avatarColors[colorIndex % avatarColors.length];

  return (
    <Card className="border border-slate-100 bg-surface-base/95 p-6 shadow-soft flex flex-col h-full">
      <StarRating rating={item.rating} />

      <div className="flex-1 overflow-hidden min-h-0">
        <span className="text-4xl leading-none text-slate-200 font-serif select-none">&ldquo;</span>
        {item.quote ? (
          <p className="text-sm leading-6 text-text-secondary -mt-2 line-clamp-4">{item.quote}</p>
        ) : (
          <p className="text-sm leading-6 text-slate-500 italic -mt-2">No written feedback shared.</p>
        )}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}>
          <span className="text-white text-xs font-bold tracking-wide">{getInitials(item.name)}</span>
        </div>
        <span className="text-sm font-semibold text-text-primary">{item.name}</span>
      </div>
    </Card>
  );
}

export function TestimonialsSection() {
  const feed = useTestimonials(testimonialFeed);
  const doubledFeed = [...feed, ...feed];

  // Explicit, persistent pause (WCAG 2.2.2) — the only way to stop the motion
  // on touch devices, which have no hover.
  const [isPaused, setIsPaused] = useState(false);
  // Transient pause while a finger is held on the track (press-and-hold to read).
  const [isHeld, setIsHeld] = useState(false);

  const holdStart = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') setIsHeld(true);
  };
  const holdEnd = () => setIsHeld(false);

  return (
    <section id="testimonials" className="bg-slate-50 py-1.5">
      <div className="section-wrapper testimonials-section-wrapper py-1.5 md:py-2">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">What My Mentees and Colleagues Say</h2>
        {/* A single marquee serves every breakpoint, so mobile rotates through
            the full feed exactly like desktop does. */}
        <div
          className="testimonial-viewport relative overflow-hidden"
          onPointerDown={holdStart}
          onPointerUp={holdEnd}
          onPointerCancel={holdEnd}
          onPointerLeave={holdEnd}
        >
          <div
            id="testimonial-track"
            data-paused={isPaused || isHeld}
            className="testimonial-track flex w-max gap-4 pr-4 pb-4 sm:gap-6 sm:pr-6"
          >
            {doubledFeed.map((item, index) => {
              // The feed is doubled so the marquee can loop seamlessly. Only the
              // first copy is exposed to assistive tech; the clones are hidden so
              // each testimonial is announced exactly once.
              const isClone = index >= feed.length;
              return (
                <motion.div
                  key={`${item.id}-${isClone ? 'b' : 'a'}`}
                  aria-hidden={isClone || undefined}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className={`testimonial-item w-72 shrink-0 sm:w-96 h-76${isClone ? ' testimonial-clone' : ''}`}
                >
                  {/* Color follows position within the live feed (not the static
                      fallback) so each clone matches its original. */}
                  <TestimonialCard item={item} colorIndex={index % feed.length} />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-2 flex justify-center motion-reduce:hidden">
          <button
            type="button"
            onClick={() => setIsPaused((p) => !p)}
            aria-controls="testimonial-track"
            aria-label={isPaused ? 'Play testimonials' : 'Pause testimonials'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
          >
            {isPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
          </button>
        </div>

        <p className="text-center text-sm text-slate-500 py-2">
          Have a feedback for me?{' '}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdpJMwZJsFaG7WXWNMsQOItdl0NZHrVq8_3mjngVGPjR0iOFw/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm underline underline-offset-2 transition-colors hover:text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
          >
            Click here to share it.
          </a>
        </p>
      </div>
    </section>
  );
}
