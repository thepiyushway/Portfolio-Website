import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const partnerLogos = [
  { name: 'Microsoft', src: '/logos/microsoft-logo.png' },
  { name: 'Amazon', src: '/logos/amazon-logo.png' },
  { name: 'American Express', src: '/logos/american-express-logo.png' },
  { name: 'Kotak Mahindra Bank', src: '/logos/kotak-mahindra-bank-logo.png' }
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 md:scroll-mt-28">
      <div className="section-wrapper !pb-6 !pt-24 md:!pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="order-1 lg:col-start-2 lg:row-start-1"
          >
            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
              Building a product, business, or career? I can help you get it right :)
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-2 relative lg:col-start-1 lg:row-start-1 lg:row-span-2"
          >
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-brand-primary/10 blur-2xl" aria-hidden="true" />
            <div className="absolute -right-8 bottom-8 h-28 w-28 rounded-full bg-cyan-300/20 blur-2xl" aria-hidden="true" />

            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-elevated">
              <img
                src="/images/profile.jpg"
                alt="Piyush working on product and AI systems"
                className="h-72 w-full rounded-2xl object-cover sm:h-80"
                loading="lazy"
              />

              <div className="mt-4 rounded-2xl border border-slate-200/80 bg-slate-50/85 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-text-primary">Brands and teams I have collaborated with</p>
                  <ArrowUpRight size={16} className="text-brand-primary" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {partnerLogos.map((logo) => (
                    <div
                      key={logo.name}
                      className="flex h-14 items-center justify-center rounded-xl border border-slate-200 bg-white px-3"
                    >
                      <img src={logo.src} alt={logo.name} className="max-h-7 w-auto object-contain" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="order-3 lg:col-start-2 lg:row-start-2"
          >
            <div className="mt-5 max-w-2xl space-y-4 text-base leading-8 text-text-secondary">
              <p>
                I am Piyush Sharma, from [your city, country], and I studied at [your college/university]. That early
                mix of curiosity and discipline shaped how I build today.
              </p>
              <p>
                I started in software engineering, writing production systems, handling failures, and learning what it
                really takes to ship reliable products. Over time, I worked across teams and projects linked to brands
                like Microsoft, Amazon, American Express, and Kotak Mahindra Bank.
              </p>
              <p>
                Today, I work as a software engineer, AI consultant, and educator. I help teams design practical AI
                systems, build strong full-stack products, and mentor engineers who want to grow faster with solid
                fundamentals.
              </p>
              <p>
                What makes me different is simple: I care about outcomes, not noise. I focus on clear thinking, honest
                execution, and solutions that hold up in the real world.
              </p>
              <p className="font-medium text-text-primary">
                If you are building something meaningful and want a thoughtful technical partner, let&apos;s connect.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}