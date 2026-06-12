import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonialFeed, type Testimonial } from '@/content/testimonials';
import { Card } from '@/components/ui/Card';
import { useTestimonials } from './hooks/useTestimonials';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={15}
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
          <p className="text-sm leading-6 text-slate-400 italic -mt-2">No written feedback shared.</p>
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

  return (
    <section id="testimonials" className="bg-slate-50 py-1.5">
      <div className="section-wrapper testimonials-section-wrapper py-1.5 md:py-2">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">What My Mentees and Colleagues Say</h2>
        <div className="relative overflow-hidden">
          <div className="testimonial-track flex w-max gap-6 pr-6 pb-4">
            {doubledFeed.map((item, index) => (
              <motion.div
                key={`${item.id}-${index < feed.length ? 'a' : 'b'}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="w-80 shrink-0 sm:w-96 h-76"
              >
                <TestimonialCard item={item} colorIndex={index % testimonialFeed.length} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:hidden" aria-hidden="true">
          {feed.slice(0, 3).map((item, index) => (
            <TestimonialCard key={item.id} item={item} colorIndex={index} />
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 py-2">
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
